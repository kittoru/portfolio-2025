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
        <div className={styles.circle}>
          <svg width="497" height="479" viewBox="0 0 497 479" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_858_560)">
              <path fill="url(#paint0_radial_858_560)">
                <animate attributeName='d' dur='5s' repeatCount='indefinite' values='
                  M467.646 244.175C467.646 360.351 536.982 475.408 249.849 454.53C129.562 454.53 32.051 360.351 32.051 244.175C32.051 127.999 -49.1135 -21.3292 249.849 33.8201C331.421 209.116 467.646 127.999 467.646 244.175Z;
                  M464.877 256.934C399.731 338.259 367.366 467.289 247.079 467.289C126.793 467.289 143.231 328.934 29.2819 256.934C-7.7179 198.434 102.377 -62.5665 221.731 49.759C341.086 162.084 464.877 140.758 464.877 256.934Z;
                  M441 224.96C381.409 299.373 272.747 438 162.718 438C52.6892 438 119.845 263.306 42.5505 224.96C-34.7437 186.613 124.161 -33.9334 218.589 35.3888C313.017 104.711 441 118.656 441 224.96Z;
                  M444.884 212.772C444.884 407.818 266.102 441.313 168.885 409.819C71.6679 378.325 14.074 292.817 22.8848 212.772C31.6956 132.727 125.884 7.81495 232.384 23.3165C338.885 38.8181 444.884 106.469 444.884 212.772Z;
                  M467.646 244.175C467.646 360.351 536.982 475.408 249.849 454.53C129.562 454.53 32.051 360.351 32.051 244.175C32.051 127.999 -49.1135 -21.3292 249.849 33.8201C331.421 209.116 467.646 127.999 467.646 244.175Z;

                ' />
              </path>
            </g>
            <defs>
              <filter id="filter0_f_858_560" x="0.1" y="0.1" width="496.8" height="478.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10.95" result="effect1_foregroundBlur_858_560" />
              </filter>
              <radialGradient id="paint0_radial_858_560" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(186.884 188.922) rotate(12.5338) scale(462.163 446.541)">
                <stop offset="0.145" stopColor="#EADDCD" />
                <stop offset="0.475" stopColor="#AAC0CB" />
                <stop offset="0.61" stopColor="#AAC0CB" />
                <stop offset="0.815" stopColor="#106697" />
                <stop offset="0.915" stopColor="#A8BEC9" />
                <stop offset="1" stopColor="#A8BEC9" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </section>
}
