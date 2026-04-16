import React from 'react'
import { Github, Heart, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="glass-panel footer-shell">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="brand">
              PORT<span className="title-accent">FOLIO.</span>
            </a>
            <p>Built with React, Vite, and AWS EC2.</p>
          </div>

          <div className="footer-links">
            <a href="#" className="icon-button" aria-label="Github Profile">
              <Github size={20} />
            </a>
            <a href="#" className="icon-button" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="#" className="icon-button" aria-label="Twitter Profile">
              <Twitter size={20} />
            </a>
            <a href="#" className="icon-button" aria-label="Email Me">
              <Mail size={20} />
            </a>
          </div>

          <div className="footer-note">
            (c) {currentYear} All rights reserved. Built with <Heart size={14} style={{ color: '#fb7185' }} /> by Cloud Team
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
