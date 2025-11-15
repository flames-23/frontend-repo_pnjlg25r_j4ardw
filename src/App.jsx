import React, { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Scissors, Clapperboard, Film, Camera, Wand2, Zap, CheckCircle2, XCircle, ChevronDown, Youtube, Instagram, Megaphone } from 'lucide-react'

function App() {
  // Process scroll progress
  const processRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start 0.8', 'end 0.2']
  })
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.02, 1])

  const featureIcons = [Scissors, Clapperboard, Film, Camera, Wand2, Zap]

  // FAQ state
  const [openIdx, setOpenIdx] = useState(null)
  const faqs = [
    {
      q: 'What types of videos do you edit?',
      a: 'Short-form (Reels, TikTok, Shorts), YouTube videos, product promos, ads, interviews, explainers, and multi-cam podcasts. We also repurpose long-form into 9:16 clips.'
    },
    {
      q: 'How fast is turnaround?',
      a: 'First cuts typically in 3–5 business days depending on scope. Rush options are available—tell us your launch date and we’ll plan backwards.'
    },
    {
      q: 'How do revisions work?',
      a: 'We collaborate via time-stamped comments. Most projects include two revision rounds, but we’ll align on what’s needed during scoping.'
    },
    {
      q: 'What deliverables do we receive?',
      a: 'Final exports in requested aspect ratios (16:9, 9:16, 1:1), captions (burned-in or SRT), thumbnail/title suggestions, and archive-friendly file organization.'
    },
    {
      q: 'Can you match our brand style?',
      a: 'Yes—share your guidelines, fonts, and references. We adapt color, motion, and titling to feel native to your brand.'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navigation */}
      <div className="fixed top-4 left-0 right-0 z-30 flex justify-center px-4">
        <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-xl">
          <div className="flex items-center gap-3 pl-1">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_8px_30px_rgba(99,102,241,0.35)]" />
            <span className="text-sm font-semibold tracking-wide">Arteks Media</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#compare" className="hover:text-white transition">Why us</a>
              <a href="#process" className="hover:text-white transition">Process</a>
              <a href="#work" className="hover:text-white transition">Showcase</a>
              <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 px-3 py-2 text-[11px] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(139,92,246,0.35)] ring-1 ring-white/20 transition-transform hover:translate-y-[1px] active:translate-y-[2px]">
            Get a Quote
          </a>
        </nav>
      </div>

      {/* Hero with Spline cover (centered text) */}
      <section className="relative h-[88vh] overflow-hidden">
        {/* 3D Cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Misty gradient overlay (static + subtle float) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black/90" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
          style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(147,51,234,0.28) 0%, rgba(0,0,0,0) 60%)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Centered Content */}
        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-5xl h-full px-6 flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                Premium Video Editing
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
                Elevate Every Frame
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">with Cinematic Precision</span>
              </h1>
              <p className="mt-5 text-zinc-300 md:text-lg">
                We help creators, brands, and teams tell tighter stories—clean cuts, color that pops, sound that carries, and motion that engages.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex justify-center rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_16px_40px_rgba(139,92,246,0.35)] ring-1 ring-white/20 transition-transform hover:translate-y-[1px] active:translate-y-[2px]">Start a Project</a>
                <a href="#features" className="inline-flex justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 text-sm font-medium text-zinc-200">Explore Features</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hero capability boxes */}
        <div className="relative z-20 -mt-8 pb-6">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{
                title: 'Reels',
                Icon: Instagram,
                desc: 'Vertical 9:16 cuts with bold captions'
              },{
                title: 'YouTube',
                Icon: Youtube,
                desc: 'Story-led edits with motion titles'
              },{
                title: 'Ads',
                Icon: Megaphone,
                desc: 'Hook-forward creative built for ROAS'
              }].map((c, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                  <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/25 blur-3xl" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/30 shadow-[0_0_0_3px_rgba(255,255,255,0.06),0_10px_30px_rgba(168,85,247,0.45)]">
                      <c.Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{c.title}</p>
                      <p className="text-xs text-zinc-300">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase above Features (smaller reel) */}
      <section id="work" className="relative bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Showcase</h2>
            <p className="mt-2 text-zinc-300">A quick look at pacing, polish, and audience retention.</p>
          </div>
          {/* Instagram Reel (vertical 9:16, intentionally smaller) */}
          <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.instagram.com/reel/DPjNQZijHtg/embed"
              title="Instagram Reel"
              frameBorder="0"
              allowTransparency={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features with Sticky Sidebar on the RIGHT */}
      <section id="features" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-purple-950/20 to-zinc-950">
        {/* subtle purple glow backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Headline for the left list */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Cuts, color, motion, and story clarity</h2>
            <p className="mt-3 text-zinc-300">Precision at every layer—from rhythm and structure to polish and packaging.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Centered narrow boxes with subtle icons */}
            <div className="space-y-6">
              {[
                {
                  title: 'Story-driven Cuts',
                  body: 'Tight pacing, clean transitions, and narrative focus for YouTube, ads, and documentaries.'
                },
                {
                  title: 'Color & Sound Polish',
                  body: 'Balanced color, noise cleanup, EQ, and tasteful sweetening so everything feels intentional.'
                },
                {
                  title: 'Motion Graphics & Titles',
                  body: 'Lower thirds, openers, chapter cards, and subtle motion to reinforce the message.'
                },
                {
                  title: 'Shorts & Reels Repurposing',
                  body: 'Turn long-form into thumb-stopping 9:16 clips with dynamic cropping and beat-matched cuts.'
                },
                {
                  title: 'Captions & Accessibility',
                  body: 'Accurate burned-in captions or SRTs with brand styling and callouts.'
                },
                {
                  title: 'Fast, Collaborative Delivery',
                  body: 'Clear review links, versioning, and transparent timelines built around your launch.'
                }
              ].map((card, i) => {
                const Icon = featureIcons[i % featureIcons.length]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="group max-w-md mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-white/5 p-5 backdrop-blur text-center transition hover:bg-white/[0.08]"
                  {
                    ...({})
                  }>
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 ring-1 ring-purple-400/20">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>
                    <h3 className="text-base font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{card.body}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Right: Sticky What you get, headline NOT in a box and no purple square */}
            <div>
              <div className="lg:sticky lg:top-8 space-y-4">
                <div className="text-center pb-2">
                  <h2 className="text-2xl font-semibold">What you get</h2>
                  <p className="mt-3 text-zinc-300">Clear, collaborative edits built for reach and retention.</p>
                </div>
                {[
                  'Edit aligned to your brief and audience',
                  'Color and sound polish',
                  'Stylish captions/subtitles (burned-in or SRT)',
                  'Multiple aspect ratios (16:9, 9:16, 1:1)',
                  'Thumbnail/title suggestions and export presets'
                ].map((item, idx) => (
                  <div key={idx} className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-white/5 p-4 backdrop-blur">
                    {/* decorative right fill */}
                    <div aria-hidden className="pointer-events-none absolute -right-6 top-0 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
                    <div aria-hidden className="pointer-events-none absolute -right-2 -bottom-2 opacity-10">
                      <CheckCircle2 className="h-14 w-14 text-purple-300" />
                    </div>
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-purple-300" />
                        <p className="text-sm text-zinc-300">{item}</p>
                      </div>
                      <span className="shrink-0 self-start rounded-full border border-purple-400/20 bg-purple-500/10 px-2 py-0.5 text-[10px] tracking-wide text-purple-200">Included</span>
                    </div>
                  </div>
                ))}
                <a href="#contact" className="block text-center rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 px-3 py-2 text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_rgba(139,92,246,0.35)] ring-1 ring-white/20 transition-transform hover:translate-y-[1px]">Request a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Others vs Us */}
      <section id="compare" className="relative py-24 bg-gradient-to-b from-zinc-950 via-purple-950/10 to-zinc-950">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-purple-700/10 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-indigo-700/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Why teams switch to us</h2>
            <p className="mt-3 text-zinc-300">A clear look at typical editing offers versus how we deliver more.</p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Others */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 md:p-8">
              <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-zinc-700/20 blur-2xl" />
              <p className="text-xs uppercase tracking-wider text-zinc-400">What other editing agencies offer</p>
              <h3 className="mt-2 text-xl font-semibold">Surface-level edits that miss the brief</h3>
              <ul className="mt-5 space-y-3">
                {[
                  'Generic templates and overused transitions',
                  'No story structure; cuts feel random',
                  'Inconsistent color and muddy audio',
                  'Slow turnarounds and unclear timelines',
                  'Limited formats — one export and you’re done',
                  'Revisions capped and hard to collaborate'
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <XCircle className="mt-0.5 h-4 w-4 text-zinc-500" />
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Us */}
            <div className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 p-6 md:p-8 backdrop-blur">
              <div aria-hidden className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
              <p className="text-xs uppercase tracking-wider text-purple-200/80">What our studio delivers</p>
              <h3 className="mt-2 text-xl font-semibold">Story-led, polished edits that drive retention</h3>
              <ul className="mt-5 space-y-3">
                {[
                  'Narrative-first cutting with thoughtful pacing',
                  'Color and audio pass tailored to your brand',
                  'Tasteful motion graphics, titles, and callouts',
                  'Fast, transparent timelines with review links',
                  'Multi-aspect exports (16:9, 9:16, 1:1) + presets',
                  'Captioning (burn-in or SRT) and thumbnail/title support'
                ].map((it, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-purple-300" />
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process: step-by-step, smooth reveal while scrolling + progress bar */}
      <section id="process" className="relative py-24 bg-gradient-to-b from-zinc-950 via-purple-950/10 to-zinc-950">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-purple-700/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6" ref={processRef}>
          <div className="grid grid-cols-[10px_1fr] gap-6">
            {/* Progress bar column */}
            <div className="relative">
              <div className="sticky top-24 h-[60vh] w-[2px] bg-white/10 rounded-full mx-auto">
                <motion.div
                  className="origin-top w-[2px] rounded-full bg-gradient-to-b from-purple-500 to-indigo-500"
                  style={{ height: '100%', scaleY: progressScale }}
                />
              </div>
            </div>
            {/* Content column */}
            <div>
              <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">A smooth, steady process</h2>
                <p className="mt-3 text-zinc-300">Each step fades in as you scroll for a calm review rhythm.</p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', t: 'Brief & Asset Intake', d: 'Share goals, examples, footage, music, and brand elements.' },
                  { n: '02', t: 'First Cut', d: 'Story-first assembly with rough color and temp sound for alignment.' },
                  { n: '03', t: 'Refinement', d: 'Beat-matched cuts, color pass, motion/titles, captions, and polish.' },
                  { n: '04', t: 'Delivery', d: 'Exports in required ratios and codecs, plus thumbnails and SRTs.' }
                ].map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-zinc-900 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-purple-400 font-semibold">{s.n}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{s.t}</h3>
                        <p className="mt-2 text-sm text-zinc-300">{s.d}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: larger and taller */}
      <section id="testimonials" className="relative py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">What clients say</h2>
            <p className="mt-3 text-zinc-300">Real feedback from teams shipping video at pace.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: 'Retention jumped on our shorts after their repackaging. Cuts hit on the beat, captions are on-brand, and color finally feels consistent across our channel.',
                name: 'Maya Chen',
                role: 'Head of Growth, Fintech SaaS',
                img: 'https://i.pravatar.cc/150?img=12'
              },
              {
                text: 'They took a messy multi-cam shoot and turned it into a tight story. Graphics and titles look premium, and the delivery files were exactly what our ads team needed.',
                name: 'Daniel Ortiz',
                role: 'Content Lead, DevTools',
                img: 'https://i.pravatar.cc/150?img=32'
              }
            ].map((t, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-gradient-to-b from-purple-500/5 to-zinc-950 p-8 md:p-10 min-h-[320px] md:min-h-[380px] flex flex-col justify-between">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-200">“{t.text}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-zinc-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-indigo-700/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold">Ready to get your video edited right?</h3>
                <p className="mt-2 text-zinc-300">Share your footage, goals, and timeline—we'll propose the right edit, deliverables, and turnaround within one business day.</p>
              </div>
              <form className="grid gap-4">
                <input placeholder="Your name" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <input placeholder="Email" type="email" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <textarea placeholder="What footage are we working with?" rows="3" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <button type="button" className="inline-flex justify-center rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 px-5 py-2.5 text-xs font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_30px_rgba(139,92,246,0.35)] ring-1 ring-white/20 transition-transform hover:translate-y-[1px]">Request a Quote</button>
                <p className="text-xs text-zinc-500 text-center md:text-left">By clicking, you agree to our friendly terms. We’ll never share your info.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
            <p className="mt-3 text-zinc-300">Answers to common questions about scope, speed, and deliverables.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/5 to-zinc-900">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm md:text-base font-medium text-zinc-100">{item.q}</span>
                    <ChevronDown className={`${isOpen ? 'rotate-180' : ''} h-4 w-4 shrink-0 transition-transform text-zinc-400`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="px-5 pb-5 text-sm text-zinc-300"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Arteks Media. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
