'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const PARTNER_LOGOS = [
  { name: "Be the Business", src: "/images/partners/BetheBusiness874x289.jpg" },
  { name: "Help to Grow", src: "/images/partners/help-to-grow-logo2.jpg" },
  { name: "Enterprise Nation", src: "/images/partners/Ent%20nation.png" },
  { name: "Partner Ecosystem", src: "/images/partners/1AD0-A8CC-4983-85DC-65A9.png" },
  { name: "Executive Advisory", src: "/images/partners/1711551037568.jpg" },
]

const BRANDS_SECTORS = [
  { name: "SaaS & Scale-Ups", desc: "B2B Software & Enterprise Platforms", stat: "£2M–£25M ARR" },
  { name: "Digital Agencies", desc: "Performance & Creative Studios", stat: "High-Margin Advisory" },
  { name: "FinTech & Payments", desc: "Regulated & High-Velocity Infrastructure", stat: "Series A & B" },
  { name: "Consulting & Advisory", desc: "Founder-Led Professional Services", stat: "Rapid Scaling" },
  { name: "E-Commerce & DTC", desc: "Omnichannel Brands & Logistics", stat: "Multi-Market Growth" },
  { name: "Venture-Backed Tech", desc: "Deeptech & AI Innovators", stat: "Capital Efficiency" },
]

export default function BrandsSection() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.brand-element', 
      { opacity: 0, y: 16 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        stagger: 0.08, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    )
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 bg-forest-900 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col  justify-between gap-6 mb-12">
          <div>
            <p className="text-copper uppercase font-sans font-semibold text-[11px] tracking-[0.28em] mb-3">
              Trusted Experience across 25 years
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-paper">
              Partners, Ecosystems &amp; Sectors
            </h2>
          </div>
          <p className="font-sans text-sm text-text-secondary max-w-lg">
            Advising founder-led businesses across high-growth industries—turning complex financial records into decisive commercial momentum.
          </p>
        </div>

        {/* Partner Logos Strip */}
        <div className="mb-14">
          <p className="text-[11px] font-mono tracking-widest uppercase text-text-muted mb-5">
            Partnered &amp; Featured Across Programmes
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="brand-element group bg-white/95 hover:bg-white transition-all duration-300 p-4 border border-white/10 flex items-center justify-center h-20 shadow-md overflow-hidden relative"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={60}
                    className="max-h-12 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Grid */}
        {/* <div>
          <p className="text-[11px] font-mono tracking-widest uppercase text-text-muted mb-5">
            Sectors &amp; Operating Environments
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRANDS_SECTORS.map((item, idx) => (
              <div 
                key={idx}
                className="brand-element group bg-forest-800/80 border border-white/10 hover:border-copper/40 p-5 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-copper uppercase block mb-2">
                    {item.stat}
                  </span>
                  <h3 className="font-display font-semibold text-paper text-base leading-snug group-hover:text-copper transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="font-sans text-[12px] text-text-muted mt-3 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
