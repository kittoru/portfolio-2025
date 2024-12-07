import styles from './Home.module.scss';
import { Header } from "../../Widgets"


export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          main
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          footer
        </div>
      </footer>
    </>
  )
}