'use client'
import { useEffect, useState } from 'react'
import { DEFAULT_PRICING } from '@/lib/pricing'

interface PriceData {
  currency: string
  symbol: string
  amount: number
}

interface PricingCardProps {
  initialPrice?: PriceData
}

export default function PricingCard({ initialPrice = DEFAULT_PRICING }: PricingCardProps) {
  const [price, setPrice] = useState<PriceData>(initialPrice)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const fetchPricing = async () => {
      try {
        // Check if cookie exists
        const match = document.cookie.match(new RegExp('(^| )pt_country_price=([^;]+)'))
        
        if (match) {
          // Use cached price
          const cached = JSON.parse(decodeURIComponent(match[2]))
          if (cached && typeof cached.amount !== 'undefined') {
            setPrice(cached)
            return
          }
        }

        // Fetch from API
        const res = await fetch('/api/get-pricing')
        const data = await res.json()
        
        if (data && typeof data.amount !== 'undefined') {
          setPrice(data)
          // Cache in cookie for 24 hours
          document.cookie = `pt_country_price=${encodeURIComponent(JSON.stringify(data))}; max-age=${60 * 60 * 24}; path=/`
        }
      } catch (error) {
        console.error('Failed to load pricing:', error)
      }
    }

    fetchPricing()
  }, [])

  // Safely get amount
  const amountStr = price?.amount ? price.amount.toLocaleString() : '2,495'
  const symbol = price?.symbol || '£'
  const currency = price?.currency || 'GBP'

  return (
    <div className={`max-w-md mx-auto mb-10 p-8 rounded-xl border border-copper/20 bg-forest-800/80 backdrop-blur-md shadow-2xl transition-all duration-700 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-copper font-bold tracking-[2px] text-sm uppercase">Base Engagement</h4>
        <div className="px-3 py-1 bg-forest-900 rounded-full border border-white/5 text-[10px] text-paper-muted uppercase tracking-wider">
          {currency}
        </div>
      </div>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl text-paper-muted font-light">{symbol}</span>
        <span className="text-6xl text-paper font-display font-bold tracking-tight">{amountStr}</span>
      </div>
      
      <div className="space-y-3 text-left">
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
          <p className="text-sm text-paper-muted leading-relaxed">Full diagnostic map of business model and financial performance.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-copper mt-2 shrink-0"></div>
          <p className="text-sm text-paper-muted leading-relaxed">Identification of commercial drag and decision patterns.</p>
        </div>
      </div>
    </div>
  )
}
