import styles from './Hero.module.scss';


export const Hero = () => {
  
  return <section className={styles.hero}>
    <div className="container">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.text}>
          Здравствуйте, <br/>
          я Елизавета Гнетнёва
        </p>
        <p className={styles.subtext}>Junior frontend developer</p>
        </div>
        <div className={styles.right}>
          <div className={`${styles.back} ${styles.circle}`}>
            <div className={`${styles.center} ${styles.circle}`}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
