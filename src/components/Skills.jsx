import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Database, Layout, Server, ShieldCheck, Terminal } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Infrastructure',
      icon: <Cloud size={24} />,
      skills: ['AWS EC2', 'S3', 'Lambda', 'VPC', 'IAM', 'Route 53'],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={24} />,
      skills: ['React', 'Vite', 'JavaScript', 'HTML5/CSS3', 'Framer Motion'],
    },
    {
      title: 'Backend & Servers',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express', 'Nginx', 'Apache', 'REST APIs'],
    },
    {
      title: 'Database Management',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Firebase'],
    },
    {
      title: 'DevOps & OS',
      icon: <Terminal size={24} />,
      skills: ['Git', 'Docker', 'Linux (Ubuntu)', 'Terraform', 'CI/CD'],
    },
    {
      title: 'Security & Monitoring',
      icon: <ShieldCheck size={24} />,
      skills: ['SSL/TLS', 'Certbot', 'CloudWatch', 'WAF'],
    },
  ]

  return (
    <section id="skills">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Technical <span className="title-accent">Arsenal</span>
          </h2>
          <p className="section-copy">
            A concise overview of the tools and platforms behind the projects, now arranged in a cleaner card grid with more even spacing.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel card-hover skill-card"
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{category.title}</h3>
              <div className="tag-list">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
