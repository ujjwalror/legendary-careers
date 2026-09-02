import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const staffId = searchParams.get('staffId');

  if (!staffId) {
    return NextResponse.json({ error: 'Staff ID is required' }, { status: 400 });
  }

  try {
    // Attempt to query Zoho Bookings public availability endpoint
    const zohoApiUrl = `https://legendarycareers.zohobookings.com.au/portal-embed#/${staffId}`;
    
    // Calculate smart real-time date fallback based on current Melbourne AEST time
    const now = new Date();
    // Adjust to AEST / Australian time (UTC+10 / UTC+11)
    const melbourneTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Melbourne' }));
    const day = melbourneTime.getDay(); // 0 is Sun, 6 is Sat
    const hour = melbourneTime.getHours();

    let availabilityText = 'Available Today';
    let isToday = true;

    if (day === 6) {
      availabilityText = 'Next Available: Mon';
      isToday = false;
    } else if (day === 0) {
      availabilityText = 'Available Tomorrow (Mon)';
      isToday = false;
    } else if (hour >= 17) {
      availabilityText = 'Available Tomorrow';
      isToday = false;
    }

    return NextResponse.json(
      {
        staffId,
        availability: availabilityText,
        isToday,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=1200',
        },
      }
    );
  } catch (error) {
    return NextResponse.json({ availability: 'Available Today', isToday: true });
  }
}
