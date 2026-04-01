import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Premium Branding',
    intro: 'Our bestseller for scaleups: a premium branding approach that connects strategy and creativity to turn complex value into a clear and credible story for enterprise buyers.'
  },
  {
    title: 'Sprint',
    intro: 'Sprints are 1-month projects designed to create a brand or website quickly and efficiently for early-stage startups.'
  },
  {
    title: 'Subscription',
    intro: 'Design subscriptions are our way of collaborating long-term with clients, acting as their extended team to speed up growth and ensure consistency.'
  },
  {
    title: 'Venture',
    intro: 'Venture relationships involve high-commitment projects where we invest our expertise and resources in exchange for shares.'
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.pageWrapper}
    >
      <div className={styles.container}>
        {/* Top Hero Heading */}
        <section className={styles.heroSection}>
          <motion.h1
            className={styles.heroHeading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            We equip, empower, and inspire tomorrow's leaders through premium branding
          </motion.h1>
        </section>

        {/* Content Divider */}
        <div className={styles.divider} />

        {/* Info & Grid Section */}
        <section className={styles.contentSection}>
          {/* Left Column */}
          <motion.div
            className={styles.introBlock}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className={styles.introLabel}>What?</span>
            <p className={styles.introText}>
              Our work focuses on B2B tech scaleups at Series A & B stage. On top of that we work with one early stage startup at a time. Honoring both our passion and how we started.
            </p>
          </motion.div>

          {/* Right Column (2x2 Grid) */}
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className={styles.serviceItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
              >
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceIntro}>{service.intro}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Financial Expertise Banner */}
      <section className={styles.bannerSection}>
        <motion.div
          className={styles.bannerCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg className={styles.bannerIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <h2 className={styles.bannerHeading}>Financial expertise unlocked by technology</h2>
          <p className={styles.bannerText}>
            Our technology improves decision making by analyzing complex data profiles and hidden patterns. A sophisticated data device here to empower you with aspects previously unimagined.
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
}