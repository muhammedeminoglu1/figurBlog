import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import styles from './WrestlerCard.module.css';

/**
 * WrestlerCard displays a single wrestler's profile card with animations.
 * @param {{ wrestler: import('../../data/wrestlers').Wrestler }} props
 */
function WrestlerCard({ wrestler }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const {
    name,
    nickname,
    initials,
    gradientFrom,
    gradientTo,
    championships,
    hometown,
    height,
    weight,
    signatureMoves,
    bio,
    active,
  } = wrestler;

  return (
    <article
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      aria-label={`${name} wrestler card`}
    >
      {/* Championship badge */}
      <div className={styles.champBadge} aria-label={`${championships}-time champion`}>
        <span className={styles.champCount}>{championships}x</span>
        <span>Champ</span>
      </div>

      {/* Active/Retired badge */}
      <div
        className={`${styles.statusBadge} ${active ? styles.active : styles.retired}`}
        aria-label={active ? 'Active superstar' : 'Retired superstar'}
      >
        {active ? 'Active' : 'Retired'}
      </div>

      {/* Gradient avatar */}
      <div
        className={styles.avatar}
        style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
        aria-hidden="true"
      >
        {initials}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.nickname}>"{nickname}"</p>

        {/* Stats row */}
        <div className={styles.stats} aria-label="Wrestler statistics">
          <span className={styles.stat}>
            <span className={styles.statIcon} aria-hidden="true">📍</span>
            {hometown}
          </span>
          <span className={styles.stat}>
            <span className={styles.statIcon} aria-hidden="true">📏</span>
            {height}
          </span>
          <span className={styles.stat}>
            <span className={styles.statIcon} aria-hidden="true">⚖️</span>
            {weight}
          </span>
        </div>

        {/* Signature moves */}
        <div className={styles.moves} aria-label="Signature moves">
          {signatureMoves.map((move) => (
            <span key={move} className={styles.movePill}>
              {move}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className={styles.bio}>{bio}</p>

        <button className={styles.viewBtn} aria-label={`View ${name}'s full profile`}>
          View Profile
        </button>
      </div>
    </article>
  );
}

export default WrestlerCard;
