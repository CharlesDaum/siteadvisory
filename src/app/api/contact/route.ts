import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Check if Formspree ID is configured
    const formspreeId = process.env.FORMSPREE_ID
    
    if (!formspreeId) {
      // For development/preview if env var is missing, simulate success after 1s
      console.warn('FORMSPREE_ID is missing. Simulating success response.')
      await new Promise(resolve => setTimeout(resolve, 1000))
      return NextResponse.json({ success: true })
    }

    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify(body)
    })
    
    if (!response.ok) {
      console.error('Formspree error:', await response.text())
      return NextResponse.json({ error: 'Erreur lors de l\'envoi via Formspree' }, { status: 500 })
    }
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('API Contact Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
