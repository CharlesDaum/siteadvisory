'use client'

import { motion } from 'framer-motion'

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030508] overflow-hidden pointer-events-none">
      {/* 
        Heavy blurred light orbs representing the 'Aurora' theme. 
        They move very slowly to create a dynamic, living lighting effect.
      */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] md:blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-cyan-600/15 rounded-full blur-[120px] md:blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-fuchsia-600/15 rounded-full blur-[120px] md:blur-[150px]"
      />

      {/* Subtle Textures to tie the lighting together and give a premium matte finish */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.1] mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-[0.15] mix-blend-screen" />
    </div>
  )
}
