'use client'
import { motion } from 'framer-motion'
export default function AnimatedButton({
    text,
    filled,
}: {
    text: string
    filled?: boolean
}) {
    return (
        <motion.a
            href="#"
            whileTap={{ scale: 0.97 }}
            className={`
        relative overflow-hidden rounded-full px-6 py-3
        text-base font-semibold inline-flex items-center justify-center
        h-[46px]
        ${filled ? 'bg-white text-black' : ' text-black'}
      `}
        >
            <div className="relative overflow-hidden h-[18px] leading-[18px]">
                <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: '-18px' }}
                    transition={{
                        duration: 0.35,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    className="flex flex-col"
                >
                    <span className="h-[18px] flex items-center">
                        {text}
                    </span>

                    <span className="h-[18px] flex items-center">
                        {text}
                    </span>
                </motion.div>
            </div>
        </motion.a>
    )
}