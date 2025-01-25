import styles from './Logo.module.scss';
import { motion } from 'motion/react';

export const Logo = () => {
  return <div className={styles.logo}>
    <motion.a whileHover={{
                  fontWeight: 700,
                  textShadow: '5px 5px 3px rgb(164, 162, 180, 0.5)'}} transition={{ duration: 0.6 }} href="#" className={styles.link}>GnetnevaEE</motion.a>
  </div>
}