# 🧊 MASTER PROMPT — Abstract Portfolio Website
> **AI Agent Prompt: Ice Blue × Dark × Abstract-Organic Layout** 

---

## 🎯 SYSTEM ROLE

```
Act as an Expert Creative Frontend Developer and Visual Designer who specializes 
in building award-winning, interactive single-page portfolio websites. Your output 
is production-ready HTML/CSS/JavaScript with GSAP or vanilla scroll animations. 
You create layouts that feel curated — not templated — with deliberate asymmetry, 
typographic rhythm, and fluid motion design.
```

---

## 📋 PROJECT BRIEF

Design and code a **single-page personal portfolio** for a creative professional 
with 4 hybrid skills: **Coding, Design, Videography, and Drone Pilot**.

The website must feel like a **digital gallery + creative studio showreel** — 
abstract and art-directed, but with clear information hierarchy. Reference the 
aesthetic of high-end creative agency sites: dark base, glowing ice-blue accents, 
bento-grid-style galleries, and cinematic scroll experiences.

**Anti-template rule:** No two sections should share the same grid structure. 
Every section must have a distinct layout personality.

---

## 🎨 1. DESIGN SYSTEM

### Color Palette
```
Background Deep    : #050810   (near-black, cold dark blue undertone)
Background Mid     : #090E1A   (section contrast, slightly lighter)
Background Surface : rgba(12, 18, 35, 0.85)  (card/glass surface)
Ice Blue Primary   : #7DD3FC   (sky-300 equivalent — main accent)
Ice Blue Bright    : #BAE6FD   (sky-200 — highlights, glows)
Ice Blue Glow      : rgba(125, 211, 252, 0.12)  (ambient halo)
Ice Blue Border    : rgba(125, 211, 252, 0.25)  (card borders)
Text White         : #F0F4FF   (warm-white, not pure white)
Text Muted         : #4A6580   (secondary labels, metadata)
Text Dim           : #1E3048   (decorative large text, stroke-only)
```

### Typography
```
Display / Hero    : "Syne" (Bold 800) — geometric, slightly irregular  
                    OR "Cabinet Grotesk" (ExtraBold)
Body / UI         : "DM Sans" (Regular 400, Medium 500)  
Mono / Tags       : "Space Mono" (for labels, coordinates, metadata)

Scale:
  Hero title       : clamp(4.5rem, 9vw, 9rem)
  Section heading  : clamp(2.5rem, 5vw, 4.5rem)
  Card title       : clamp(1.1rem, 2vw, 1.5rem)
  Body             : 1rem / 1.6 line-height
  Label / Tag      : 0.75rem uppercase, 0.12em letter-spacing
```

### Signature Visual Element
**Stroke outline mega-type** — oversized transparent text with only ice-blue outline 
at `opacity: 0.08–0.12`, placed BEHIND content. Acts as a watermark layer that 
adds depth without cluttering. Used in: About, Projects, Contact sections.

Example:
```css
.bg-word {
  -webkit-text-stroke: 1px rgba(125, 211, 252, 0.15);
  color: transparent;
  font-size: clamp(6rem, 15vw, 14rem);
  font-weight: 900;
  user-select: none;
  pointer-events: none;
  position: absolute;
}
```

---

## 🏗️ 2. FULL PAGE STRUCTURE

---

### SECTION 0 — NAVIGATION (Floating, Persistent)

```
[Logo Mark]          [Work]  [About]  [Projects]  [Contact]          [Open to Work ↗]
```

- Position: `fixed top-0`, full-width
- Background: `backdrop-filter: blur(20px)` + `rgba(5,8,16,0.7)` 
- Bottom border: `1px solid rgba(125,211,252,0.1)`
- Active nav item: ice-blue dot below the label (not underline)
- "Open to Work" badge: pill shape, pulsing ice-blue glow animation

---

### SECTION 1 — HERO (Full Viewport, Non-Symmetric)

**Layout concept: Broken grid — text block anchored bottom-left, visual mass top-right**

```
┌─────────────────────────────────────────────────────┐
│  [small label: CREATIVE DEVELOPER × VISUAL ARTIST]  │
│                                    [Abstract glowing │
│                                     orb / blur mass] │
│                                                      │
│  [HUGE DISPLAY NAME — 2 lines]                       │
│  [Sub: "Code. Design. Film. Fly."]                   │
│                                                      │
│  [→ View Work]  [↓ Scroll]        [portrait-silhouette│
│                                    or abstract photo]│
│                                                      │
│  ──────────── scroll indicator line ──────────────  │
└─────────────────────────────────────────────────────┘
```

**Details:**
- Name uses stagger-per-character fade-in-up animation
- Behind the name: massive stroke-outline version of name at 6% opacity
- Sub-title "Code. Design. Film. Fly." types out with cursor blink effect
- Glowing ambient orb: radial gradient `rgba(125,211,252,0.15)` top-right, slow float animation (6s loop)
- CTA buttons: outlined ice-blue, on hover fills with ice-blue + dark text + glow

**Hero scroll behavior:**
- On scroll down 10%: hero text translates up + fades out at 0.7 opacity
- Parallax: background orb moves at 0.3x scroll speed

---

### SECTION 2 — ABOUT (Asymmetric Split)

**Layout: Off-center, text left 55%, visual right 45%, vertical offset**

```
┌─────────────────────────────────────────────────────┐
│ "ABOUT"  ← mega stroke text behind everything       │
│                                                      │
│  ┌─────────────────────┐    ┌───────────────────┐   │
│  │  A creative at the  │    │ [Stats bento:]    │   │
│  │  intersection of    │    │ ┌──────┬────────┐ │   │
│  │  logic and emotion. │    │ │  4+  │ 40+    │ │   │
│  │                     │    │ │ yrs  │ projec │ │   │
│  │  [Paragraph body]   │    │ ├──────┴────────┤ │   │
│  │                     │    │ │ [Small badge: │ │   │
│  │  Skills listed as   │    │ │  available]   │ │   │
│  │  horizontal pills:  │    │ └───────────────┘ │   │
│  │  React · Figma ·    │    │ [Abstract 3D orb  │   │
│  │  Premiere · DJI     │    │  or blob SVG]     │   │
│  └─────────────────────┘    └───────────────────┘   │
└─────────────────────────────────────────────────────┘
```

**Details:**
- Skill pills: frosted glass, ice-blue border, slide in from left on scroll
- Stats numbers: count-up animation when entering viewport
- Abstract blob: pure CSS animated `border-radius` morphing shape in ice-blue

---

### SECTION 3 — GALLERY / WORK CATALOG (Bento Abstract Grid)

**This is the signature layout section — inspired by reference image 2.**

**Layout: Masonry-bento hybrid — NO equal columns**

```
┌────────────────────────────────────────────────────────────┐
│  [WORK]  ← eyebrow label                                   │
│  "Selected Projects"  ← section heading                    │
│                                                            │
│  ┌──────────────────┬──────────┬──────────────────────┐   │
│  │                  │  SMALL   │                      │   │
│  │   LARGE CARD     │  CARD 2  │   MEDIUM CARD 3      │   │
│  │   (spans 2 rows) │          │   (landscape)        │   │
│  │                  ├──────────┤                      │   │
│  │                  │  SMALL   ├──────────────────────┤   │
│  │                  │  CARD 4  │  TALL CARD 5         │   │
│  ├──────────────────┴──────────┤  (portrait ratio)    │   │
│  │  WIDE CARD 6 (full-width)   │                      │   │
│  └─────────────────────────────┴──────────────────────┘   │
│                                                            │
│  [Filter tabs: All · Coding · Design · Video · Drone]      │
└────────────────────────────────────────────────────────────┘
```

**Card anatomy (each card):**
```
[Thumbnail image / video preview — fills card]
[Bottom overlay on hover:]
  ← Project title (ice-blue)
  ← Category tag pill
  ← "View →" with animated arrow
[Card hover: scale(1.02) + ice-blue border glow + blur overlay brightens]
[Card enter: translateY(30px) → 0 + opacity 0 → 1, stagger 0.08s per card]
```

**Filter tab behavior:**
- Active tab: ice-blue background pill that slides/morphs between tabs (no jump)
- Inactive items fade to `opacity: 0.4` and `translateY(10px)`
- Cards re-layout with smooth FLIP animation when filter changes

---

### SECTION 4 — MY PROJECTS (3 Sub-sections with Hand Mockups)

> **This is the most visually distinctive section.**  
> Three full-width or near-full-width panels, each dedicated to one skill area,  
> with a **hand holding a relevant device** as the hero visual on the outer edge.

---

#### SUB-SECTION 4A — CODING PROJECTS

**Layout: Hand holding laptop — positioned RIGHT EDGE, bleeding off screen**

```
┌─────────────────────────────────────────────────────────────┐
│  [Stroke bg text: "CODE"]                                    │
│                                                              │
│  ┌─────────────────────────────┐       ┌──────────────────┐ │
│  │  [Text block — LEFT]        │       │  🖥️ LAPTOP HAND  │ │
│  │  "Where Logic Meets         │       │  (right edge,    │ │
│  │   Creativity"               │       │   slight tilt,   │ │
│  │                             │       │   screen shows   │ │
│  │  [Mini project cards:]      │       │   code/UI)       │ │
│  │  ┌──────┬──────┬──────┐    │       │                  │ │
│  │  │ P.01 │ P.02 │ P.03 │    │       │                  │ │
│  │  │ card │ card │ card │    │       └──────────────────┘ │
│  │  └──────┴──────┴──────┘    │                            │
│  │  [→ See all coding work]   │                            │
│  └─────────────────────────────┘                            │
└─────────────────────────────────────────────────────────────┘
```

**Scroll-in effect:** Hand slides in from the right with `translateX(120px) → 0` 
as user scrolls into section. Subtle float loop animation after mount.

---

#### SUB-SECTION 4B — DESIGN PROJECTS

**Layout: Hand holding phone/tablet — positioned LEFT EDGE, mirrored**

```
┌─────────────────────────────────────────────────────────────┐
│  [Stroke bg text: "DESIGN"]                                  │
│                                                              │
│  ┌──────────────────┐       ┌──────────────────────────────┐│
│  │  📱 PHONE HAND   │       │  [Text block — RIGHT]        ││
│  │  (left edge,     │       │  "Visual Stories             ││
│  │   phone shows    │       │   Told in Pixels"            ││
│  │   UI/design      │       │                              ││
│  │   mockup)        │       │  [Horizontal scroll strip:   ││
│  │                  │       │   design thumbnails swipe →] ││
│  └──────────────────┘       │                              ││
│                             │  [→ See all design work]     ││
│                             └──────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

**Horizontal thumbnail strip:** overflows container, user can drag/swipe to explore.
Phone screen: looping mockup preview animation (CSS keyframe fade between designs).

---

#### SUB-SECTION 4C — VIDEOGRAPHY + DRONE

**Layout: Hand holding drone controller — centered, hero treatment**

```
┌─────────────────────────────────────────────────────────────┐
│  [Stroke bg text: "FILM & FLY"]                              │
│                                                              │
│              [Drone/controller in hands image]               │
│              [CENTERED — large, cinematic crop]              │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  [Video reel thumbnails — horizontal scroll:]         │   │
│  │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  │   │
│  │  │ 🎬 1 │  │ 🎬 2 │  │ 🎬 3 │  │ 🚁 4 │  │ 🚁 5 │  │   │
│  │  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
│  "Capturing the world from every angle."                     │
└─────────────────────────────────────────────────────────────┘
```

**Cinematic reveal:** When entering viewport, the drone image does a slow 
`scale(1.05) → scale(1)` zoom-out effect, simulating a film frame opening.
Video thumbnails have play-icon hover + scale-up.

---

### SECTION 5 — PRODUCT / ROADMAP SHOWCASE

> **Inspired by reference image 1 — the product roadmap timeline.**

**Layout: Full-width dark panel with dashed timeline curve**

```
┌─────────────────────────────────────────────────────────────┐
│  "Process & Approach"   (or "How I Work")                    │
│  A clear, structured approach to every project.             │
│                                                              │
│  [Phase 1]──────────[Phase 2]──────────[Phase 3]            │
│   Discover           Design             Deliver              │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ • Research   │  │ • Wireframe  │  │ • Build      │      │
│  │ • Brief      │  │ • Prototype  │  │ • Test       │      │
│  │ • User needs │  │ • UI Design  │  │ • Launch     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

**Timeline animation:** Dashed SVG path draws itself from left to right as user scrolls.
Phase cards pop in with stagger when the path reaches their position.
Phase bullets use ice-blue glowing dot markers.

---

### SECTION 6 — CONTACT (Minimal, Dark, Atmospheric)

**Layout: Two columns — form left, info + social right**

```
┌─────────────────────────────────────────────────────────────┐
│  [bg stroke text: "HELLO"]                                   │
│                                                              │
│  "Let's build something     │  hello@yourname.com           │
│   remarkable together."     │                               │
│                             │  [GitHub]  [LinkedIn]         │
│  Full Name ──────────────── │  [Instagram]  [YouTube]       │
│                             │                               │
│  Email ──────────────────── │  Located in:                  │
│                             │  Indonesia 🇮🇩                │
│  Message ────────────────── │                               │
│           ──────────────    │  Available for freelance      │
│           ──────────────    │  & collaborations             │
│                             │                               │
│  [ Send Message → ]         │                               │
└─────────────────────────────────────────────────────────────┘
```

**Input states:**
- Default: `border-bottom: 1px solid rgba(125,211,252,0.2)`, transparent bg
- Focus: `border-bottom: 2px solid #7DD3FC` + label floats up in ice-blue + subtle glow

**Social icons:** Row of circular icon buttons, on hover: scale(1.15) + ice-blue fill + glow

---

## ✨ 3. SCROLL ANIMATION SYSTEM

### Global Reveal (All Sections)
```javascript
// All elements with class .reveal start hidden
// IntersectionObserver fires → adds .is-visible
// Variants via data-delay attribute for stagger

.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```

### Section Scale Transition (Cinematic)
```
When scrolling DOWN into new section:
  Outgoing section: scale(1.0) → scale(0.94) + opacity(1) → opacity(0.5)
  Incoming section: translateY(80px) → translateY(0) + opacity(0) → opacity(1)

CSS:
  section { transform-origin: top center; will-change: transform; }
  Use IntersectionObserver with rootMargin for trigger timing
```

### Hand Device Parallax
```javascript
// Each hand image scrolls at different rate from its section content
// Coding (laptop hand): translateY(scrollDelta * -0.25)
// Design (phone hand): translateY(scrollDelta * -0.3) + slight rotate(-2deg → 2deg)
// Drone hand: scale(1.05 → 1.0) as section scrolls in
```

### SVG Path Draw (Roadmap)
```javascript
// Get SVG path total length
const path = document.querySelector('.roadmap-path');
const length = path.getTotalLength();

// Set up dash
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

// On scroll: update dashoffset based on scroll progress
window.addEventListener('scroll', () => {
  const progress = getScrollProgress(roadmapSection);
  path.style.strokeDashoffset = length * (1 - progress);
});
```

### Bento Grid Card Stagger
```javascript
// Cards animate in sequence, not all at once
// delay = index * 0.07s
// Each card: opacity 0 → 1 + translateY(30px) → 0
```

### Horizontal Scroll Strips (Design + Video sections)
```css
.h-scroll-strip {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
}
.h-scroll-strip:active { cursor: grabbing; }
.h-scroll-card { scroll-snap-align: start; flex-shrink: 0; }
```

---

## 🖱️ 4. MICRO-INTERACTIONS

### Custom Cursor
```javascript
// Small dot (6px) — follows mouse exactly
// Ring (44px) — follows with 0.12s lag via lerp
// On hover clickable: ring → 60px + ice-blue border + inner dot hides
// On hover image/card: ring → 80px + "VIEW" text inside cursor

const lerp = (start, end, t) => start + (end - start) * t;
// rAF loop: cursorX = lerp(cursorX, mouseX, 0.12)
```

### Button Hover
```css
.btn-primary {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(125,211,252,0.5);
  transition: box-shadow 0.3s;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(125,211,252,0.1);
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.btn-primary:hover::after { transform: translateX(0); }
.btn-primary:hover {
  box-shadow: 0 0 24px rgba(125,211,252,0.3), 0 0 48px rgba(125,211,252,0.1);
}
```

### Card Border Glow on Hover
```css
.project-card:hover {
  border-color: rgba(125,211,252,0.5);
  box-shadow: 0 0 0 1px rgba(125,211,252,0.2),
              0 0 30px rgba(125,211,252,0.12),
              inset 0 0 30px rgba(125,211,252,0.04);
}
```

### Floating Nav Active State (Scroll Spy)
```javascript
// Use IntersectionObserver on all sections
// When section enters: highlight corresponding nav item
// Animate: ice-blue dot slides to active item via translateX
```

---

## 📐 5. TECHNICAL REQUIREMENTS

```
Stack (choose one):

  OPTION A — Vanilla (zero-dependency, fastest load):
    HTML5 + CSS Custom Properties + Vanilla JS
    Animation: CSS transitions + IntersectionObserver + requestAnimationFrame
    
  OPTION B — Modern Framework:
    React or Next.js
    GSAP ScrollTrigger (for section transitions + path draw)
    Framer Motion (for micro-interactions)
    Tailwind CSS (utility classes)

Fonts:
  Google Fonts: Syne (700, 800) + DM Sans (400, 500) + Space Mono (400)
  Or: @fontsource npm packages

Icons: Phosphor Icons (phosphor-icons.com) — SVG based

Images (Placeholder while building):
  Device mockup hands: use https://mockuphone.com or freepik device hand PNGs
  Project thumbnails: use solid color + project title as placeholder
  Replace with real assets after structure is approved

Responsive:
  Mobile  375px+  →  stack all layouts vertically
  Tablet  768px+  →  simplified 2-col
  Desktop 1280px+ →  full layout as specified

Performance:
  - prefers-reduced-motion: skip all animations, show final states immediately
  - Images: lazy load with loading="lazy"
  - Fonts: font-display: swap
  - will-change: transform on hand mockup images only (GPU hint)
```

---

## 🔧 6. PLACEHOLDER CONTENT

```yaml
name        : "[Your Name]"
title_1     : "Creative Developer"
title_2     : "Visual Storyteller"  
title_3     : "Drone Pilot"
tagline     : "Code. Design. Film. Fly."
sub_tagline : "Building digital experiences from every dimension."

about_text  : |
  "I'm a multi-disciplinary creator at the intersection of technology 
  and visual art. Whether I'm writing clean code, crafting UI systems, 
  shooting cinematic video, or capturing aerial perspectives — every 
  project starts with the same question: what story are we telling?"

skills      : [React, Next.js, Figma, Adobe XD, Premiere Pro, After Effects, 
               DJI Mavic, Blender, Tailwind CSS, GSAP]

stats:
  years     : "4+"
  projects  : "40+"
  clients   : "15+"

project_categories:
  coding    : [Web App 1, Web App 2, Dashboard 3]
  design    : [Brand Identity 1, UI Kit 2, Poster 3]
  video     : [Short Film 1, Commercial 2, Event 3]
  drone     : [Aerial Reel 1, Property Shoot 2]

social:
  github    : github.com/yourhandle
  linkedin  : linkedin.com/in/yourhandle
  instagram : @vinn.ntha
  email     : hello@yourname.com
  youtube   : youtube.com/@yourchannel

location    : "Indonesia 🇮🇩"
status      : "Open to Freelance & Collaboration"
```

---

## ⚠️ AGENT INSTRUCTIONS

1. **Layout anti-monoton wajib**: Setiap section HARUS berbeda grid-nya. Dilarang menggunakan layout yang sama dua kali.
2. **Hand mockup wajib di-render** di ketiga sub-section My Projects — ini adalah signature visual utama.
3. **Bento grid galeri** (Section 3) harus menggunakan CSS Grid dengan `grid-template-areas` yang asimetris, bukan equal columns.
4. **Semua animasi scroll wajib diimplementasi** — bukan komentar "add animation here".
5. **Ice blue palette harus konsisten** — gunakan CSS Custom Properties agar tidak ada warna yang hardcoded berbeda.
6. **Output final**: Single HTML file yang bisa langsung dibuka di browser ATAU folder project yang terstruktur.
7. **Custom cursor wajib**: Dengan lerp tracking dan expand-on-hover behavior.
8. **Stroke outline mega-text** harus ada di minimum 3 section sebagai background layer.
