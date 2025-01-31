import { useState } from 'react';
import { Burger, Logo, useScrollLock } from '../../Shared';
import styles from './Header.module.scss';
import { AnimatePresence, motion } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);
  const val = {
    whileHover: { 
                  fontWeight: 700,
                  textShadow: '5px 5px 3px rgb(164, 162, 180, 0.5)'},
    transition: { duration: 0.6 }
  };

  return (
    <header className={styles.header} >
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <nav className={styles.menu}>
            <motion.ul initial={{opacity: 0, x: '100%'}} animate={{opacity: 1, x: '0%'}} transition={{duration: 1}} className={styles.list}>
              <motion.li variants={val}  whileHover={val.whileHover} transition={val.transition} className={styles.item}><a href="#about">Обо мне</a></motion.li>
              <motion.li variants={val}  whileHover={val.whileHover} transition={val.transition} className={styles.item}><a href="#projects">Проекты</a></motion.li>
              <motion.li variants={val} whileHover={val.whileHover} transition={val.transition} className={styles.item}><a href="#contacts">Контакты</a></motion.li>
            </motion.ul>
          </nav>
          <motion.button initial={{opacity: 0, x: '100%'}} animate={{opacity: 1, x: '0%'}} transition={{duration: 1}} className={`${styles.btn} ${isOpen? styles.active: ''}`}
          onClick={() => {setIsOpen(!isOpen)}}>
            <span></span>
            <span></span>
          </motion.button>
          <AnimatePresence>
            {isOpen? <Burger key={1} close={setIsOpen}/>: <></>}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}