import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PenLine, SpellCheck, Layers, Globe2, BookOpen, Zap, CheckCircle2 } from 'lucide-react'

function App() {
  // Process scroll progress
  const processRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ['start 0.8', 'end 0.2']
  })
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.02, 1])

  const featureIcons = [PenLine, SpellCheck, Layers, Globe2, BookOpen, Zap]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="relative z-20">
        <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg" />
            <span className="text-lg font-semibold tracking-wide">Prism Edit Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#work" className="hover:text-white transition-colors">Showcase</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-3 py-1.5 text-xs font-medium">Get a Quote</a>
        </nav>
      </header>

      {/* Hero with Spline cover (centered text) */}
      <section className="relative h-[80vh] md:h-[88vh] overflow-hidden">
        {/* 3D Cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Misty gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/40 to-black/90" />
        <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen" style={{
          background: 'radial-gradient(60% 60% at 50% 40%, rgba(147, 51, 234, 0.30) 0%, rgba(0,0,0,0.0) 60%)'
        }} />

        {/* Centered Content */}
        <div className="relative z-10 h-full">
          <div className="mx-auto max-w-5xl h-full px-6 flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                Premium Editing & Proofreading
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
                Elevate Every Word
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">with Editorial Precision</span>
              </h1>
              <p className="mt-5 text-zinc-300 md:text-lg">
                We help teams, authors, and brands publish with confidence—polished copy, consistent voice, and immaculate clarity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex justify-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-6 py-3 text-sm font-medium">Start a Project</a>
                <a href="#features" className="inline-flex justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 text-sm font-medium text-zinc-200">Explore Features</a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-400">
                <span>24–72h turnaround</span>
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span>Dedicated editor</span>
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span>Style-guide alignment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase above Features (smaller reel) */}
      <section id="work" className="relative bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Showcase</h2>
            <p className="mt-2 text-zinc-300">A quick look at pacing, polish, and narrative clarity.</p>
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
            <h2 className="text-3xl md:text-4xl font-semibold">Line editing, proofreading, and structural clarity</h2>
            <p className="mt-3 text-zinc-300">Precision at every layer, from voice to structure.</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Centered narrow boxes with subtle icons */}
            <div className="space-y-6">
              {[
                {
                  title: 'Line Editing & Clarity',
                  body: 'Sentence-by-sentence refinements that sharpen voice, tighten flow, and remove ambiguity without losing tone.'
                },
                {
                  title: 'Proofreading & Consistency',
                  body: 'Typos, grammar, punctuation, and style-guide alignment so every detail feels intentional and trustworthy.'
                },
                {
                  title: 'Structural Editing',
                  body: 'Reorganize sections, clarify hierarchy, and create stronger narrative flow for articles, decks, docs, and books.'
                },
                {
                  title: 'Localization Readiness',
                  body: 'Prepare content for global audiences with idiom checks, cultural sensitivity, and translatable phrasing.'
                },
                {
                  title: 'Brand Voice Systems',
                  body: 'Codify tone, terminology, and examples in a practical guide your team actually uses.'
                },
                {
                  title: 'Fast, Collaborative Delivery',
                  body: 'Async reviews in your tools—Docs, Figma, Notion—plus transparent timelines and feedback loops.'
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
                  >
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
                  <p className="mt-3 text-zinc-300">Clear, actionable edits with a calm, collaborative process.</p>
                </div>
                {[
                  'Line edits that preserve voice',
                  'Proofreading and consistency checks',
                  'Structural clarity and flow',
                  'Brand voice systems and guidelines',
                  'Fast, collaborative delivery'
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
                <a href="#contact" className="block text-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-3 py-2 text-xs font-medium">Request a Quote</a>
              </div>
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
                <p className="mt-3 text-zinc-300">Each step fades in as you scroll for a calm reading rhythm.</p>
              </div>
              <div className="space-y-8">
                {[
                  { n: '01', t: 'Discovery', d: 'Discovery call and a quick sample pass to align on voice and goals.' },
                  { n: '02', t: 'Planning', d: 'Plan, timeline, and editor assignment with clear milestones.' },
                  { n: '03', t: 'Editing', d: 'Edits with comments, quick reviews, and async collaboration.' },
                  { n: '04', t: 'Delivery', d: 'Final polish, handoff, and guidance for next steps.' }
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
            <p className="mt-3 text-zinc-300">Bigger, roomier testimonials for easier reading.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text: 'They didn\'t just fix typos—they clarified our argument and tightened the structure. Our conversion rate lifted ~18% after publishing the edited pages.',
                name: 'Maya Chen',
                role: 'Head of Growth, Fintech SaaS',
                img: 'https://i.pravatar.cc/150?img=12'
              },
              {
                text: 'The line edits were subtle but powerful. The team\'s edit memos taught our writers how to keep that standard. We now ship faster with fewer review cycles.',
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
                <h3 className="text-2xl md:text-3xl font-semibold">Ready to get your editing done right?</h3>
                <p className="mt-2 text-zinc-300">Share your document, audience, and deadline—we\'ll propose the right editing pass and timeline within one business day.</p>
              </div>
              <form className="grid gap-4">
                <input placeholder="Your name" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <input placeholder="Email" type="email" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <textarea placeholder="What are you editing?" rows="3" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <button type="button" className="inline-flex justify-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-5 py-2.5 text-xs font-medium">Request a Quote</button>
                <p className="text-xs text-zinc-500 text-center md:text-left">By clicking, you agree to our friendly terms. We’ll never share your info.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Prism Edit Studio. All rights reserved.</p>
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
