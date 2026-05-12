'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedButton from '@/animation/AnimatedButton'

const works = [
  { name: 'SIXT', years: '[2023-2025]', type: 'car' },
  { name: 'Dojo - B2B', years: '[2021-2025]', type: 'dojo' },
  { name: 'Magnet Trade - B2B', years: '[2023-2024]', type: 'magnet' },
  { name: 'E-SIM Brand', years: '[2023-2025]', type: 'esim' },
  { name: 'SIXT', years: '[2023-2025]', type: 'car2' },
  { name: 'Dojo - B2B', years: '[2021-2025]', type: 'dojo2' },
  { name: 'Magnet Trade - B2B', years: '[2023-2024]', type: 'magnet2' },
  { name: 'E-SIM Brand', years: '[2023-2025]', type: 'esim2' },
]

const content = [
  {
    type: 'car',
    title: 'SIXT',
    desc: 'Car rental innovation at global scale',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600',
  },
  {
    type: 'dojo',
    title: 'Dojo',
    desc: 'B2B payment transformation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600',
  },
  {
    type: 'magnet',
    title: 'Magnet Trade',
    desc: 'B2B growth strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
  },
  {
    type: 'esim',
    title: 'E-SIM Brand',
    desc: 'Global telecom expansion',
    image: 'https://images.unsplash.com/photo-1581091870620-3f5d5f0d5f1c?q=80&w=1600',
  },
  {
    type: 'car2',
    title: 'SIXT',
    desc: 'Car rental innovation at global scale',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600',
  },
  {
    type: 'dojo2',
    title: 'Dojo',
    desc: 'B2B payment transformation',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600',
  },
  {
    type: 'magnet2',
    title: 'Magnet Trade',
    desc: 'B2B growth strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',
  },
  {
    type: 'esim2',
    title: 'E-SIM Brand',
    desc: 'Global telecom expansion',
    image: 'https://images.unsplash.com/photo-1581091870620-3f5d5f0d5f1c?q=80&w=1600',
  },
]

export default function FeaturedWork() {
  const [active, setActive] = useState('car')

  return (
    <section className="bg-[#0A0A0A] rounded-3xl">

      <div className="rounded-3xl max-w-full mx-auto px-4 sm:px-6 md:px-12">

        {/* HEADER */}
        <p className="text-white text-lg sm:text-xl font-bold py-8 sm:py-10">
          Featured Work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* ================= LEFT ================= */}
          <div className="md:sticky md:top-24 h-fit space-y-6 sm:space-y-8">

            {works.map((work) => {
              const isActive = active === work.type

              return (
                <div
                  key={work.type}
                  className="flex items-baseline justify-between gap-4 cursor-pointer"
                >
                  <h3
                    className="font-bold transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(22px, 3.5vw, 56px)',
                      color: isActive
                        ? '#ffffff'
                        : 'rgba(255,255,255,0.25)',
                    }}
                  >
                    {work.name}
                  </h3>

                  <span className="text-white/30 text-[10px] sm:text-[11px] font-mono whitespace-nowrap">
                    {work.years}
                  </span>
                </div>
              )
            })}

          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32">

            {content.map((item) => (
              <ScrollCard
                key={item.type}
                item={item}
                setActive={setActive}
              />
            ))}

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="flex justify-center py-12 sm:py-16">
        <AnimatedButton text="Explore Our Work ↗" filled />
      </div>

    </section>
  )
}
function ScrollCard({
  item,
  setActive,
}: {
  item: any
  setActive: (v: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: '-40% 0px -40% 0px',
  })

  useEffect(() => {
    if (isInView) setActive(item.type)
  }, [isInView, item.type, setActive])

  return (
    <motion.div
      ref={ref}
      className="
        relative overflow-hidden group
        h-[60vh] sm:h-[70vh] md:h-[80vh]
        rounded-xl sm:rounded-2xl
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* IMAGE */}
      <img
        src={item.image}
        className="
          absolute inset-0 w-full h-full object-cover
          scale-105 group-hover:scale-110 transition-transform duration-700
        "
      />

      {/* OVERLAY */}
      <div className="
        absolute inset-0
        bg-black/60 group-hover:bg-black/40
        transition
      " />

      {/* CONTENT */}
      <div className="
        relative h-full flex flex-col items-center justify-center text-center text-white px-4
      ">

        <h2 className="
          text-2xl sm:text-4xl md:text-5xl font-bold
        ">
          {item.title}
        </h2>

        <p className="
          text-white/70 mt-2 sm:mt-3 text-sm sm:text-base
        ">
          {item.desc}
        </p>

      </div>
    </motion.div>
  )
}