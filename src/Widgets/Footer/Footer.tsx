import styles from './Footer.module.scss';
import { motion } from 'motion/react';

export const Footer = () => {
  const val = {
    whileHover: { fontWeight: 500,textShadow: '5px 5px 3px rgb(164, 162, 180, 0.5)'},
    transition: { duration: 0.6 }
  };
  return (
    <footer className={styles.footer} id='contacts'>
      <div className="container">
        <div className={styles.inner}>
          <motion.ul initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0, transition: {duration: 1, delay: 0.5}}} viewport={{once: true}} className={styles.list}>
            <motion.li variants={val} whileHover={val.whileHover} transition={val.transition} className={styles.item}>
              <a href="https://github.com/kittoru" target='blank' className={styles.link}>github</a>
            </motion.li>
            <motion.li variants={val} whileHover={val.whileHover} transition={val.transition} className={styles.item}>
              <a href="mailto:gnetnevaee@gmail.com" className={styles.link}>gnetnevaee@gmail.com</a>
            </motion.li>
            <motion.li variants={val} whileHover={val.whileHover} transition={val.transition} className={styles.item}>
              <a href="https://t.me/kittoruFromHell" target='blank' className={styles.link}>telegram</a>
            </motion.li>
          </motion.ul>
          <motion.span initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1, delay: 0.5}}} viewport={{once: true}} className={styles.text}>Portfolio 2025</motion.span>
        </div>
      </div>
    </footer>
  )
}