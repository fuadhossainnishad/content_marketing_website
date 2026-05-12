"use client";

import { motion } from "framer-motion";

const footerLinks = {
  col1: ["Services", "Work", "About", "Culture", "Meet The Risers"],
  col2: ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  offices: ["Sheffield", "Manchester", "London", "New York", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] rounded-t-3xl overflow-hidden">
      {/* ✅ SAFE CONTAINER (FIXED PADDING ISSUE) */}
      <div className="max-w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-8 pt-14 md:pt-20">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 pb-14">
          {/* NEWSLETTER */}
          <div className="space-y-5">
            <p
              className="text-white font-medium leading-snug
              text-xl sm:text-2xl md:text-3xl"
            >
              Stay updated with Rise news
            </p>

            <div
              className="flex flex-col sm:flex-row  gap-3 sm:gap-2  bg-white/10  rounded-2xl sm:rounded-full p-3 sm:px-4 sm:py-3 w-full max-w-md"
            >
              {/* INPUT */}
              <input
                type="email"
                placeholder="Your Email Address"
                className=" w-full bg-transparent text-white/90  placeholder-white/30   outline-none  text-sm sm:text-base  px-2"
              />

              {/* BUTTON */}
              <button
                className="
      w-full sm:w-12
      h-10 sm:h-12
      rounded-full
      bg-[#7FFFD4]
      flex items-center justify-center
      flex-shrink-0
      transition hover:bg-[#b2fff0]
    "
              >
                <span className="text-[#0A0A0A] text-sm font-bold">↗</span>
              </button>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-2">
              {["FB", "X", "LI", "YT", "TT", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20
                  flex items-center justify-center text-white/60 text-[10px]
                  hover:text-white transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <FooterColumn title={footerLinks.col1} />
          <FooterColumn title={footerLinks.col2} />
          <FooterColumn title={footerLinks.offices} />
        </div>

        {/* IMAGE */}
        <div className="pt-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/footer.svg"
              className="w-full h-auto object-contain"
              alt="footer"
            />
          </motion.div>
        </div>

        {/* LEGAL */}
        <div
          className="mt-10 py-6 border-t border-white/10
          flex flex-col md:flex-row gap-4 md:gap-0
          justify-between items-center"
        >
          <p className="text-white/70 text-[10px] sm:text-[11px] text-center md:text-left leading-relaxed max-w-2xl">
            © 2025 Rise at Seven Ltd • Company No. 11955187 • VAT GB 322402945 •
            Privacy Policy • Terms & Conditions
          </p>

          <p className="text-white/30 text-[10px] sm:text-[11px]">
            Website MadeByShape
          </p>
        </div>
      </div>
    </footer>
  );
}

/* COLUMN */
function FooterColumn({ title }: { title: string[] }) {
  return (
    <ul className="space-y-2 sm:space-y-3">
      {title.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-white/60 text-sm sm:text-[14px]
            hover:text-white transition block"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
