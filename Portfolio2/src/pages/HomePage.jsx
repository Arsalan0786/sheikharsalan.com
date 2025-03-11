import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <motion.h1 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Sheikh Arsalan 👋
      </motion.h1>

      <motion.p
        className="text-lg mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        I build cool stuff on the web and turn ideas into reality.
      </motion.p>

      <motion.a
        href="/projects"
        className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Check My Projects 🚀
      </motion.a>
    </div>
  );
}