# Signals CFO Visual Design Guide

Source image reviewed: `Adobe Express - file(1).png`  
Canvas size: **2048 × 1228 px**  
Approximate aspect ratio: **5:3**  
Visual style: **dark premium finance / cinematic strategy / restrained futurism**

---

## 1. Overall design impression

The image has a strong premium base: dark emerald texture, bronze accent, high negative space, and sparse typography.

The brand direction feels closer to **boutique strategic advisory** than traditional accounting. That is the right lane for Signals CFO.

The risk is the typography. The large headline font creates a futuristic, slightly tech-heavy feel. Used carefully, that can work. Overused, it will make the brand feel like a SaaS template or gaming interface.

The design should therefore stay:
- dark
- sparse
- confident
- cinematic
- low-motion
- low-clutter
- high-contrast

Avoid:
- scrolling tickers
- moving banners
- excessive animation
- glowing effects
- over-styled icons
- too many font weights
- crowded cards

The brand promise is cognitive load reduction. The design must feel calm, clear and controlled.

---

## 2. Colour palette

### Primary background

**Deep Emerald Black**  
Approx: `#01120D`  
Use for the main background, dark overlays, footer, card backs.

**Dark Forest Green**  
Approx: `#011B12`  
Use for textured sections, page backgrounds, slider backgrounds.

**Muted Emerald**  
Approx: `#03281B`  
Use for subtle panels, card surfaces and secondary containers.

### Accent colour

**Signals Bronze**  
Approx: `#A56E2B`  
Use for key words, CTA borders, buttons, highlights and section markers.

**Darker Bronze**  
Approx: `#8A622F`  
Use for hover states, secondary emphasis and logo-style accents.

### Text colours

**Warm White**  
Approx: `#F1F4F1`  
Use for main headlines and high-priority text.

**Soft Grey-Green**  
Approx: `#B8C2BC`  
Use for supporting copy, descriptions and captions.

**Muted Grey**  
Approx: `#7C8983`  
Use sparingly for metadata, labels and quiet helper text.

---

## 3. Typography

The image uses a futuristic, wide, rounded sans-serif style for the main headline.

Exact font is not fully identifiable from the image, but the closest approximations are:

### Headline font options

Use one of these:

1. **Michroma**  
   Best Google Font approximation. Wide, futuristic, clean and readable.

2. **Eurostile Extended / Microgramma**  
   Strong premium sci-fi corporate feel. Good if available.

3. **Orbitron Light**  
   More obviously futuristic. Use carefully; can feel too tech/gaming if overused.

4. **Bank Gothic / Square 721 Extended**  
   Good for logo-style headings and short labels.

Recommended choice: **Michroma** for web headings.

### Body font options

Pair the headline font with a simple, modern sans-serif:

1. **Inter**
2. **Manrope**
3. **Satoshi**
4. **Aptos**
5. **Montserrat**

Recommended choice: **Inter** or **Manrope**.

### Font usage

#### Hero headline
Font: Michroma / Eurostile Extended  
Weight: Light or Regular  
Letter spacing: `-1% to 1%`  
Line height: `0.95–1.05`  
Colour: Warm White and Signals Bronze

#### Section headings
Font: Michroma or Manrope SemiBold  
Case: Title case, not all caps  
Colour: Warm White  
Avoid making every heading futuristic.

#### Labels / eyebrow text
Font: Manrope / Inter  
Weight: 600–700  
Case: uppercase  
Letter spacing: `0.12em–0.18em`  
Colour: Warm White or Soft Grey-Green

#### Body copy
Font: Inter / Manrope  
Weight: 400  
Line height: `1.45–1.65`  
Colour: Soft Grey-Green

---

## 4. Logo treatment

The logo sits top left, with generous space around it.

Approximate placement in source image:
- X: 130 px
- Y: 135 px
- Width: 420 px
- Height: 65 px

Guidance:
- Keep the logo small and quiet.
- Do not centre it.
- Do not animate it.
- Do not add glow.
- Keep it in the top-left corner with wide breathing room.

Suggested desktop placement:
```css
.logo {
  position: absolute;
  top: clamp(36px, 7vw, 130px);
  left: clamp(32px, 6vw, 130px);
  max-width: clamp(180px, 22vw, 420px);
}
```

---

## 5. Hero layout

The image uses strong left alignment with large empty space on the right.

Approximate content block:
- Left margin: 100–130 px
- Top of headline: 340 px
- Max text width: 1150 px
- Right side: mostly empty, used for atmosphere

This works well. Keep it.

### Hero hierarchy

Current hero:

**Book**  
**A Critical Mirror**  
**Session**  
**A focused 30-minute session**

This is visually strong but commercially incomplete.

For the actual website, add a sharper outcome-led line below the subheading.

Recommended version:

**Book**  
**A Critical Mirror**  
**Session**

**A focused 30-minute fit call**

Find out what’s slowing the business down, what it’s costing, and whether the Critical Mirror is the right next step.

Button: **Book a 30-minute fit call**

---

## 6. Suggested hero text styles

```css
.hero-title {
  font-family: "Michroma", "Eurostile Extended", "Bank Gothic", sans-serif;
  font-size: clamp(64px, 8vw, 142px);
  line-height: 0.98;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #F1F4F1;
}

.hero-title .accent {
  color: #A56E2B;
}

.hero-kicker {
  font-family: "Inter", "Manrope", sans-serif;
  font-size: clamp(18px, 2vw, 34px);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #F1F4F1;
}

.hero-support {
  font-family: "Inter", "Manrope", sans-serif;
  font-size: clamp(18px, 1.4vw, 24px);
  line-height: 1.5;
  font-weight: 400;
  color: #B8C2BC;
  max-width: 680px;
}
```

---

## 7. Background treatment

The background is the strongest part of the design.

It appears to use:
- dark emerald texture
- uneven mottled grain
- faint bronze/gold speckling
- heavy vignette
- darker right-side gradient

Recreate with:
1. A dark emerald base.
2. A subtle noise texture.
3. A black radial or linear gradient overlay.
4. A restrained bronze dust texture.

### CSS approximation

```css
.hero-bg {
  background:
    radial-gradient(circle at 22% 36%, rgba(3, 58, 38, 0.75), transparent 38%),
    radial-gradient(circle at 70% 52%, rgba(0, 0, 0, 0.70), transparent 45%),
    linear-gradient(90deg, rgba(1, 35, 24, 0.95), rgba(0, 11, 8, 0.98)),
    #01120D;
  position: relative;
  overflow: hidden;
}

.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image: url("/textures/noise.png");
  mix-blend-mode: screen;
  pointer-events: none;
}
```

Keep the texture subtle. If the texture competes with text, it’s doing too much.

---

## 8. Slider / card system

The card slider should feel like a controlled diagnostic sequence, not a social carousel pasted onto a website.

Use:
- one idea per card
- large type
- short copy
- no auto-scroll
- manual arrows or dots
- slow fade or clean horizontal slide
- no bouncing, ticker or parallax effects

### Card size

Desktop:
- Width: `min(900px, 82vw)`
- Height: `520–640px`
- Padding: `56–80px`

Mobile:
- Width: `92vw`
- Height: auto
- Padding: `32px`

### Card background

```css
.signal-card {
  background: rgba(1, 27, 18, 0.82);
  border: 1px solid rgba(165, 110, 43, 0.32);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border-radius: 22px;
}
```

Avoid heavy glassmorphism. A small amount is enough.

---

## 9. Slider card typography

```css
.card-label {
  font-family: "Inter", "Manrope", sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #A56E2B;
}

.card-title {
  font-family: "Michroma", "Eurostile Extended", sans-serif;
  font-size: clamp(34px, 4vw, 64px);
  line-height: 1.05;
  font-weight: 400;
  color: #F1F4F1;
}

.card-body {
  font-family: "Inter", "Manrope", sans-serif;
  font-size: clamp(20px, 2vw, 30px);
  line-height: 1.35;
  font-weight: 400;
  color: #D8DED9;
}

.card-small {
  font-family: "Inter", "Manrope", sans-serif;
  font-size: clamp(16px, 1.4vw, 20px);
  line-height: 1.5;
  color: #B8C2BC;
}
```

---

## 10. Button style

Buttons should feel premium and direct.

Primary button:

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 28px;
  border-radius: 999px;
  background: #A56E2B;
  color: #06110D;
  font-family: "Inter", "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid #A56E2B;
}

.btn-primary:hover {
  background: #B97A30;
  border-color: #B97A30;
}
```

Secondary button:

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 0 28px;
  border-radius: 999px;
  background: transparent;
  color: #F1F4F1;
  border: 1px solid rgba(241, 244, 241, 0.32);
  font-family: "Inter", "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.btn-secondary:hover {
  border-color: #A56E2B;
  color: #A56E2B;
}
```

---

## 11. Motion rules

Use motion sparingly.

Allowed:
- soft fade in
- slow slide between cards
- hover state on buttons
- subtle reveal on scroll

Avoid:
- moving banners
- ticker text
- animated counters
- spinning icons
- excessive parallax
- rapid transitions

Motion should make the brand feel composed, not excited.

Recommended transition:

```css
transition: opacity 280ms ease, transform 280ms ease;
```

---

## 12. Layout principles

### Use more space than feels comfortable

The image works because it doesn’t try to fill the page.

Keep:
- large margins
- large line spacing
- short copy blocks
- one message per section
- clear hierarchy

### Don’t over-explain

Signals CFO is complex underneath. The page shouldn’t feel complex.

Use simple language:
- “What’s slowing the business down”
- “What it’s costing”
- “Which five decisions matter next”
- “Less mental load”
- “Faster decisions”
- “Cleaner strategy”

Avoid:
- too many abstract nouns
- overuse of “archetype”
- long paragraphs
- consultant language
- anything that makes the reader work too hard

---

## 13. Recommended page sections

1. Hero  
   Book a Critical Mirror Session

2. Pain  
   You’ve got the data. Strategy still takes too long.

3. Slider  
   Three things founders recognise too late

4. Critical Mirror  
   What you leave with

5. Sprint  
   How the five moves get implemented

6. Proof  
   120+ founder engagements / 5,500+ financial records / 25 years experience

7. CTA  
   Book a 30-minute fit call

---

## 14. Final design judgement

The brand direction is strong.

The dark emerald and bronze scheme gives Signals CFO a premium, serious and distinctive feel. Keep that.

The weak point is the font balance. The headline font should be used as a signature, not across every piece of text. Pair it with a clean body font and keep most copy simple.

The design must communicate one thing before the words are read:

This reduces mental noise.

If the page feels noisy, animated or over-designed, it contradicts the offer.
