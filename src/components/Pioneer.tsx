'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const PIONEERS = [
  {
    title: 'Pioneers 01',
    desc: "We build narrative systems that shape the industry.",
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
  },
  {
    title: 'Pioneers 02',
    desc: 'We shape search culture and redefine digital growth.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    title: 'Pioneers 03',
    desc: 'We define future SEO and multi-channel search.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  },
  {
    title: 'Pioneers 04',
    desc: 'We define future SEO and multi-channel search.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  },
]

export default function Pioneer() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const progress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, PIONEERS.length - 1]
  )

  return (
    <section
      ref={ref}
      className="relative h-[300vh] md:h-[350vh] bg-[#F2F1EF]"
    >

      {/* STICKY STAGE */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6">

        {/* responsive container */}
        <div className="relative w-full max-w-[420px] sm:max-w-[520px] md:max-w-[560px] h-[520px] sm:h-[600px] md:h-[640px]">

          {PIONEERS.map((item, i) => {

            const rawY = useTransform(
              progress,
              [i - 0.7, i, i + 0.7],
              [120, 0, -160]
            )

            const opacity = useTransform(
              progress,
              [i - 0.6, i, i + 0.6],
              [0, 1, 0]
            )

            const scale = useTransform(
              progress,
              [i - 0.6, i, i + 0.6],
              [0.85, 1, 0.92]
            )

            const rotate = useTransform(
              progress,
              [i - 0.6, i, i + 0.6],
              [-8, 0, 14]
            )

            const blur = useTransform(
              progress,
              [i - 0.6, i + 0.6],
              [6, 0]
            )

            return (
              <motion.div
                key={i}
                style={{
                  opacity,
                  scale,
                  y: rawY,
                  rotate,
                  filter: blur ? `blur(${blur}px)` : 'none',
                }}
                className="absolute inset-0 flex justify-center will-change-transform"
              >

                {/* BACK LAYER */}
                <div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[#7FFFD4]/40"
                  style={{
                    transform: 'translate(-10px, 10px) rotate(-3deg)',
                  }}
                />

                {/* CARD */}
                <div className="relative w-full bg-[#0A0A0A] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl">

                  {/* IMAGE */}
                  <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 relative">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover scale-105"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white text-[24px] sm:text-[30px] md:text-[36px] font-bold text-center mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-white/60 text-[12px] sm:text-[13px] md:text-[14px] text-center leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <p className="text-white/35 text-[11px] sm:text-[12px] md:text-[13px] text-center">
                    We’re building the future of search-first brands.
                  </p>

                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}