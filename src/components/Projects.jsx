import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Cloud-Native E-commerce",
      desc: "A highly scalable e-commerce platform built with React and deployed on AWS with Auto-scaling and Load Balancing.",
      image: "/assets/project1.png",
      tags: ["React", "AWS EC2", "Nginx", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Chat Dashboard",
      desc: "An intelligent dashboard that integrates LLM APIs for real-time customer support, optimized for low latency on EC2.",
      image: "/assets/project2.png",
      tags: ["Node.js", "Vite", "OpenAI", "Redis"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics",
      desc: "Complex data visualization platform for tracking social metrics, hosted on a secured VPC environment.",
      image: "/assets/project3.png",
      tags: ["AWS S3", "CloudFront", "React", "D3.js"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-[var(--primary)]">Projects</span></h2>
            <p className="text-[var(--text-secondary)] max-w-xl">
              A selection of my most challenging and impactful work, showcasing my expertise in cloud architecture and modern web development.
            </p>
          </div>
          <a href="#" className="btn btn-outline">View All Projects</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel group overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darker)] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.github} className="p-2 bg-white flex items-center justify-center text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-all">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="p-2 bg-white flex items-center justify-center text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] uppercase tracking-wider font-bold text-[var(--primary)] bg-[var(--primary)] bg-opacity-10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
