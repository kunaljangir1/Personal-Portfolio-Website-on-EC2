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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[var(--bg-card)] text-xs font-semibold mb-6 text-[var(--primary)] border border-[var(--border-color)]">
            <Rocket size={14} /> My Personal Portfolio Project
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Aspiring <span className="text-[var(--primary)]">Cloud Engineer</span> & Web Developer
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-lg">
            Hi, I'm a Computer Science student passionate about AWS, full-stack development, and building scalable cloud solutions.
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
