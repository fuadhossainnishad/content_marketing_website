'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AnnouncementHeader() {
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
        mt-3
         md:mx-0
        rounded-full
        bg-teal-300
        text-[#0A0A0A]
        text-center
        py-1.5 md:py-2
        px-4 md:px-6
        text-[11px] md:text-[12px]
        font-semibold
        tracking-wide
        flex items-center justify-center gap-2
        w-full
        leading-none
        whitespace-nowrap
      "
        >
            <span className="text-[10px] md:text-[12px]">🔴</span>

            <span className="truncate">
                The Category Leaderboard — Live Now
            </span>
        </motion.div>
    )
}