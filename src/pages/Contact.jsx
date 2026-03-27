import { useState } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/video.mp4';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Centered Video Hero */}
      <section className={`${styles.videoSection} ${isFullWidth ? styles.fullWidth : ''}`}>
        <div 
          className={styles.videoWrapper}
          onClick={() => setIsFullWidth(!isFullWidth)}
        >
          <video
            className={styles.heroVideoPlayer}
            autoPlay
            muted
            loop
            playsInline
            src={heroVideo}
          />
        </div>
      </section>

      {/* Info + Form */}
      <section className={styles.twoCol}>
        {/* Office Info */}
        <motion.div
          className={styles.officeInfo}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Locations</h3>
          <p>
            New York &nbsp;·&nbsp; Toronto &nbsp;·&nbsp; Florida<br />
            99 Wall Street +1467, New York, NY 10005
          </p>

          <p className={styles.infoLabel}>Inquiries</p>
          <p>
            <a href="tel:2124949052">212.494.9052</a><br />
            <a href="mailto:newbiz@marshallhaber.com">newbiz@marshallhaber.com</a>
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2>Want to work with us?</h2>
          <p className={styles.formSubtext}>
            Let us know a bit about you and your business idea, challenge, or needs by filling out this form.
          </p>

          {submitted ? (
            <motion.p
              className={styles.successMsg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for your interest in Marshall Haber, we will be in touch shortly.
            </motion.p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First & Last Name"
                className={styles.input}
                required
                id="contact-name"
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required
                id="contact-email"
              />
              <textarea
                placeholder="Message"
                className={styles.textarea}
                rows="5"
                required
                id="contact-message"
              />
              <div className={styles.checkboxRow}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="subscribe-checkbox"
                />
                <label htmlFor="subscribe-checkbox" className={styles.checkboxLabel}>
                  Send me occasional updates on Marshall Haber's events, insights, and services
                </label>
              </div>
              <button type="submit" className={styles.submitBtn} id="contact-submit">
                Submit
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
}
