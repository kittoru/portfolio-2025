import { About, Footer, Header, Hero, Projects } from "../../Widgets"
import { ArrowUp } from '../../Shared';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "motion/react";

import styles from './Home.module.scss';

export const Home = () => {
  const [isVisible, setIsVisible] = useState<number>(0);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsVisible(window.scrollY)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AnimatePresence>
          {isVisible > 200? <ArrowUp />: null }
        </AnimatePresence>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}