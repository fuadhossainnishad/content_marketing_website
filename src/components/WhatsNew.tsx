'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedButton from '@/animation/AnimatedButton'
import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    author: 'Ray Saddiq',
    readTime: '3 mins',
    title: 'Rise at Seven Appoints Hollie as Global Operations Lead',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    tag: null,
  },
  {
    id: 2,
    author: 'Ray Saddiq',
    readTime: '2 mins',
    title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tag: null,
  },
  {
    id: 3,
    author: 'Carrie Rose',
    readTime: '2 mins',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    tag: 'News',
  },
]

export default function WhatsNew() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })
  const [activeId, setActiveId] = useState<number | null>(null)

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section ref={ref} className="bg-[#F2F1EF] py-16 md:py-28 relative">

      {/* CURSOR (hidden on mobile) */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 z-[999] pointer-events-none"
          animate={{
            x: cursor.x - 20,
            y: cursor.y - 20,
            scale: cursor.active ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#7FFFD4] flex items-center justify-center shadow-lg">
            <ArrowUpRight size={28} className="text-black" />
          </div>
        </motion.div>
      )}

      {/* HEADER */}
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-10 border-b border-black/10 pb-4">

          <h2
            className="font-bold text-black flex items-center flex-wrap gap-2 sm:gap-3"
            style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}
          >
            <span>What&apos;s</span>

            <span className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=80"
                className="w-full h-full object-cover"
              />
            </span>

            <span>New</span>
          </h2>

          <AnimatedButton text="Explore More Thoughts ↗" filled />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-none">

          {posts.map((post, i) => {
            const isActive = activeId === post.id

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >

                {/* IMAGE */}
                <div
                  className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] mb-4 cursor-none"
                  onMouseMove={(e) => {
                    setCursor({
                      x: e.clientX,
                      y: e.clientY,
                      active: true,
                    })
                    setActiveId(post.id)
                  }}
                  onMouseLeave={() => {
                    setCursor((p) => ({ ...p, active: false }))
                    setActiveId(null)
                  }}
                >

                  <img
                    src={post.image}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {post.tag && (
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 text-black text-[10px] md:text-[11px] px-2 md:px-3 py-1 rounded-full">
                      {post.tag}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="space-y-2 md:space-y-3">


                  <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-black/60 flex-wrap">

                    <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px]">
                      {post.author[0]}
                    </div>

                    <span>{post.author}</span>
                    <span className="text-black/20">·</span>
                    <span>⏱ {post.readTime}</span>

                  </div>

                  <h3 className="text-[#0A0A0A] font-bold text-[16px] md:text-[20px] leading-snug">
                    {post.title}
                  </h3>
                </div>

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}