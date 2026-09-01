'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageSequenceCanvasProps {
  totalFrames?: number;
  initialPreloadCount?: number;
  className?: string;
  onInitialLoadComplete?: () => void;
}

export const ImageSequenceCanvas: React.FC<ImageSequenceCanvasProps> = ({
  totalFrames = 812,
  initialPreloadCount = 150,
  className = '',
  onInitialLoadComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Array storing loaded Image objects (or null if not loaded yet)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  // Store current rendered frame index
  const frameSequenceRef = useRef<{ frame: number }>({ frame: 0 });

  // Preloader State
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fadePreloader, setFadePreloader] = useState<boolean>(false);

  // Helper to format frame path
  const getFramePath = (index: number) => {
    const frameNumber = String(index + 1).padStart(4, '0');
    return `/frames/frame_${frameNumber}.jpg`;
  };

  // Helper to draw a frame onto canvas with 'cover' object-fit scaling
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find requested frame or closest available loaded frame
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete) {
      // Fallback: search backwards then forwards for closest loaded frame
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i] && imagesRef.current[i]?.complete) {
          img = imagesRef.current[i];
          break;
        }
      }
      if (!img || !img.complete) {
        for (let i = frameIndex + 1; i < totalFrames; i++) {
          if (imagesRef.current[i] && imagesRef.current[i]?.complete) {
            img = imagesRef.current[i];
            break;
          }
        }
      }
    }

    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;

    if (!imgWidth || !imgHeight) return;

    // Calculate aspect ratio cover dimensions
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = canvasWidth / imgAspect;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle canvas sizing for high DPI screens
  const updateCanvasDimensions = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Redraw current frame with updated dimensions
    drawFrame(Math.round(frameSequenceRef.current.frame));
  };

  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);

    let isMounted = true;
    let initialLoadedCount = 0;

    // Load a single frame image and return promise
    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = getFramePath(index);
        img.onload = () => {
          if (isMounted) {
            imagesRef.current[index] = img;
          }
          resolve(img);
        };
        img.onerror = () => {
          // Retry once on failure or resolve gracefully
          resolve(img);
        };
      });
    };

    // Phase 1: Load initial batch (0 to initialPreloadCount - 1)
    const loadInitialBatch = async () => {
      const initialCount = Math.min(initialPreloadCount, totalFrames);
      
      const promises: Promise<void>[] = [];
      for (let i = 0; i < initialCount; i++) {
        const promise = loadImage(i).then(() => {
          if (!isMounted) return;
          initialLoadedCount++;
          const currentProgress = Math.min(
            100,
            Math.floor((initialLoadedCount / initialCount) * 100)
          );
          setProgress(currentProgress);
        });
        promises.push(promise);
      }

      await Promise.all(promises);

      if (!isMounted) return;

      // Draw first frame immediately
      drawFrame(0);

      // Start fade out of preloader UI
      setFadePreloader(true);
      setTimeout(() => {
        if (isMounted) {
          setIsLoaded(true);
          ScrollTrigger.refresh();
          if (onInitialLoadComplete) onInitialLoadComplete();
        }
      }, 600);

      // Phase 2: Background caching of remaining frames in chunked concurrency
      loadRemainingFramesBackground();
    };

    // Load remaining frames in background without blocking UI
    const loadRemainingFramesBackground = async () => {
      const remainingIndices: number[] = [];
      for (let i = initialPreloadCount; i < totalFrames; i++) {
        remainingIndices.push(i);
      }

      const BATCH_SIZE = 6; // Process 6 images concurrently
      for (let i = 0; i < remainingIndices.length; i += BATCH_SIZE) {
        if (!isMounted) break;
        const batch = remainingIndices.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((index) => loadImage(index)));
        // Brief pause between batches to yield to main thread
        await new Promise((r) => setTimeout(r, 20));
      }
    };

    loadInitialBatch();

    return () => {
      isMounted = false;
    };
  }, [totalFrames, initialPreloadCount]);

  // Setup Canvas resize listener & GSAP ScrollTrigger + scroll fallback
  useEffect(() => {
    updateCanvasDimensions();
    window.addEventListener('resize', updateCanvasDimensions);

    const container = containerRef.current;
    if (!container) return;

    // Target outer section element (600vh container) so scroll scrubbing spans full section height
    const scrollTarget = container.closest('section') || container.parentElement || container;

    const renderProgressFrame = (progressRatio: number) => {
      const currentFrame = Math.min(
        totalFrames - 1,
        Math.max(0, Math.floor(progressRatio * (totalFrames - 1)))
      );
      frameSequenceRef.current.frame = currentFrame;
      requestAnimationFrame(() => drawFrame(currentFrame));
    };

    // Create GSAP ScrollTrigger animation to drive frame sequence
    const trigger = ScrollTrigger.create({
      trigger: scrollTarget,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        renderProgressFrame(self.progress);
      },
    });

    // Fallback direct scroll listener for instantaneous response
    const handleDirectScroll = () => {
      if (!scrollTarget) return;
      const rect = scrollTarget.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
      renderProgressFrame(progress);
    };

    window.addEventListener('scroll', handleDirectScroll, { passive: true });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      window.removeEventListener('scroll', handleDirectScroll);
      trigger.kill();
    };
  }, [totalFrames]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover pointer-events-none"
      />

      {/* Preloader Overlay */}
      {!isLoaded && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 text-white transition-opacity duration-700 ease-out ${
            fadePreloader ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Minimal Brand / Title */}
            <div className="tracking-[0.3em] text-xs font-mono uppercase text-amber-400 mb-6 font-semibold">
              VILLA RESIDENCE
            </div>

            {/* Percentage Display */}
            <div className="flex items-baseline mb-6 font-mono">
              <span className="text-7xl font-extralight tracking-tighter text-white">
                {progress}
              </span>
              <span className="text-2xl font-light text-amber-400 ml-1">%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-zinc-800/80 rounded-full h-[3px] overflow-hidden mb-4 p-[1px]">
              <div
                className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-100 h-full rounded-full transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status Subtitle */}
            <div className="flex justify-between w-full text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              <span>Loading sequence</span>
              <span>
                {Math.min(
                  Math.floor((progress / 100) * initialPreloadCount),
                  initialPreloadCount
                )}{' '}
                / {initialPreloadCount} frames
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
