import styles from './Hero.module.css';

/**
 * Hero section with animated title, subtitle, and CTA buttons.
 * Features pulsing radial gradient background animation.
 */
function Hero() {
  const handleExplore = () => {
    const el = document.getElementById('wrestlers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.bgGradient} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>The Ultimate Wrestling Experience</div>

        <div className={styles.madeBy}>MADE BY ARDA BAYHAN</div>

        <h1 className={styles.title}>
          WWE
          <span className={styles.titleHighlight}>Legends</span>
        </h1>

        <p className={styles.subtitle}>
          Relive the greatest moments, explore the careers of iconic superstars, and celebrate
          the champions who defined professional wrestling history.
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={handleExplore}>
            Explore Wrestlers
          </button>
          <a
            className={styles.btnOutline}
            href="https://www.wwe.com/shows/raw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Highlights
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
