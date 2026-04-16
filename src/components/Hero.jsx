import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hero-copy"
        >
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            <Rocket size={14} /> Personal portfolio refresh
          </div>
          <h1 className="section-title">
            Building practical web interfaces with cleaner <span className="title-accent">cloud-focused presentation</span>
          </h1>
          <p className="hero-description">
            This updated landing section uses stronger spacing, clearer hierarchy, and a more balanced layout so the portfolio feels polished on both mobile and desktop.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.84 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="hero-visual"
        >
          <div className="hero-orb"></div>
          <div className="glass-panel hero-card">
            <div className="hero-card-content">
              <div className="hero-badge">AWS / React / Deployment</div>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>UI tuned for clarity</h3>
                <p className="section-copy">
                  The content blocks now sit in a controlled grid, with fixed visual anchors and reduced overlap issues that were causing misplacement.
                </p>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <strong>Responsive</strong>
                  <span>Cleaner stacking across screen sizes</span>
                </div>
                <div className="stat-card">
                  <strong>Aligned</strong>
                  <span>Consistent cards, buttons, and spacing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
