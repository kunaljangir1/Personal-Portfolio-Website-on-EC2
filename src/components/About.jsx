import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Target, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Shield size={20} />,
      title: 'Security First',
      desc: 'Implementing multi-layered security practices across hosting, routing, and application setup.',
    },
    {
      icon: <Zap size={20} />,
      title: 'High Performance',
      desc: 'Improving content flow and lighter visual weight so the interface feels faster and easier to scan.',
    },
    {
      icon: <Target size={20} />,
      title: 'Scalability',
      desc: 'Keeping the layout modular so future portfolio sections can be added without breaking alignment.',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container glass-panel about-shell">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-visual"
          >
            <div className="about-column">
              <div className="about-tile tall highlight">
                <div>
                  <span className="tile-label">Focus Area</span>
                  <strong className="tile-title">Cloud</strong>
                </div>
              </div>
              <div className="about-tile">
                <span className="tile-label">Deployment</span>
                <strong className="tile-title">EC2 + Nginx</strong>
              </div>
            </div>
            <div className="about-column offset-column">
              <div className="about-tile">
                <span className="tile-label">Frontend</span>
                <strong className="tile-title">React UI</strong>
              </div>
              <div className="about-tile tall highlight">
                <div>
                  <span className="tile-label">Outcome</span>
                  <strong className="tile-title">Better UX</strong>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-heading">
              <h2 className="section-title">
                About This <span className="title-accent">Project</span>
              </h2>
              <p className="section-copy">
                This portfolio was built to showcase cloud learning and web development work. The UI refresh focuses on stronger composition, fewer broken utility classes, and better placement of cards, forms, and section content.
              </p>
            </div>

            <div className="highlight-list">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p className="section-copy" style={{ fontSize: '0.95rem' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
