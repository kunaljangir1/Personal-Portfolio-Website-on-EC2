import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Shield className="text-indigo-400" />,
      title: "Security First",
      desc: "Implementing multi-layered security protocols on every cloud infrastructure."
    },
    {
      icon: <Zap className="text-indigo-400" />,
      title: "High Performance",
      desc: "Optimizing load times and server response through Nginx and CDN integration."
    },
    {
      icon: <Target className="text-indigo-400" />,
      title: "Scalability",
      desc: "Leveraging AWS Auto-scaling and Load Balancing for high availability."
    }
  ]

  return (
    <section id="about" className="bg-[var(--bg-dark)] py-24 rounded-[3rem] my-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-64 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-transparent opacity-20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center font-bold text-4xl opacity-10">CLOUD</div>
              </div>
              <div className="h-40 rounded-2xl glass-panel"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-40 rounded-2xl glass-panel"></div>
              <div className="h-64 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-transparent opacity-20 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center font-bold text-4xl opacity-10">CODE</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About This <span className="text-[var(--primary)]">Project</span></h2>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              This portfolio was developed as a cloud computing mini-project. The goal was to build a full-stack application and deploy it on a secure, scalable AWS infrastructure using EC2 and Nginx.
            </p>
            
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                  <div className="p-2 bg-[var(--bg-darker)] rounded-lg h-fit text-[var(--primary)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
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
