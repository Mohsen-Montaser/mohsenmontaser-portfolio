import React from "react";
import { profile } from "../data";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="text-center">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact
      </motion.h2>

      <div className="section-accent" />

      <motion.p
        className="mt-6 text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Want to Contact Me? Reach me via whatapp or email.
      </motion.p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://wa.me/201114910513"
          target="_blank"
          rel="noopener noreferrer"
          className="btn outline"
        >
          WhatsApp
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mhsnmntsrr33@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="btn outline"
        >
          Email
        </a>
      </div>
    </div>
  );
}
