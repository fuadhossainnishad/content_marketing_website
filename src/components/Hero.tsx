'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { HERO_BLUR_EVENT } from './Navbar'

const PLATFORMS = [
  { name: 'Google' },
  { name: 'ChatGPT' },
  { name: 'Gemini' },
  { name: 'TikTok' },
  { name: 'YouTube' },
  { name: 'Pinterest' },
  { name: 'GIPHY' },
  { name: 'reddit' },
  { name: 'amazon' },
]

const AWARDS = [
  'Global Search Awards',
  'The Drum',
  'UK Social Media Awards',
  'Content Awards',
]

const BG_IMAGE_URL =
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&q=80&auto=format&fit=crop'

/* ───────────────────────────────────────── */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [navBlurred, setNavBlurred] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  const contentFade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const handler = (e: Event) =>
      setNavBlurred((e as CustomEvent<boolean>).detail)

    window.addEventListener(HERO_BLUR_EVENT, handler)
    return () => window.removeEventListener(HERO_BLUR_EVENT, handler)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] rounded-3xl flex flex-col overflow-hidden bg-[#0A0A0A]"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={BG_IMAGE_URL}
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          animate={{
            backdropFilter: navBlurred ? 'blur(16px)' : 'blur(0px)',
          }}
          className="absolute inset-0"
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentFade }}
        className="
          relative z-20 flex-1
          flex flex-col justify-center items-center
          text-center
          px-5 sm:px-8 md:px-12
          pt-[120px] sm:pt-[140px] md:pt-[160px]
          pb-10
        "
      >
        {/* Awards */}
        <div className="mb-6 sm:mb-8">
          <p className="text-white/50 text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">
            #1 Content Marketing Agency
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2">
            {AWARDS.map((a) => (
              <span
                key={a}
                className="text-white/40 text-[9px] sm:text-[10px] uppercase"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-1 sm:space-y-2">
          {['We Create', 'Category', 'Leaders'].map((word, i) => (
            <motion.h1
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.8,
              }}
              className="
                font-bold text-white leading-[0.9]
              "
              style={{
                fontSize: 'clamp(40px, 10vw, 120px)',
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/60 mt-6 sm:mt-8"
          style={{
            fontSize: 'clamp(13px, 2vw, 18px)',
          }}
        >
          on every searchable platform
        </motion.p>

        {/* Platforms */}
        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-x-4 gap-y-3 max-w-[900px]">
          {PLATFORMS.map((p) => (
            <span
              key={p.name}
              className="text-white/60 text-[11px] sm:text-[12px] hover:text-white transition"
            >
              {p.name}
            </span>
          ))}
        </div>
      </motion.div>

      <div
        className="
          relative z-20
          px-5 sm:px-8 md:px-12
          pb-6 sm:pb-8
          flex flex-col sm:flex-row
          gap-4 sm:justify-between
        "
      >
        <p className="text-white/50 text-[11px] max-w-sm leading-relaxed">
          Organic media planners creating search-first content for SEO,
          Social, PR & AI search.
        </p>

        <p className="text-white/50 text-[11px] sm:text-right">
          UK, USA & EU offices
        </p>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-white/40"
        />
      </div>
    </section>
  )
}