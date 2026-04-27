import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 bg-linear-to-b overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-full"
      >
        {/* Animated Gradient Text */}
        <motion.h1
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage:
              "linear-gradient(270deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)",
            backgroundSize: "400% 400%",
          }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-4 sm:mb-3 bg-clip-text text-transparent leading-tight px-2"
        >
          Mohsen Montaser
        </motion.h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-xl px-4 leading-relaxed">
          Frontend Developer <span className="text-gray-600">|</span> React.js
          <br />
          <span className="inline-block mt-2">Based in Cairo, Egypt</span>
          <br />
          <a
            href="mailto:mhsnmntsr33@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-block mt-2 break-all"
          >
            mhsnmntsr33@gmail.com
          </a>
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 w-full px-4 sm:w-auto">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all shadow-[0_0_15px_-5px_rgba(34,211,238,0.4)] text-center w-full sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold transition-all text-center w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
