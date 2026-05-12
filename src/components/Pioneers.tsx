'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Pioneers() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 4])
  const y = useTransform(scrollYProgress, [0, 1], [60, -60])

  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false })

  return (
    <section
      ref={ref}
      className="bg-[#F2F1EF] py-16 sm:py-20 md:py-32 overflow-hidden"
    >
      <div className="relative max-w-full mx-auto px-4 sm:px-6 md:px-12">

        {/* MARQUEE */}
        <div
          onMouseMove={(e) =>
            setCursor({
              x: e.clientX,
              y: e.clientY,
              visible: true,
            })
          }
          onMouseLeave={() =>
            setCursor((v) => ({ ...v, visible: false }))
          }
          className="relative mb-12 sm:mb-16 md:mb-20 overflow-hidden cursor-none -mx-4 sm:-mx-6 md:-mx-12"
        >

          {/* Cursor bubble */}
          <motion.div
            animate={{
              x: cursor.x,
              y: cursor.y,
              opacity: cursor.visible ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed top-0 left-0 z-[999] pointer-events-none"
          >
            <div className="bg-[#7FFFD4] text-black text-[11px] sm:text-[12px] font-semibold px-3 sm:px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
              Send Us Your Brief ↗
            </div>
          </motion.div>

          {/* MARQUEE CONTENT */}
          <div className="flex w-max animate-marquee items-center">

            {[0, 1].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10 whitespace-nowrap"
              >
                <span className="font-display font-bold leading-none text-[42px] sm:text-[80px] md:text-[100px] lg:text-[120px]">
                  Consumers
                </span>

                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt=""
                  className="w-[90px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-[70px] sm:h-[90px] md:h-[110px] lg:h-[120px] rounded-xl object-cover"
                />

                <span className="font-display font-bold leading-none text-[42px] sm:text-[80px] md:text-[100px] lg:text-[120px]">
                  Not Algorithms
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* LEGACY TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] sm:text-[12px] md:text-[13px] font-medium text-black/50 uppercase tracking-[0.15em] sm:tracking-[0.2em]"
        >
          Legacy In The Making
        </motion.p>

      </div>
    </section>
  )
}