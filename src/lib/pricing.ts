export const PRICING_CONFIG = {
  NG: { currency: 'NGN', symbol: '₦', amount: 30000 },
  GH: { currency: 'GHS', symbol: 'GH₵', amount: 350 },
  US: { currency: 'USD', symbol: '$', amount: 2495 },
  GB: { currency: 'GBP', symbol: '£', amount: 2495 },
  CA: { currency: 'CAD', symbol: '$', amount: 3400 },
  DEFAULT: { currency: 'GBP', symbol: '£', amount: 2495 }
} as const

export const DEFAULT_PRICING = PRICING_CONFIG.DEFAULT
