import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Server, Layout, Database, Terminal, ShieldCheck } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: <Cloud size={24} />,
      skills: ["AWS EC2", "S3", "Lambda", "VPC", "IAM", "Route 53"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: ["React", "Vite", "JavaScript", "HTML5/CSS3", "Framer Motion"]
    },
    {
      title: "Backend & Servers",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "Nginx", "Apache", "REST APIs"]
    },
    {
        title: "Database Management",
        icon: <Database size={24} />,
        skills: ["MongoDB", "PostgreSQL", "DynamoDB", "Firebase"]
    },
    {
        title: "DevOps & OS",
        icon: <Terminal size={24} />,
        skills: ["Git", "Docker", "Linux (Ubuntu)", "Terraform", "CI/CD"]
    },
    {
        title: "Security & Monitoring",
        icon: <ShieldCheck size={24} />,
        skills: ["SSL/TLS", "Certbot", "CloudWatch", "WAF"]
    }
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-[var(--primary)]">Arsenal</span></h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build robust, scalable, and secure digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 hover:border-[var(--primary)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="px-3 py-1 bg-[var(--glass)] rounded-full text-sm text-[var(--text-secondary)] border border-[var(--glass-border)]">
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
