import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="glass-panel contact-panel">
          <div className="contact-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div>
              <div className="section-heading">
                <h2 className="section-title">
                  Let&apos;s Build Something <span className="title-accent">Strong</span>
                </h2>
                <p className="section-copy">
                  The contact block now uses clearer spacing and more reliable form alignment so the section feels balanced instead of crowded.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="tile-label">Email</p>
                    <p>contact@yourdomain.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="tile-label">Phone</p>
                    <p>+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="tile-label">Location</p>
                    <p>Available for remote collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-grid">
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="Project Inquiry" />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
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
