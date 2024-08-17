"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br dark:from-slate-300 dark:to-slate-500 from-slate-600 to-slate-900 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Nurture Leads <br /> Boost Success
      </motion.h1>
    </LampContainer>
  );
}
