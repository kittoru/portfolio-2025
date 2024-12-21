import { useState } from 'react';
import { Burder, Logo } from '../../Shared';
import styles from './Header.module.scss';

export const Header = () => {
  const [status, getStatus] = useState<boolean>(false);
  
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
        </div>
      </div>
    </header>
  )
}