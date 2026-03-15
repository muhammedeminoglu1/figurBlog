import { useState, useEffect, useRef } from 'react';
import styles from './StatsBar.module.css';

/**
 * Animates a number from 0 to the target value.
 * @param {number} target - The final number to count up to
 * @param {boolean} active - Whether to start counting
 * @param {number} [duration=1500] - Animation duration in ms
 * @returns {number} current count value
 */
function useCountUp(target, active, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);

  return count;
}

const STATS = [
  { target: 180, suffix: '+', label: 'Combined Championships' },
  { target: 20, suffix: '+', label: 'Years of Legacy' },
  { target: 50, suffix: '+', label: 'Signature Moves' },
];

/**
 * StatsBar displays key WWE statistics with animated count-up effect.
 */
function StatsBar() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <section className={styles.statsBar} aria-label="Statistics" ref={ref}>
      <div className={styles.container}>
        {STATS.map(({ target, suffix, label }) => (
          <StatItem key={label} target={target} suffix={suffix} label={label} active={visible} />
        ))}
      </div>
    </section>
  );
}

/**
 * Individual stat item with count-up animation.
 * @param {{ target: number, suffix: string, label: string, active: boolean }} props
 */
function StatItem({ target, suffix, label, active }) {
  const count = useCountUp(target, active);
  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber} aria-label={`${target}${suffix} ${label}`}>
        {count}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default StatsBar;
