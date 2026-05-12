'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedButton from '../animation/AnimatedButton';
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    name: 'Digital PR',
    col: 'left',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Search & Growth Strategy',
    col: 'left',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Data & Insights',
    col: 'left',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Organic Social & Content',
    col: 'right',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Content Experience',
    col: 'right',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Onsite SEO',
    col: 'right',
    image:
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1600&auto=format&fit=crop',
  },
]

const leftServices = services.filter(s => s.col === 'left')
const rightServices = services.filter(s => s.col === 'right')

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#F2F1EF] pt-12">

      <div className="mx-auto px-4 sm:px-6 md:px-12">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-black/10 pb-6 mb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-4 flex-wrap"
          >
            <h2
              className="font-display font-bold text-[#0A0A0A]"
              style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
            >
              Our
            </h2>

            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-black/10"
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=200"
                alt="team"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h2
              className="font-display font-bold text-[#0A0A0A]"
              style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
            >
              Services
            </h2>
          </motion.div>

          <AnimatedButton text="View All Services ↗" filled />
        </div>


        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

          <div>
            {leftServices.map((service, i) => (
              <ServiceRow
                key={service.name}
                {...service}
                index={i}
                isInView={isInView}
                isLast={i === leftServices.length - 1}
              />
            ))}
          </div>

          <div>
            {rightServices.map((service, i) => (
              <ServiceRow
                key={service.name}
                {...service}
                index={i + 3}
                isInView={isInView}
                isLast={i === rightServices.length - 1}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
function ServiceRow({
  name,
  image,
  index,
  isInView,
  isRight,
  isLast,
}: {
  name: string
  image: string
  index: number
  isInView: boolean
  isRight?: boolean
  isLast?: boolean
}) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative overflow-hidden flex items-center justify-between px-0 md:px-8 py-8 cursor-pointer"
    >
      {/* Border layer */}
      {!isLast && (
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/10 group-hover:opacity-0 transition-opacity duration-300" />
      )}
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-0 rounded-full overflow-hidden"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center">
        {/* Arrow Icon */}
        <div
          className="
      overflow-hidden
      w-0
      opacity-0
      group-hover:w-7
      group-hover:opacity-100
      transition-all duration-300 ease-out
      flex items-center justify-center
    "
        >
          <ArrowUpRight
            size={40}
            strokeWidth={2.2}
            className="text-white"
          />
        </div>

        {/* Title */}
        <h3
          className="
      font-display font-bold
      text-[#0A0A0A]
      group-hover:text-white
      transition-all duration-300
      group-hover:translate-x-2
    "
          style={{ fontSize: 'clamp(18px, 2.5vw, 40px)' }}
        >
          {name}
        </h3>
      </div>
    </motion.a>
  )
}