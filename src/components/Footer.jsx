import React from 'react'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-[var(--glass-border)]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter block mb-2">
              PORT<span className="text-[var(--primary)]">FOLIO.</span>
            </a>
            <p className="text-[var(--text-secondary)] text-sm">
              Built with React, Vite, and AWS EC2.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all" aria-label="Github Profile">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all" aria-label="Twitter Profile">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all" aria-label="Email Me">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-[var(--text-secondary)] text-sm flex items-center gap-2">
            © {currentYear} All rights reserved. Built with <Heart size={14} className="text-red-500" /> by Cloud Team
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
