'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ReadyToRise() {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    once: false,
    margin: '-80px',
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ['10%', '0%', '-10%']
  )

  const text = 'Ready to Rise at Seven'

  return (
    <section
      ref={ref}
      className="bg-[#F2F1EF] py-16 sm:py-20 md:py-28 overflow-hidden"
    >

      {/* TEXT WRAPPER */}
      <div className="overflow-hidden">

        <motion.div
          style={{ x }}
          className="whitespace-nowrap flex items-center will-change-transform"
        >

          {/* ================= FILLED TEXT ================= */}
          <div className="flex items-center">

            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  x: 120,
                  y: -20,
                  rotate: -6,
                  filter: 'blur(10px)',
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        filter: 'blur(0px)',
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block font-black text-[#0A0A0A] leading-none"
                style={{
                  fontSize: 'clamp(40px, 10vw, 180px)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}

          </div>

          {/* ================= OUTLINE TEXT ================= */}
          <div className="flex items-center ml-4 sm:ml-6 md:ml-10">

            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  x: 140,
                  y: 20,
                  rotate: 6,
                  filter: 'blur(10px)',
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        filter: 'blur(0px)',
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.03 + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block font-black leading-none text-transparent"
                style={{
                  fontSize: 'clamp(40px, 10vw, 180px)',
                  WebkitTextStroke: '1.5px #0A0A0A',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}

          </div>
        </motion.div>
      </div>

      {/* ================= BUTTON ================= */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 md:px-12 mt-10 sm:mt-12 md:mt-14 flex justify-center">

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : {}
          }
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#0A0A0A] text-white font-semibold text-[13px] sm:text-[14px] md:text-[15px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full"
        >
          Get In Touch
          <ArrowUpRight size={18} />
        </motion.a>

      </div>
    </section>
  )
}