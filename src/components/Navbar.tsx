'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'


type NavItem = {
  label: string
  hasDropdown: boolean
  badge?: string
}
const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Services', hasDropdown: true },
  { label: 'Industries', hasDropdown: true },
  { label: 'International', hasDropdown: true },
  { label: 'About', hasDropdown: true },
  { label: 'Work', hasDropdown: false, badge: '25' },
  { label: 'Careers', hasDropdown: false },
  { label: 'Blog & Resources', hasDropdown: true },
  { label: 'Webinar', hasDropdown: false },
]

export const HERO_BLUR_EVENT = 'hero:blur'

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const emitBlur = useCallback((v: boolean) => {
    window.dispatchEvent(new CustomEvent(HERO_BLUR_EVENT, { detail: v }))
  }, [])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    emitBlur(next)
  }

  const isOverHero = !pastHero

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          isOverHero ? 'pt-5 sm:pt-8' : 'bg-white/40 backdrop-blur-2xl'
        )}
      >
        {/* OUTER SAFE AREA */}
        <div className="w-full px-4 sm:px-6 lg:px-10">
          {/* NAV CONTAINER */}
          <div
            className={clsx(
              'mx-auto flex items-center justify-between w-full max-w-[1280px] transition-all',
              isOverHero ? 'py-3 sm:py-4' : 'h-[64px]'
            )}
          >
            {/* ================= LOGO ================= */}
            <a
              className={clsx(
                'font-semibold text-[15px] sm:text-[16px] shrink-0',
                isOverHero ? 'text-white' : 'text-black'
              )}
            >
              Rise at Seven <sup className="text-[9px]">↗</sup>
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden lg:flex items-center gap-1 flex-wrap justify-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={clsx(
                    'px-3 py-2 text-[12.5px] rounded-lg transition',
                    isOverHero
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-black/70 hover:text-black hover:bg-black/5'
                  )}
                >
                  {item.label}

                  {item.badge && (
                    <span className="ml-1 text-[9px] bg-[#7FFFD4] text-black px-1.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-3 shrink-0">
              {/* CTA */}
              <a
                className={clsx(
                  'hidden lg:inline-flex px-4 py-2 rounded-full text-[12px] font-semibold transition',
                  isOverHero
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                )}
              >
                Get In Touch ↗
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] shrink-0"
              >
                <span
                  className={clsx(
                    'h-[2px] w-5 rounded-full transition',
                    isOverHero ? 'bg-white' : 'bg-black'
                  )}
                />
                <span
                  className={clsx(
                    'h-[2px] w-4 rounded-full transition',
                    isOverHero ? 'bg-white' : 'bg-black'
                  )}
                />
                <span
                  className={clsx(
                    'h-[2px] w-5 rounded-full transition',
                    isOverHero ? 'bg-white' : 'bg-black'
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col"
          >
            <nav className="flex flex-col justify-center flex-1 px-6 sm:px-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href="#"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-4 border-b border-white/10 text-white text-[20px]"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="p-6">
              <a className="block text-center bg-[#7FFFD4] text-black py-4 rounded-full font-semibold">
                Get In Touch ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}