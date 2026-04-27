import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="lg:-mx-6 flex flex-wrap items-center justify-center flex-col text-center">
      <motion.h2
        className="section-title text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      <div className="section-accent " />
      <motion.p
        className="mt-4 sm:mt-6 text-muted leading-relaxed  mx-auto "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Passionate Frontend Developer with hands-on experience in building
        responsive, user-friendly web applications using HTML, CSS, JavaScript,
        and React. Skilled in translating design mockups into fully functional
        websites while adhering to modern development standards and best
        practices. Actively seeking opportunities to grow as a developer and
        contribute to impactful, innovative projects. Eager to collaborate with
        like-minded teams and continuously learn in a dynamic environment.
      </motion.p>
    </div>
  );
}
