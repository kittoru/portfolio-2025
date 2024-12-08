import styles from './Hero.module.scss';
import Typewriter from 'typewriter-effect';


export const Hero = () => {
  const text = [
    "Здравствуйте, я Елизавета Гнетнёва",
    "Я начинающий frontend-разработчик",
    "Люблю наводить красоту и создавать крутые вещи"
  ];

  return <section className={styles.hero}>
    <div className="container">
      <div className={styles.inner}>
        <span className={styles.item}>
          {'>'} 
          <Typewriter options={
            {
              cursor: '',
              strings: text,
              autoStart: true,
              loop: true,
            }
          }/>
        </span>
      </div>
    </div>
  </section>
}