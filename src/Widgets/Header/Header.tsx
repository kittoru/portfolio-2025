import { useState } from 'react';
import { Burger, Logo, useScrollLock } from '../../Shared';
import styles from './Header.module.scss';
import { animated, useTransition } from '@react-spring/web';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);

  const transitions = useTransition(isOpen, {
    from: {transform: 'translateX(100%)'},
    enter: {transform: 'translateX(0%)'},
    leave: {transform: 'translateX(100%)'},
    config: {
      tension: 280, 
      friction: 60,
    },
  });

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
          {transitions((style, isOpen) => (
            <>
            {isOpen? <animated.div style={style} className={styles.mobile}>
              <Burger close={setIsOpen}/>
            </animated.div>: <></>}
          </>
          ))}
        </div>
      </div>
    </header>
  )
}