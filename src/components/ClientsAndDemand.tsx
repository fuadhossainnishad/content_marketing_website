'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedButton from '@/animation/AnimatedButton'

const clients = [
  { name: 'SIXT', style: 'font-black text-[18px] sm:text-[22px]' },
  { name: 'REVOLUTION', style: 'font-light text-[11px] sm:text-[13px] tracking-[0.2em] uppercase' },
  { name: 'PlayStation', symbol: true },
  { name: 'AXA', style: 'font-bold text-[16px] sm:text-[20px]' },
  { name: 'Emirates', style: 'font-medium text-[14px] sm:text-[16px] italic' },
  { name: 'Shark Ninja', style: 'font-bold text-[14px] sm:text-[16px]' },
]

export default function ClientsAndDemand() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full overflow-hidden">

      {/* ───── MARQUEE ───── */}
      <div className="py-6 sm:py-10 px-4 sm:px-8 md:px-12 overflow-hidden">
        <div className="flex items-center gap-6 sm:gap-8">

          {/* Label */}
          <div className="flex-shrink-0">
            <span className="text-[12px] sm:text-base text-black font-medium whitespace-nowrap">
              The agency behind …
            </span>
          </div>

          {/* Marquee */}
          <div className="relative flex-1 overflow-hidden">

            <motion.div
              className="flex items-center gap-10 sm:gap-20 md:gap-32 min-w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="flex-shrink-0">
                  <ClientLogo client={c} />
                </div>
              ))}
            </motion.div>

            {/* fades */}
            <div className="absolute left-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-10 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* ───── MAIN GRID ───── */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[16px] sm:text-xl text-black font-bold leading-snug sm:w-[90%] md:w-[80%]">
              A global team of search-first content marketers engineering semantic relevancy &
              category signals for both the internet and people
            </p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >

            <h2
              className="font-display font-bold leading-[0.95] tracking-tight text-[#0A0A0A] mb-6 sm:mb-8"
              style={{ fontSize: 'clamp(32px, 6vw, 70px)' }}
            >
              {/* LINE 1 */}
              <div className="block">Driving Demand &amp;</div>

              {/* LINE 2 WITH IMAGE */}
              <div className="flex items-center gap-3 sm:gap-5 mt-2">
                <span>Discovery</span>

                <motion.div
                  initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                  animate={isInView ? { rotate: 0, scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&q=80"
                    alt="office"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </h2>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              <AnimatedButton text="Our Story ↗" filled />
              <AnimatedButton text="Our Services ↗" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ───── LOGO COMPONENT ───── */
function ClientLogo({ client }: { client: any }) {
  if (client.symbol) {
    return (
      <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition">
        <svg
          width="28"
          height="28"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="sm:w-[40px] sm:h-[40px]"
        >
          <circle cx="35" cy="50" r="8" />
          <circle cx="65" cy="50" r="8" />
        </svg>
        <span className="font-bold text-[14px] sm:text-[16px]">
          PlayStation
        </span>
      </div>
    )
  }

  return (
    <span
      className={`text-[#0A0A0A] opacity-70 hover:opacity-100 transition cursor-pointer ${client.style}`}
    >
      {client.name}
    </span>
  )
}