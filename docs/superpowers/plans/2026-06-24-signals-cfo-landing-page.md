# Signals CFO Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, scalable animated landing page for Signals CFO using Next.js, React, Tailwind CSS, and GSAP. The design pattern is Minimalist Dark Glass on a Bento Structure.

**Architecture:** A Next.js App Router project. Components will be isolated and reusable. Animations will be managed cleanly using `@gsap/react` hooks to ensure proper cleanup and lifecycle management. Styling will be handled via Tailwind CSS, strictly configured to the brand's exact colors and typography.

**Tech Stack:** Next.js (React), Tailwind CSS, TypeScript, GSAP (Core, ScrollTrigger), `@gsap/react`.

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json` (via init)
- Modify: `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`

- [ ] **Step 1: Initialize Next.js project and install dependencies**
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
npm install gsap @gsap/react
```
*(Note for agent: if directory is not empty, you may need to clear it or create the app in a temp folder and move contents over, or just manually create the Next.js structure if easier. Standard Next.js `src/app` structure is expected.)*

- [ ] **Step 2: Configure Tailwind CSS with brand tokens**
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#0a1f15', // dark bg
          800: '#0d2a1c', // lighter bg
        },
        verdigris: '#40826D',
        copper: {
          DEFAULT: '#B87333',
          light: '#c98a4d',
          glow: '#d9a25c'
        },
        paper: {
          DEFAULT: '#F5F5F0', // white body text
          muted: '#C8C4B8'    // subheadings
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.04)',
          border: 'rgba(168, 112, 60, 0.2)'
        }
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 3: Update global CSS**
```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-forest-900 text-paper font-sans antialiased overflow-x-hidden;
    cursor: none; /* Hide default cursor for custom GSAP cursor */
  }
  
  a, button {
    cursor: none; /* Ensure custom cursor remains on interactables */
  }
}

@layer utilities {
  .glass-panel {
    @apply bg-glass border border-glass-border backdrop-blur-md rounded-sm;
  }
}
```

- [ ] **Step 4: Load Fonts in Layout**
```tsx
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Orbitron, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300', '400', '500', '600'] })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', weight: ['700', '800'] })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400', '600'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Signals CFO | Find the Pattern',
  description: 'Find the five moves your business is already asking you to make.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${cormorant.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: setup next.js, tailwind, fonts, and global css"
```

### Task 2: Custom Cursor & Navigation Components

**Files:**
- Create: `src/components/Cursor.tsx`, `src/components/Navbar.tsx`

- [ ] **Step 1: Create the GSAP Custom Cursor Component**
```tsx
// src/components/Cursor.tsx
'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-1.5 h-1.5 bg-copper rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    />
  )
}
```

- [ ] **Step 2: Create the Navigation Component**
```tsx
// src/components/Navbar.tsx
'use client'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const showNav = gsap.fromTo(navRef.current, {
      yPercent: -100
    }, {
      yPercent: 0,
      paused: true,
      duration: 0.3
    }).progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse()
      }
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-forest-900/95 backdrop-blur-md z-50">
      <div className="font-display font-extrabold text-lg tracking-widest text-paper">SIGNALS CFO</div>
      <a 
        href="https://tidycal.com/jaysmaniar/30-minute-meeting" 
        className="bg-verdigris hover:bg-copper transition-colors text-paper font-sans font-semibold text-sm tracking-[1.5px] py-4 px-8 rounded-sm"
      >
        Book the free session
      </a>
    </nav>
  )
}
```

- [ ] **Step 3: Update Layout**
Inject `<Cursor />` and `<Navbar />` into `src/app/layout.tsx` inside the `<body>` tag.

- [ ] **Step 4: Commit**
```bash
git add .
git commit -m "feat: add animated cursor and navigation components"
```

### Task 3: Hero Section & Topographic Animation

**Files:**
- Create: `src/components/TopographicBackground.tsx`, `src/components/Hero.tsx`

- [ ] **Step 1: Create Topographic Background Component**
```tsx
// src/components/TopographicBackground.tsx
'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TopographicBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.to(".contour-layer path", {
      x: 30,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(".ellipse-layer", {
      scale: 1.015,
      transformOrigin: "center center",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    gsap.to(".focal-dot", {
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <g className="contour-layer" stroke="#a8703c" strokeWidth="0.6" opacity="0.7" fill="none">
          <path d="M-100,100 Q200,150 400,100 T1100,200"></path>
          <path d="M-100,200 Q250,250 500,150 T1100,300"></path>
          <path d="M-100,300 Q300,350 600,200 T1100,400"></path>
          <path d="M-100,400 Q350,450 700,250 T1100,500"></path>
        </g>
        <g className="ellipse-layer" stroke="#c98a4d" fill="none" transform="translate(700, 300)">
          <ellipse rx="50" ry="30" opacity="0.95"></ellipse>
          <ellipse rx="100" ry="60" opacity="0.7"></ellipse>
          <ellipse rx="150" ry="90" opacity="0.4"></ellipse>
          <ellipse rx="200" ry="120" opacity="0.15"></ellipse>
        </g>
        <circle className="focal-dot" cx="700" cy="300" r="3" fill="#d9a25c"></circle>
      </svg>
      {/* Radial fade overlay to ensure text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,transparent_0%,theme(colors.forest.900)_80%)]"></div>
    </div>
  )
}
```

- [ ] **Step 2: Create Hero Component**
```tsx
// src/components/Hero.tsx
'use client'
import TopographicBackground from './TopographicBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-24 pb-12 overflow-hidden">
      <TopographicBackground />
      
      <div className="relative z-10 max-w-2xl mt-12 md:mt-0">
        <p className="text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">
          SIGNALS CFO
        </p>
        <h1 className="font-display font-extrabold text-[clamp(42px,6vw,72px)] leading-[1.05] text-paper mb-6">
          Find the five moves<br />
          your business is already<br />
          asking you to make.
        </h1>
        <p className="font-serif italic text-[22px] text-paper-muted leading-relaxed mb-12">
          Built on patterns from 120+ founders<br />
          and 5,500+ financials.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="bg-verdigris hover:bg-copper transition-colors text-paper font-semibold text-sm tracking-[1.5px] py-4 px-9 rounded-sm text-center">
            Book the free session &rarr;
          </a>
          <a href="#the-pattern" className="bg-transparent border border-white/25 hover:border-verdigris transition-colors text-paper font-semibold text-sm tracking-[1.5px] py-4 px-9 rounded-sm text-center">
            Learn how it works &darr;
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: implement animated hero section with topographic background"
```

### Task 4: Story Sections & ScrollTrigger Logic

**Files:**
- Create: `src/components/NarrativeSection.tsx`, `src/utils/animations.ts`

- [ ] **Step 1: Create reusable animation utility**
```typescript
// src/utils/animations.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const setupScrollAnimations = (container: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    gsap.set('.gsap-fade-up', { opacity: 1, y: 0 })
    return
  }

  const elements = container.querySelectorAll('.gsap-fade-up')
  elements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )
  })
}
```

- [ ] **Step 2: Create Narrative Sections Component**
```tsx
// src/components/NarrativeSection.tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function NarrativeSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      {/* Section 1 */}
      <section id="the-pattern" className="py-32 px-6 md:px-12 bg-forest-800">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-8">THE PATTERN</p>
          <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-8 leading-tight">
            Two founders. Same revenue.<br/>Same margin. One's growing.<br/>One's stuck.
          </h2>
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-8 leading-relaxed">
            The difference was never in the numbers. It was in the decision they made next, and the one before that, and the one before that. A pattern, repeating, invisible to the person inside it.
          </p>
          
          <div className="gsap-fade-up w-[60px] h-px bg-copper mx-auto my-12"></div>
          
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-8 leading-relaxed">
            Most founders aren't short of advice. They've got reports, dashboards, opinions, AI tools promising faster insight. None of it answers the only question that matters:
          </p>
          
          <blockquote className="gsap-fade-up font-serif italic text-3xl text-paper max-w-[560px] mx-auto my-12">
            "Which decision actually matters now?"
          </blockquote>
          
          <p className="gsap-fade-up text-[17px] text-paper-muted leading-relaxed">
            Signals CFO exists because data was never the bottleneck. Decisions are. And decisions are shaped by patterns the founder usually can't see — because they're standing inside them.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-32 px-6 md:px-12 bg-forest-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">THE CONSTRAINT</p>
            <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper leading-tight">
              The same issues<br/>keep coming back.
            </h2>
          </div>
          <div className="pt-2">
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-6 leading-relaxed">
              Margins stay under pressure. Cash feels weaker than revenue suggests. Pricing gets avoided. The team still needs the founder too much.
            </p>
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-6 leading-relaxed">
              That's not a data problem. More reporting won't fix it.
            </p>
            <p className="gsap-fade-up text-[16px] text-paper-muted leading-relaxed">
              The visible issue is only the surface. The real constraint sits underneath the numbers — inside the way the business makes decisions, and inside the habits the founder doesn't realise they're repeating.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: add animated narrative sections"
```

### Task 5: The Critical Mirror (Dark Glass Bento Grid)

**Files:**
- Create: `src/components/CriticalMirror.tsx`

- [ ] **Step 1: Create Critical Mirror Component**
```tsx
// src/components/CriticalMirror.tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

export default function CriticalMirror() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-forest-900">
      <div className="max-w-6xl mx-auto glass-panel p-8 md:p-20">
        <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">THE DIAGNOSTIC</p>
        <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-6">The Critical Mirror</h2>
        <p className="gsap-fade-up font-serif italic text-xl text-paper-muted mb-12">
          Every serious Signals CFO engagement starts here. It exists for one reason: to make sure we solve the right problem.
        </p>
        
        <div className="gsap-fade-up w-full h-px bg-copper/40 my-12"></div>
        
        {/* Bento Top Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {['MAP', 'FIND', 'DELIVER'].map((verb, i) => (
            <div key={verb} className="gsap-fade-up">
              <p className="text-copper uppercase font-medium text-[11px] tracking-[3px] mb-4">WE {verb}</p>
              <p className="text-[15px] text-paper-muted leading-relaxed">
                {i === 0 && "The business model, financial performance, and commercial decisions reviewed in one place."}
                {i === 1 && "Where performance is leaking. Where you hesitate. Where the numbers stop matching the story."}
                {i === 2 && "The pattern. The cost. The archetype. The five moves. Within 24 hours of the session."}
              </p>
            </div>
          ))}
        </div>
        
        <div className="gsap-fade-up w-full h-px bg-copper/40 my-12"></div>
        <h3 className="gsap-fade-up font-serif text-2xl text-paper mb-8">What you receive:</h3>
        
        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            { label: "THE PATTERN", desc: "The repeated decision loop shaping current performance." },
            { label: "THE COST", desc: "The likely commercial impact across margin, cash, pricing, delivery, capacity, and founder time." },
            { label: "THE ARCHETYPE", desc: "The behavioural pattern most likely influencing how decisions are being made inside the business." },
            { label: "THE FIVE MOVES", desc: "Ranked by likely commercial impact, speed, risk, resistance, and ease of implementation. Not generic. The five moves your business is already asking you to make." }
          ].map((item) => (
            <div key={item.label} className="gsap-fade-up bg-black/20 border-l-2 border-copper p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-copper/5">
              <p className="font-sans font-semibold text-[12px] tracking-[2px] text-paper mb-3">{item.label}</p>
              <p className="text-[15px] text-paper-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="gsap-fade-up text-center pt-8">
          <p className="text-[16px] text-paper-muted mb-8">Critical Mirror engagements start from £2,495.</p>
          <a href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="inline-block bg-verdigris hover:bg-copper transition-colors text-paper font-semibold text-sm tracking-[1.5px] py-4 px-9 rounded-sm">
            Book the free session &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**
```bash
git add .
git commit -m "feat: implement critical mirror bento grid component"
```

### Task 6: Timeline, FAQ & Footer Components

**Files:**
- Create: `src/components/TimelineFAQ.tsx`, `src/components/Footer.tsx`

- [ ] **Step 1: Create Timeline & FAQ Component**
*(Note: To save space in plan, outline the HTML structure for the Timeline and the accordion logic using React state)*
```tsx
// src/components/TimelineFAQ.tsx
'use client'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { setupScrollAnimations } from '@/utils/animations'

const faqs = [
  { q: "What actually happens on the free call?", a: "Bring the issue you keep circling. We'll look at what's actually driving it, and decide together whether the Critical Mirror is the right next step." },
  { q: "What's the difference between the free call and the Critical Mirror?", a: "The free call is 30 minutes to assess fit. The Mirror is a deep diagnostic resulting in the five moves." },
  // Engineer to add remaining 9 FAQs from the spec here
]

export default function TimelineFAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useGSAP(() => {
    if (containerRef.current) setupScrollAnimations(containerRef.current)
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      {/* Target Audience */}
      <section className="py-24 px-6 md:px-12 bg-forest-800">
        <div className="max-w-[680px] mx-auto">
          <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">WHO THIS IS FOR</p>
          <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-6">Founder-led businesses<br/>between £1m and £20m.</h2>
          <p className="gsap-fade-up text-[17px] text-paper-muted mb-6">Built for founders who've reached the point where putting in more effort isn't producing better results.</p>
          <p className="gsap-fade-up font-serif italic text-xl text-paper mt-8">That's the gap the Critical Mirror closes.</p>
        </div>
      </section>

      {/* The Sprint / Timeline */}
      <section className="py-32 px-6 md:px-12 bg-forest-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="gsap-fade-up text-copper uppercase font-medium text-[11px] tracking-[3px] mb-6">AFTER THE MIRROR</p>
            <h2 className="gsap-fade-up font-display font-bold text-4xl md:text-5xl text-paper mb-6">The Sprint</h2>
            <p className="gsap-fade-up text-[16px] text-paper-muted mb-6">The Mirror identifies the real constraint.<br/>The Sprint helps fix it.</p>
          </div>
          <div className="gsap-fade-up border-l-2 border-copper pl-8 mt-6">
            {['Weekly numbers review', 'Decision pattern tracking', 'Commercial drag identification', 'Implementation discipline'].map((node, i) => (
              <div key={i} className="relative pb-8 text-[16px] text-paper">
                <div className="absolute -left-[37px] top-1.5 w-2.5 h-2.5 bg-copper rounded-full"></div>
                {node}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 md:px-12 bg-forest-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="gsap-fade-up font-display font-bold text-4xl text-paper mb-12">FAQ</h2>
          <div className="gsap-fade-up border-t border-glass-border">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-glass-border">
                <button 
                  className={`w-full text-left py-6 flex justify-between items-center text-[15px] font-medium transition-colors ${openIndex === i ? 'text-copper pl-4 border-l-2 border-copper' : 'text-paper'}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {faq.q}
                  <span className={`text-copper text-xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-6 pl-4' : 'max-h-0'}`}>
                  <p className="text-paper-muted text-[15px]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Create Footer Component**
```tsx
// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#050f0a] py-16 px-6 text-center">
      <div className="font-display font-extrabold text-lg tracking-widest text-paper mb-4">SIGNALS CFO</div>
      <p className="font-serif italic text-sm text-paper-muted mb-8">Find the five moves your business is already asking you to make.</p>
      <a href="https://tidycal.com/jaysmaniar/30-minute-meeting" className="text-copper text-sm mb-12 block hover:text-white transition-colors">Book the free session &rarr;</a>
      <p className="text-white/30 text-xs">© 2026 Signals CFO. All rights reserved.</p>
    </footer>
  )
}
```

- [ ] **Step 3: Commit**
```bash
git add .
git commit -m "feat: implement timeline, faq, and footer components"
```

### Task 7: Assemble Page & Final Polish

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Assemble all components in `page.tsx`**
```tsx
// src/app/page.tsx
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import Hero from '@/components/Hero'
import NarrativeSection from '@/components/NarrativeSection'
import CriticalMirror from '@/components/CriticalMirror'
import TimelineFAQ from '@/components/TimelineFAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-forest-900 min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <NarrativeSection />
      <CriticalMirror />
      <TimelineFAQ />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Ensure full FAQ implementation**
Review the brief and add the remaining FAQ questions into the `TimelineFAQ.tsx` array.

- [ ] **Step 3: Mobile & Performance Review**
Run `npm run dev`. Verify cursor hides on mobile (`hidden md:block`), GSAP correctly respects reduced motion, and all text scales according to Tailwind classes. Check console for React warning related to `window` or SSR if necessary (ensure `'use client'` is heavily utilized for GSAP components).

- [ ] **Step 4: Final Commit**
```bash
git add .
git commit -m "feat: assemble page and finalize UI polish"
```
