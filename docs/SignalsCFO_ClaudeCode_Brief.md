# Claude Code Brief — Signals CFO Landing Page

## Project overview

Build a single-page animated landing page for **Signals CFO**, a financial and behavioural diagnostic service for founder-led businesses. The client is Jay Maniar. The page must feel premium, authoritative, and psychologically precise — like a senior partner's office, not a SaaS product. Every design decision should reinforce one idea: *there is a pattern underneath your numbers, and we find it.*

---

## Brand identity

**Colors (exact hex values — do not deviate):**
- Deep forest green (primary background): `#0a1f15` to `#0d2a1c` gradient
- Verdigris green (mid-tone accent, buttons, borders): `#40826D`
- Copper/bronze (headline accents, dividers, key highlights): `#B87333`
- Warm copper light (secondary bronze, glow effects): `#c98a4d` / `#d9a25c`
- White (body text): `#F5F5F0`
- Near-white (subheadings, secondary text): `#C8C4B8`
- Dark card surface: `rgba(255,255,255,0.04)` on dark bg

**Typography:**
- Display / Hero headlines: **Microgramma** (use Google Fonts alternative: `Orbitron` or import via `@font-face` if file provided). Weight: Bold/ExtraBold. Uppercase. Wide letter-spacing. This is the brand's visual identity — use it for H1 and H2 only.
- Section headings (H3, H4): **Cormorant Garamond** — elegant serif, creates contrast against the geometric display face. Use italic for emphasis lines.
- Body text: **Inter** — clean, highly legible, weight 300–400. Generous line height (1.75). This is a reading-heavy page.
- Labels / eyebrows / small caps: Inter 500, letter-spacing 3px, uppercase, copper color.

**Tone:** Quiet authority. No exclamation marks. No bullet-point enthusiasm. The copy is measured, precise, and speaks to someone who has already tried other things and found them insufficient.

---

## Hero section — topographic concept

The hero background is a **dark forest green** (`#0a1f15`) with **animated SVG topographic lines** in copper/bronze — abstract contour lines suggesting hidden structure being revealed beneath the surface.

**Implement this exactly:**

```html
<!-- Animated topographic SVG background — full viewport -->
<!-- Layer 1: Slow horizontal contour lines (bronze, low opacity, animate left to right drift) -->
<!-- Layer 2: Concentric ellipses converging on a focal point (right-center of canvas) -->
<!-- Layer 3: A single copper dot at the focal point, subtle pulse animation -->
<!-- Layer 4: Radial gradient overlay darkening edges to keep text readable -->
```

**SVG animation specs:**
- Contour lines: `stroke: #a8703c`, `stroke-width: 0.6`, `opacity: 0.7`. Animate a slow rightward drift using CSS `@keyframes` — `transform: translateX(-30px)` to `translateX(0)` over 12s, infinite, ease-in-out.
- Concentric ellipses: 4 rings, `stroke: #c98a4d`, rotating from opacity 0.95 (inner) to 0.15 (outer). Subtle scale pulse — `transform: scale(1)` to `scale(1.015)` over 6s, infinite, alternate.
- Focal dot: `fill: #d9a25c`, radius 3px. Glow pulse using `filter: drop-shadow(0 0 6px #d9a25c)` animating in and out.
- On `prefers-reduced-motion`: remove all animations, show static version.

**Hero text layout (left-aligned, max-width 640px):**

```
[Eyebrow — copper, uppercase, Inter 500, 11px, letter-spacing 3px]
SIGNALS CFO

[H1 — Microgramma, bold, white, clamp(42px, 6vw, 72px), line-height 1.05]
Find the five moves
your business is already
asking you to make.

[Subheadline — Cormorant Garamond italic, 22px, #C8C4B8, line-height 1.6]
Built on patterns from 120+ founders
and 5,500+ financials.

[CTA button]
[Book the free session →]   [Learn how it works ↓]
```

**CTA button styling:**
- Primary: `background: #40826D`, `color: white`, `font: Inter 600 14px`, `letter-spacing: 1.5px`, `padding: 16px 36px`, `border-radius: 2px` (nearly square — sharp, not rounded). Hover: `background: #B87333`, transition 0.3s.
- Secondary: transparent, `border: 1px solid rgba(255,255,255,0.25)`, white text. Hover: `border-color: #40826D`.

**Hero booking link:** `https://tidycal.com/jaysmaniar/30-minute-meeting`

---

## Page sections — full structure

### Section 1: The Problem (narrative setup)

**Background:** `#0d2a1c` (slightly lighter than hero)
**Layout:** Single column, max-width 720px, centered.

```
[Eyebrow — copper]
THE PATTERN

[H2 — Microgramma]
Two founders. Same revenue.
Same margin. One's growing.
One's stuck.

[Body — Inter 300, 17px, line-height 1.8, #C8C4B8]
The difference was never in the numbers. It was in the
decision they made next, and the one before that,
and the one before that. A pattern, repeating, invisible
to the person inside it.

[Divider — thin copper line, 60px wide, centered]

[Body continued]
Most founders aren't short of advice. They've got reports,
dashboards, opinions, AI tools promising faster insight.
None of it answers the only question that matters:

[Pull quote — Cormorant Garamond italic, 28px, white, centered, max-width 560px]
"Which decision actually matters now?"

[Body continued]
Signals CFO exists because data was never the bottleneck.
Decisions are. And decisions are shaped by patterns the
founder usually can't see — because they're standing
inside them.
```

**Scroll animation:** Fade up each paragraph as it enters viewport. Stagger delay 150ms between paragraphs. Use `IntersectionObserver`.

---

### Section 2: The Problem Details

**Background:** `#0a1f15`
**Layout:** Two columns on desktop (left: heading stack, right: body text). Single column on mobile.

```
[Left column]
[Eyebrow — copper]
THE CONSTRAINT

[H2 — Microgramma, large]
The same issues
keep coming back.

[Right column — Inter 300, 16px]
Margins stay under pressure. Cash feels weaker than
revenue suggests. Pricing gets avoided. The team
still needs the founder too much.

That's not a data problem. More reporting won't fix it.

The visible issue is only the surface. The real constraint
sits underneath the numbers — inside the way the business
makes decisions, and inside the habits the founder
doesn't realise they're repeating.
```

---

### Section 3: The Critical Mirror (core offer)

**Background:** Dark card surface — `rgba(255,255,255,0.03)` with `border: 1px solid rgba(168,112,60,0.2)`. Full-width section with internal max-width container.

**This is the most important section. Give it space.**

```
[Eyebrow — copper]
THE DIAGNOSTIC

[H2 — Microgramma]
The Critical Mirror

[Intro — Cormorant Garamond italic, 20px]
Every serious Signals CFO engagement starts here.
It exists for one reason: to make sure we solve
the right problem.

[Horizontal rule — copper, full width, 0.5px]

[Three-column grid on desktop — what happens inside:]

Column 1:
[Icon: thin-line circle with dot]
[Label — copper eyebrow] WE MAP
[Body] The business model, financial performance,
and commercial decisions reviewed in one place.

Column 2:
[Icon: thin-line eye]
[Label — copper eyebrow] WE FIND
[Body] Where performance is leaking. Where you
hesitate. Where the numbers stop matching the story.

Column 3:
[Icon: thin-line arrow]
[Label — copper eyebrow] WE DELIVER
[Body] The pattern. The cost. The archetype.
The five moves. Within 24 hours of the session.

[Horizontal rule — copper]

[H3 — Cormorant Garamond, 24px] What you receive:

[Four deliverable cards — dark bg, copper left border 2px]

Card 1:
[Label] THE PATTERN
[Body] The repeated decision loop shaping current performance.

Card 2:
[Label] THE COST
[Body] The likely commercial impact across margin, cash,
pricing, delivery, capacity, and founder time.

Card 3:
[Label] THE ARCHETYPE
[Body] The behavioural pattern most likely influencing
how decisions are being made inside the business.

Card 4:
[Label] THE FIVE MOVES
[Body] Ranked by likely commercial impact, speed, risk,
resistance, and ease of implementation. Not generic.
The five moves your business is already asking you to make.

[CTA block — centered]
[Pricing line — Inter 300, 16px, #C8C4B8]
Critical Mirror engagements start from £2,495.

[Button — primary CTA]
Book the free session →
href: https://tidycal.com/jaysmaniar/30-minute-meeting
```

---

### Section 4: Who This Is For

**Background:** `#0d2a1c`
**Layout:** Left-aligned text block, max-width 680px.

```
[Eyebrow — copper]
WHO THIS IS FOR

[H2 — Microgramma]
Founder-led businesses
between £1m and £20m.

[Body — Inter 300, 17px]
Built for founders who've reached the point where putting
in more effort isn't producing better results.

You've probably already got accountants, advisers,
marketers, dashboards, and management reports.
You still can't clearly see which decision will change
the business fastest.

[Italicised line — Cormorant Garamond, 20px, white]
That's the gap the Critical Mirror closes.
```

---

### Section 5: The Sprint (secondary offer)

**Background:** `#0a1f15`
**Layout:** Two columns — left has a vertical bronze timeline line with 4 nodes. Right has text.

```
[Eyebrow — copper]
AFTER THE MIRROR

[H2 — Microgramma]
The Sprint

[Body]
The Mirror identifies the real constraint.
The Sprint helps fix it.

Every week: what moved, what stalled, what leaked,
and which decision matters next. Faster pricing decisions.
Cleaner client decisions. Better hiring decisions.
Less drift. Less avoidance.

[Timeline — vertical copper line, 4 dot nodes]
Node 1: Weekly numbers review
Node 2: Decision pattern tracking
Node 3: Commercial drag identification
Node 4: Implementation discipline

[Note — Inter 300, italic, #C8C4B8, 14px]
Some founders leave the Mirror with enough clarity
to act themselves. We'll determine which applies
through the Mirror.
```

---

### Section 6: Start Here (pre-CTA)

**Background:** Gradient — `#0d2a1c` to `#0a1f15`

```
[Eyebrow — copper]
START HERE

[H2 — Microgramma, centered]
One conversation.
No pitch. Thirty minutes.

[Body — centered, max-width 560px]
Bring the issue you keep circling. We'll look at
what's actually driving it, and decide together whether
the Critical Mirror is the right next step.

Not every business needs one.
This call is how we find out.

[Large CTA button — copper background #B87333, white text]
Book the free session
[Subtext below button — Inter 300, 13px, #C8C4B8]
https://tidycal.com/jaysmaniar/30-minute-meeting
```

---

### Section 7: FAQ

**Background:** `#0a1f15`
**Layout:** Accordion. Each question expands on click. Smooth height transition.

**Questions to include (use exact copy from brief):**
1. What actually happens on the free call?
2. What's the difference between the free call and the Critical Mirror?
3. What's an archetype, and why does it matter?
4. How do you work out my archetype?
5. How long until I see the five moves?
6. What's your background? Are you a psychologist or behavioural specialist?
7. What if I don't agree with the diagnosis, or it doesn't land?
8. Is this therapy, coaching, or a strategy session?
9. Why is the first call free? What's the catch?
10. Do I need to prepare anything for the Mirror?
11. What happens after the Mirror? Am I locked into a Sprint?

**Accordion styling:**
- Question: Inter 500, 15px, white. `border-bottom: 1px solid rgba(168,112,60,0.2)`. Padding 20px 0.
- Expand icon: `+` in copper, rotates to `×` when open.
- Answer: Inter 300, 15px, #C8C4B8, line-height 1.75. Slides down smoothly.
- Active question border-left: `3px solid #B87333`.

---

### Section 8: Footer

**Background:** `#050f0a`

```
[Logo text — Microgramma, 18px, white]
SIGNALS CFO

[Tagline — Cormorant Garamond italic, 14px, #C8C4B8]
Find the five moves your business is already asking you to make.

[Single CTA link]
Book the free session → https://tidycal.com/jaysmaniar/30-minute-meeting

[Footer note — Inter 300, 12px, rgba(255,255,255,0.3)]
© 2025 Signals CFO. All rights reserved.
```

---

## Global technical requirements

**Stack:** Single HTML file. Vanilla JS only — no frameworks. CSS custom properties for all tokens. No external CSS libraries.

**Fonts:** Load via Google Fonts:
```
Orbitron:wght@700;800 (Microgramma substitute)
Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600
Inter:wght@300;400;500;600
```

**Responsive:**
- Desktop: 1280px max container
- Tablet: 768px — stack two-column layouts
- Mobile: 375px — reduce all display font sizes by ~30%, single column throughout

**Scroll animations:**
- All section content: `opacity: 0; transform: translateY(24px)` on load
- `IntersectionObserver` triggers `opacity: 1; transform: translateY(0)` with `transition: 0.7s ease`
- Stagger child elements with `transition-delay: 0ms, 150ms, 300ms` etc.
- Respect `prefers-reduced-motion: reduce` — skip all animations

**Navigation:**
- Fixed top nav, `background: rgba(10,31,21,0.95)`, `backdrop-filter: blur(12px)`
- Logo left: SIGNALS CFO in Microgramma
- Right: "Book the free session" button in copper
- Smooth scroll to sections on click
- Nav hides on scroll down, reappears on scroll up (subtle)

**Performance:**
- No images required — all visual interest comes from SVG and CSS
- Inline all SVG
- Minify nothing — keep readable for client review

**Cursor:** On desktop, implement a subtle custom cursor — small copper dot `#B87333`, 6px, that follows the mouse with a 80ms lag. Adds to the precision/diagnostic feel without being distracting.

---

## Signature element

The page's single memorable element is the **topographic SVG hero** — abstract copper contour lines on dark forest green that animate slowly, with concentric ellipses converging on a focal point. This metaphor (hidden structure revealed by the right diagnostic) runs through the entire brand. The animation should feel like the page is *thinking*, not showing off.

---

## What to deliver

One complete, self-contained `index.html` file. All CSS in a `<style>` block. All JS in a `<script>` block. All SVGs inline. Ready to open in a browser and deploy to any static host.
