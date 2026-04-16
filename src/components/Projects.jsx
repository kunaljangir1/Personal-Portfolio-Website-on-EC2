import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Cloud-Native E-commerce',
      desc: 'A scalable storefront interface deployed with AWS-ready infrastructure and a layout designed for easy scanning.',
      image: '/assets/project1.png',
      tags: ['React', 'AWS EC2', 'Nginx', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      title: 'AI Chat Dashboard',
      desc: 'A dashboard concept for real-time support workflows, presented in a more structured card design with cleaner controls.',
      image: '/assets/project2.png',
      tags: ['Node.js', 'Vite', 'OpenAI', 'Redis'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Analytics',
      desc: 'A data-heavy visual project that benefits from steadier content spacing and more reliable media placement.',
      image: '/assets/project3.png',
      tags: ['AWS S3', 'CloudFront', 'React', 'D3.js'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <h2 className="section-title">
              Featured <span className="title-accent">Projects</span>
            </h2>
            <p className="section-copy">
              These project cards now use a more stable layout, making the imagery, tags, and actions line up more consistently across breakpoints.
            </p>
          </div>
          <a href="#" className="btn btn-outline">View All Projects</a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-panel card-hover project-card"
            >
              <div className="project-media">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.github} className="icon-button" aria-label={`${project.title} GitHub link`}>
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="icon-button" aria-label={`${project.title} live link`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="tag-list" style={{ marginBottom: '1rem' }}>
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem' }}>{project.title}</h3>
              <p className="section-copy" style={{ fontSize: '0.95rem' }}>
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
