import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.logo}><a href="#">Logo</a></div>
          <nav className={styles.menu}>
            <ul className={styles.list}>
              <li className={styles.item}><a href="#">About</a></li>
              <li className={styles.item}><a href="#">Skills</a></li>
              <li className={styles.item}><a href="#">Projects</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}