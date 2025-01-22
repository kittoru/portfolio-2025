import { useState } from 'react';
import { Burger, Logo, useScrollLock } from '../../Shared';
import styles from './Header.module.scss';
import { AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          <nav className={styles.menu}>
            <ul className={styles.list}>
              <li className={styles.item}><a href="#about">Обо мне</a></li>
              <li className={styles.item}><a href="#projects">Проекты</a></li>
              <li className={styles.item}><a href="#contacts">Контакты</a></li>
            </ul>
          </nav>
          <button className={`${styles.btn} ${isOpen? styles.active: ''}`}
          onClick={() => {setIsOpen(!isOpen)}}>
            <span></span>
            <span></span>
          </button>
          <AnimatePresence>
            {isOpen? <Burger key={1} close={setIsOpen}/>: <></>}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}