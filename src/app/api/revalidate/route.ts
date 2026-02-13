import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Verify the webhook secret from Sanity
  const secret = request.headers.get('x-sanity-webhook-secret');
  
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { _type } = await request.json();

  try {
    // Revalidate based on document type
    if (_type === 'homepage') {
      revalidateTag('homepage');
    } else if (_type === 'contact') {
      revalidateTag('contact');
    }
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}
