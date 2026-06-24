import { NextResponse } from 'next/server'
import { PRICING_CONFIG, DEFAULT_PRICING } from '@/lib/pricing'

export const dynamic = 'force-dynamic' // Force dynamic route so Next.js never caches this

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
  const cleanIp = ip.split(',')[0].trim()

  let priceData = DEFAULT_PRICING

  try {
    let countryCode: string | undefined
    
    // Primary API
    const primaryUrl = cleanIp && cleanIp !== '::1' && cleanIp !== '127.0.0.1' 
      ? `https://ipapi.co/${cleanIp}/json/` 
      : 'https://ipapi.co/json/'
      
    const res = await fetch(primaryUrl, { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      countryCode = data.country_code
    } else {
      console.log(`[GeoPricing] Primary API failed with status: ${res.status}. Trying backup...`)
      // Backup API
      const backupUrl = cleanIp && cleanIp !== '::1' && cleanIp !== '127.0.0.1'
        ? `http://ip-api.com/json/${cleanIp}`
        : 'http://ip-api.com/json'
        
      const backupRes = await fetch(backupUrl, { cache: 'no-store' })
      if (backupRes.ok) {
        const backupData = await backupRes.json()
        countryCode = backupData.countryCode // camelCase for ip-api.com
      } else {
        console.log(`[GeoPricing] Backup API also failed with status: ${backupRes.status}`)
      }
    }

    console.log(`[GeoPricing] Detected Country: ${countryCode || 'Unknown'}`)
    
    if (countryCode && PRICING_CONFIG[countryCode as keyof typeof PRICING_CONFIG]) {
      priceData = PRICING_CONFIG[countryCode as keyof typeof PRICING_CONFIG]
    } else if (countryCode) {
      console.log(`[GeoPricing] Country ${countryCode} not in config, using DEFAULT.`)
    }
  } catch (error) {
    console.error(`[GeoPricing] Fetch error:`, error)
  }

  return NextResponse.json(priceData)
}
