import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="glass-panel p-8 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Build Something <span className="text-[var(--primary)]">Epic</span></h2>
              <p className="text-[var(--text-secondary)] mb-10 text-lg">
                Have a project in mind or just want to chat about cloud architecture? Feel free to reach out. I'm always open to new opportunities and collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--glass)] flex items-center justify-center text-[var(--primary)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[var(--text-secondary)] font-bold tracking-widest">Email</p>
                    <p className="font-medium">contact@yourdomain.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--glass)] flex items-center justify-center text-[var(--primary)]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-[var(--text-secondary)] font-bold tracking-widest">Phone</p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input type="text" className="w-full bg-[var(--bg-darker)] border border-[var(--glass-border)] rounded-xl py-3 px-4 focus:border-[var(--primary)] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full bg-[var(--bg-darker)] border border-[var(--glass-border)] rounded-xl py-3 px-4 focus:border-[var(--primary)] outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input type="text" className="w-full bg-[var(--bg-darker)] border border-[var(--glass-border)] rounded-xl py-3 px-4 focus:border-[var(--primary)] outline-none transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows="4" className="w-full bg-[var(--bg-darker)] border border-[var(--glass-border)] rounded-xl py-3 px-4 focus:border-[var(--primary)] outline-none transition-all resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
