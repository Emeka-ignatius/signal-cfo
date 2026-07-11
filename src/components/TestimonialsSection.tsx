'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'
import FlashlightCard from './FlashlightCard'
import { TESTIMONIAL_ITEMS, TestimonialItem } from '@/lib/narrativeData'

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<TestimonialItem | null>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section id="testimonials" ref={containerRef} className="py-32 px-6 md:px-12 bg-forest-800 relative border-t border-white/10 overflow-hidden">
      <div className="marble-texture"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="gsap-fade-up text-copper uppercase font-sans font-semibold text-sm md:text-lg tracking-[0.28em] mb-4">
            TESTIMONIALS
          </p>
          <h2 className="gsap-fade-up font-display font-bold text-[clamp(36px,5vw,60px)] leading-[1.05] text-paper">
            WHAT FOUNDERS <span className="text-copper">FIND</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIAL_ITEMS.map((item) => (
            <FlashlightCard 
              key={item.id}
              className="gsap-fade-up bg-forest-900/90 border border-white/10 overflow-hidden group cursor-pointer flex flex-col justify-between"
              style={{ animationDelay: item.delay }}
            >
              <div 
                onClick={() => setSelectedImage(item)}
                className="p-4 md:p-6 flex flex-col justify-between h-full"
              >
                <div className="relative overflow-hidden border border-white/10 bg-forest-950/60 rounded-sm">
                  <img 
                    src={encodeURI(item.image)} 
                    alt={item.title || 'Founder Testimonial'} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-forest-900/90 border border-copper/50 text-copper font-mono text-xs tracking-widest uppercase px-4 py-2 shadow-lg">
                      Click to Expand
                    </span>
                  </div>
                </div>
                {item.title && (
                  <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between">
                    <p className="font-display font-bold text-paper text-sm md:text-base">{item.title}</p>
                    <span className="text-xs font-mono uppercase tracking-wider text-copper">Verified</span>
                  </div>
                )}
              </div>
            </FlashlightCard>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-forest-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-auto bg-forest-900 border border-copper/30 p-2 md:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-forest-950/80 border border-white/20 hover:border-copper text-paper hover:text-copper transition-colors w-10 h-10 flex items-center justify-center font-mono text-lg"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img 
              src={encodeURI(selectedImage.image)} 
              alt={selectedImage.title || 'Founder Testimonial'} 
              className="w-full h-auto max-h-[82vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}
