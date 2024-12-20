import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer} id='contacts'>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="https://github.com/kittoru" target='blank' className={styles.link}>github</a>
            </li>
            <li className={styles.item}>
              <a href="mailto:gnetnevaee@gmail.com" className={styles.link}>gnetnevaee@gmail.com</a>
            </li>
            <li className={styles.item}>
              <a href="https://t.me/kittoruFromHell" target='blank' className={styles.link}>telegram</a>
            </li>
          </ul>
          <span className={styles.text}>Portfolio 2025</span>
        </div>
      </div>
    </footer>
  )
}