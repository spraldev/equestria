import { NextResponse } from 'next/server'
import { chatWithStarlightGlimmer, chatWithTwilightSparkle, chatWithPinkiePie, chatWithRainbowDash, getMsgs } from '@/lib/chatwithponies'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const pony = searchParams.get('pony')
    
    if (!pony) {
      return NextResponse.json({ success: false, error: 'Pony name is required' })
    }

    const response = await getMsgs(pony)
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' })
  }
}

export async function POST(req: Request) {
  try {
    const { message, ponyFunction, messages, ponyName } = await req.json()

    if (!ponyName) {
      return NextResponse.json({ success: false, error: 'Pony name is required' })
    }

    let response
    switch (ponyFunction) {
      case 'chatWithStarlightGlimmer':
        response = await chatWithStarlightGlimmer(message, messages)
        break
      case 'chatWithTwilightSparkle':
        response = await chatWithTwilightSparkle(message, messages)
        break
      case 'chatWithPinkiePie':
        response = await chatWithPinkiePie(message, messages)
        break
      case 'chatWithRainbowDash':
        response = await chatWithRainbowDash(message, messages)
        break
      default:
        return NextResponse.json({ success: false, error: 'Invalid pony function' })
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' })
  }
} 