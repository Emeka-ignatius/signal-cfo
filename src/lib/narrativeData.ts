export interface NarrativeCardData {
  badge: string
  title: string
  lead: string
  intro?: string
  bullets?: string[]
  gridItems?: string[]
  paragraphs?: string[]
  highlight?: string
  footer: string
}

export const NARRATIVE_CARDS: NarrativeCardData[] = [
  {
    badge: "01 / The Pain",
    title: "Clean accounts don’t magically become strategy.",
    lead: "Most founders have numbers. What they don’t have is a clear commercial answer.",
    intro: "Your accounts may be up to date. Your reports may be clean. Your dashboard may look expensive. But the hard work is still sitting with you:",
    bullets: [
      "Turning accounts into insight.",
      "Turning insight into strategy.",
      "Turning strategy into action."
    ],
    paragraphs: [
      "That’s the job you keep pushing to Friday afternoon, then Saturday morning, then “when I finally get a clear run at it”. No calls. No meetings. No interruptions. Just you, the numbers, and the painful task of turning clean accounts into a strategy the business can actually use.",
      "And the cost isn’t just time. It’s the mental drag. The quiet doubt that you’re missing something obvious. The frustration of having the data but still not knowing which decision matters most."
    ],
    highlight: "Signals CFO does that work with you and turns it into the next 5 moves.",
    footer: "“Imagine shutting down on Friday, knowing a clear plan is waiting for you, ready for Monday.”"
  },
  {
    badge: "02 / The Relief",
    title: "This is what changes.",
    lead: "You stop carrying every possible decision at once.",
    intro: "You stop treating every issue as equally urgent. You stop losing hours trying to turn numbers into something usable.",
    bullets: [
      "The anxiety gets reduced.",
      "The priorities get ranked.",
      "The next move becomes clear."
    ],
    highlight: "You leave with certainty.",
    paragraphs: [
      "Not certainty that everything will be easy. Certainty about what needs to happen next."
    ],
    footer: "That’s the shift. From staring at reports to moving with purpose and precision."
  },
  {
    badge: "03 / The Truth",
    title: "The business usually tells the truth before the founder is ready to.",
    lead: "You feel where the pressure is building long before you can explain it.",
    intro: "The numbers always show where performance is leaking first:",
    gridItems: [
      "Flat margins",
      "Slow decisions",
      "Discounting",
      "Capacity strain",
      "Founder bottlenecks",
      "Client drag"
    ],
    paragraphs: [
      "You feel it before you can explain it. But the visible problem is rarely the real problem."
    ],
    highlight: "Signals CFO helps you see the commercial pattern underneath the numbers, then turns it into the next 5 moves.",
    footer: "Underlying patterns → Ranked commercial moves"
  }
]

export interface HowItWorksStep {
  step: string
  title: string
  description: string
  footer: string
  highlightFooter?: boolean
  delay?: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "STEP 01",
    title: "1. Apply for a fit check.",
    description: "Short call. We confirm the Mirror is the right move, or we tell you it isn’t.",
    footer: "No wasted time • Honest evaluation",
    delay: "0s",
  },
  {
    step: "STEP 02",
    title: "2. The Mirror.",
    description: "We work through your numbers, your pressure points and the patterns behind them together.",
    footer: "Deep preparation • Full diagnostic",
    delay: "0.15s",
  },
  {
    step: "STEP 03",
    title: "3. 5 moves, delivered within 24 hours.",
    description: "Ranked. Sequenced. Built for how you actually operate. So you’re not left with more thinking. You’re left with decisions.",
    footer: "Immediate Clarity • Ready for Monday",
    highlightFooter: true,
    delay: "0.3s",
  },
]

export interface SprintPillar {
  pillar: string
  title: string
  subtitle: string
  intro: string
  bullets: string[]
  outro?: string
  footer: string
  delay?: string
}

export const SPRINT_PILLARS: SprintPillar[] = [
  {
    pillar: "PILLAR 01",
    title: "PRESSURE-TESTING",
    subtitle: "Prepare before the business gets pressure-tested for you.",
    intro: "Investors, lenders, boards and serious growth plans don’t just test the spreadsheet. They test the assumptions underneath it:",
    bullets: [
      "Is pricing realistic?",
      "Can the business grow without everything running through you?",
      "Are margins strong enough?",
      "Is capacity actually there?",
      "Is the forecast built on evidence, or optimism in a nice font?",
    ],
    outro: "These aren’t spreadsheet problems. They’re leadership and decision-pattern problems showing up in the numbers.",
    footer: "The Sprint pressure-tests the business before the market does it for you.",
    delay: "0s",
  },
  {
    pillar: "PILLAR 02",
    title: "BENCHMARKING",
    subtitle: "You don’t just see your numbers. You see where you stand.",
    intro: "Every move is benchmarked against 5,500+ financial records from founder-led businesses at the same growth stage. So you’re not working off gut feel or a consultant’s opinion. You’re working off a pattern library built from businesses that look like yours.",
    bullets: [
      "Are your margins weak, or normal for your model?",
      "Is cash tight because growth is working, or because the business is leaking?",
      "Are staff costs too high, or is capacity being used badly?",
      "Is your client mix healthy, or are a few clients dragging everything sideways?",
    ],
    footer: "The Sprint gives you context, 5 moves and accountability every week.",
    delay: "0.15s",
  },
]

export interface TestimonialItem {
  id: string
  image: string
  title?: string
  delay?: string
}

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: "grant-doig",
    image: "/images/testimonial/Grant Doig.png",
    title: "Grant Doig",
    delay: "0s",
  },
  {
    id: "tilda-rose",
    image: "/images/testimonial/Tilda Rose Testimony.png",
    title: "Tilda Rose",
    delay: "0.1s",
  },
  {
    id: "testimony-3",
    image: "/images/testimonial/3.png",
    title: "Rob Jackson",
    delay: "0.2s",
  },
  {
    id: "testimony-4",
    image: "/images/testimonial/4.png",
    title: "Casey Onder",
    delay: "0.3s",
  },
  {
    id: "testimony-5",
    image: "/images/testimonial/5.png",
    title: "Lola Barbour",
    delay: "0.4s",
  },
  {
    id: "testimony-6",
    image: "/images/testimonial/6.png",
    title: "Founder Testimony #6",
    delay: "0.5s",
  },
  {
    id: "testimony-7",
    image: "/images/testimonial/7.png",
    title: "Founder Testimony #7",
    delay: "0.6s",
  },
]



