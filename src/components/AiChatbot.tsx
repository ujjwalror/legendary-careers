'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, X, Send, Bot, User, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { queryKnowledgeBase, AnswerResult, ChatAction } from '@/lib/knowledge-base';
import { ConsultationModal } from '@/components/ConsultationModal';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: ChatAction[];
  source?: string;
  timestamp: string;
}

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedAgentForModal, setSelectedAgentForModal] = useState<string | undefined>(undefined);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `👋 G'day! I'm **Legendary AI**, your 24/7 Migration & Study Abroad Advisor.\n\nHow can I help you today? You can ask me about PR Points, Visa Subclasses, Melbourne Office Location, or Our Registered MARA Agents.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: [
        { label: '🇦🇺 Calculate PR Points', type: 'link', target: '/calculator' },
        { label: '📍 Melbourne Office Map', type: 'link', target: '/contact' },
        { label: '👨‍⚖️ Registered Agents', type: 'link', target: '/agents' },
        { label: '📅 Book Free Consultation', type: 'modal', target: 'consultation' },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const result: AnswerResult = queryKnowledgeBase(text);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: result.text,
        actions: result.actions,
        source: result.source,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action: ChatAction) => {
    if (action.type === 'link') {
      router.push(action.target);
      setIsOpen(false);
    } else if (action.type === 'modal') {
      setSelectedAgentForModal(undefined);
      setIsConsultationOpen(true);
    } else if (action.type === 'external') {
      window.open(action.target, '_blank');
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Chat history reset. How can I assist you with your migration or study goals today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [
          { label: '🇦🇺 Calculate PR Points', type: 'link', target: '/calculator' },
          { label: '📍 Melbourne Office Map', type: 'link', target: '/contact' },
          { label: '📅 Book Free Consultation', type: 'modal', target: 'consultation' },
        ],
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center space-x-2 px-5 py-3.5 rounded-full bg-[#061D38] text-white border-2 border-[#0163C8] shadow-2xl hover:bg-[#0163C8] transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Open AI Migration Chatbot"
          >
            {/* Live Pulsing Indicator */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96F189] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#96F189]" />
            </span>

            <MessageSquare size={18} className="text-[#96F189] group-hover:rotate-12 transition-transform" />

            <span className="font-heading font-bold text-xs uppercase tracking-wider hidden sm:inline">
              Chat with AI
            </span>
          </button>
        )}
      </div>

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-lg bg-white rounded-3xl border border-[#C2DAF3] shadow-2xl overflow-hidden flex flex-col h-[560px] animate-fadeIn">
          {/* Header */}
          <div className="bg-[#061D38] text-white p-4 px-5 flex items-center justify-between border-b border-[#0163C8]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-[#0163C8] flex items-center justify-center text-[#96F189] shadow-md border border-[#96F189]/40">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-heading font-bold text-sm text-white">Legendary AI Assistant</h3>
                  <Sparkles size={13} className="text-[#96F189]" />
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#96F189]" />
                  <span>Online • Site Docs & Home Affairs News</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleResetChat}
                title="Reset Chat"
                className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F4F8FC] scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-[#061D38] text-[#96F189] flex items-center justify-center text-xs shrink-0 mt-1">
                    <Bot size={15} />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-[#0163C8] text-white rounded-br-none shadow-md'
                        : 'bg-white text-[#061D38] border border-[#C2DAF3] rounded-bl-none shadow-sm'
                    }`}
                  >
                    {/* Message formatting support for line breaks and bolding */}
                    <div className="whitespace-pre-wrap font-body">
                      {msg.text.split('\n').map((line, lIdx) => (
                        <p key={lIdx} className={lIdx > 0 ? 'mt-1' : ''}>
                          {line.split('**').map((part, pIdx) =>
                            pIdx % 2 === 1 ? (
                              <strong key={pIdx} className={msg.sender === 'user' ? 'text-white' : 'text-[#0163C8] font-bold'}>
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      ))}
                    </div>

                    {/* Source tag */}
                    {msg.source && (
                      <div className="text-[9px] text-zinc-400 border-t border-zinc-100 pt-1 flex items-center gap-1">
                        <span>📚 Source: {msg.source}</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Action Chips inside bot responses */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act)}
                          className="px-3 py-1.5 rounded-xl bg-white border border-[#0163C8] text-[#0163C8] text-[11px] font-semibold hover:bg-[#0163C8] hover:text-white transition-all shadow-sm flex items-center space-x-1 cursor-pointer"
                        >
                          <span>{act.label}</span>
                          {act.type === 'external' && <ExternalLink size={10} />}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-[9px] text-zinc-400 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-[#0163C8] text-white flex items-center justify-center text-xs shrink-0 mt-1">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-xs text-zinc-500 bg-white p-3 rounded-2xl max-w-[140px] border border-[#C2DAF3]">
                <Bot size={14} className="text-[#0163C8] animate-bounce" />
                <span className="font-medium animate-pulse">Analyzing docs...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Chips */}
          <div className="bg-white border-t border-[#C2DAF3]/60 p-2 overflow-x-auto whitespace-nowrap flex space-x-1.5 scrollbar-none">
            {[
              '🇦🇺 Calculate PR Points',
              '📍 Office Address',
              '📞 Phone Number',
              '👨‍⚖️ Registered Agents',
              '📸 Instagram Link',
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip)}
                className="px-2.5 py-1 rounded-full bg-[#F4F8FC] border border-[#C2DAF3] text-[10px] font-semibold text-[#061D38] hover:bg-[#0163C8] hover:text-white transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#C2DAF3] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about PR points, office location, agents..."
              className="flex-1 p-2.5 rounded-xl bg-[#F4F8FC] border border-[#C2DAF3] text-xs text-[#061D38] focus:outline-none focus:border-[#0163C8]"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="p-2.5 rounded-xl bg-[#0163C8] text-white disabled:opacity-40 hover:bg-[#061D38] transition-colors cursor-pointer"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Dynamic Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedAgent={selectedAgentForModal}
      />
    </>
  );
};
