import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
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
            <a href="#work" className="hover:text-white transition-colors">Work</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 text-sm font-medium">Get a Quote</a>
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

      {/* Video Showcase above Features */}
      <section id="work" className="relative bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Showcase</h2>
            <p className="mt-2 text-zinc-300">A quick look at pacing, polish, and narrative clarity.</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            {/* Replace src with your reel link (YouTube/Vimeo) */}
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Editing Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features with Sticky Sidebar */}
      <section id="features" className="relative py-20 md:py-28 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Sticky intro card */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600" />
                  <h2 className="text-2xl font-semibold">What you get</h2>
                </div>
                <p className="mt-3 text-zinc-300">Clear, actionable edits with a calm, collaborative process.</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-3"><span className="text-purple-400">•</span> Line edits that preserve voice</li>
                  <li className="flex gap-3"><span className="text-purple-400">•</span> Proofreading and consistency checks</li>
                  <li className="flex gap-3"><span className="text-purple-400">•</span> Structural clarity and flow</li>
                  <li className="flex gap-3"><span className="text-purple-400">•</span> Brand voice systems and guidelines</li>
                  <li className="flex gap-3"><span className="text-purple-400">•</span> Fast, collaborative delivery</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 text-sm font-medium">Request a Quote</a>
              </div>
            </div>

            {/* Feature cards */}
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Line Editing & Clarity</h3>
                <p className="mt-2 text-sm text-zinc-300">Sentence-by-sentence refinements that sharpen voice, tighten flow, and remove ambiguity without losing tone.</p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Proofreading & Consistency</h3>
                <p className="mt-2 text-sm text-zinc-300">Typos, grammar, punctuation, and style-guide alignment so every detail feels intentional and trustworthy.</p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Structural Editing</h3>
                <p className="mt-2 text-sm text-zinc-300">Reorganize sections, clarify hierarchy, and create stronger narrative flow for articles, decks, docs, and books.</p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Localization Readiness</h3>
                <p className="mt-2 text-sm text-zinc-300">Prepare content for global audiences with idiom checks, cultural sensitivity, and translatable phrasing.</p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Brand Voice Systems</h3>
                <p className="mt-2 text-sm text-zinc-300">Codify tone, terminology, and examples in a practical guide your team actually uses.</p>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold">Fast, Collaborative Delivery</h3>
                <p className="mt-2 text-sm text-zinc-300">Async reviews in your tools—Docs, Figma, Notion—plus transparent timelines and feedback loops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold">A smooth, steady process</h2>
              <p className="mt-3 text-zinc-300">Share your goals and samples, we’ll scope the work, then iterate quickly with clear checkpoints.</p>
              <ol className="mt-6 space-y-4 text-zinc-300">
                <li className="flex gap-3 justify-center lg:justify-start"><span className="text-purple-400">01</span> Discovery call and sample pass</li>
                <li className="flex gap-3 justify-center lg:justify-start"><span className="text-purple-400">02</span> Plan, timeline, and editor assignment</li>
                <li className="flex gap-3 justify-center lg:justify-start"><span className="text-purple-400">03</span> Edits with comments and quick reviews</li>
                <li className="flex gap-3 justify-center lg:justify-start"><span className="text-purple-400">04</span> Final polish and delivery</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
              <div className="rounded-xl bg-black/50 p-6">
                <p className="text-zinc-300 text-center lg:text-left">“We ship faster and sound sharper. The edit memos make every revision feel obvious.”</p>
                <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600" />
                  <div>
                    <p className="text-sm font-medium">Head of Content, SaaS</p>
                    <p className="text-xs text-zinc-400">Retainer client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-indigo-700/10 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-semibold">Ready to make your writing unmistakable?</h3>
                <p className="mt-2 text-zinc-300">Tell us about your piece, audience, and timeline—we’ll reply within one business day.</p>
              </div>
              <form className="grid gap-4">
                <input placeholder="Your name" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <input placeholder="Email" type="email" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <textarea placeholder="What are you working on?" rows="3" className="rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-500" />
                <button type="button" className="inline-flex justify-center rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-6 py-3 text-sm font-medium">Request a Quote</button>
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
