import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6 text-[var(--primary)] border-[var(--primary)] border-opacity-20">
            <Rocket size={16} /> Welcome to my digital space
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            I Build <span className="text-[var(--primary)]">Scalable</span> Cloud Solutions.
          </h1>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-lg">
            A passionate Cloud Architect & Web Enthusiast specialized in AWS, React, and building modern web experiences that scale effortlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square relative flex items-center justify-center">
            {/* Abstract Design Elements */}
            <div className="absolute w-full h-full bg-[var(--primary)] opacity-10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="glass-panel w-full aspect-square relative z-10 p-8 flex flex-col justify-center items-center text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--primary)] to-transparent opacity-5"></div>
                {/* Minimalist Tech Stack Illustration (Abstract) */}
                <div className="relative z-20 space-y-4">
                    <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-2xl bg-[var(--primary)] flex items-center justify-center text-white shadow-2xl shadow-[var(--primary)]">
                            <span className="text-4xl">AWS</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold">Cloud Architect</h3>
                    <p className="text-[var(--text-secondary)]">AWS Certified Professional</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
