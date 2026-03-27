import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  { title: 'Brand Strategy', desc: 'We build defensible foundations that guide every creative decision.' },
  { title: 'Visual Identity', desc: 'Crafting premium, timeless visual systems that stand out.' },
  { title: 'Website', desc: 'Digital experiences designed for immersion, conversion, and impact.' },
  { title: 'Product', desc: 'Physical and digital product design that connects with users.' },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.hero}>
        <motion.h1 
          className={styles.heroHeading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Services
        </motion.h1>
      </section>

      <section className={styles.servicesList}>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={styles.serviceItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
