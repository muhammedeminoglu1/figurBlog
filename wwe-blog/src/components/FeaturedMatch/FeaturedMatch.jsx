import styles from './FeaturedMatch.module.css';

const MATCH = {
  event: 'WrestleMania XL',
  date: 'April 6, 2024',
  location: 'Lincoln Financial Field, Philadelphia, PA',
  matchType: 'Undisputed WWE Championship',
  fighter1: {
    name: 'Cody Rhodes',
    initials: 'CR',
    gradientFrom: '#1a237e',
    gradientTo: '#4fc3f7',
    role: 'The American Nightmare',
    isWinner: true,
  },
  fighter2: {
    name: 'Roman Reigns',
    initials: 'RR',
    gradientFrom: '#1a237e',
    gradientTo: '#0d1117',
    role: 'The Tribal Chief',
    isWinner: false,
  },
  result: 'Cody Rhodes wins – Pinfall',
  stars: 5,
  description:
    "In a historic conclusion to a year-long story, Cody Rhodes finally 'finished his story' by defeating Roman Reigns for the Undisputed WWE Championship. The emotional victory in front of 72,000+ fans marked the end of Reigns' record-breaking 1,316-day title reign and fulfilled Dusty Rhodes' dream.",
};

/**
 * FeaturedMatch displays the highlighted WWE event card.
 */
function FeaturedMatch() {
  const { event, date, location, matchType, fighter1, fighter2, result, stars, description } =
    MATCH;

  return (
    <section id="matches" className={styles.section} aria-label="Featured match section">
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Match of the Year</div>
        <div className={styles.card}>
          <div className={styles.featuredBadge} aria-label="Featured match">
            Featured
          </div>

          <div className={styles.content}>
            {/* Event info */}
            <div className={styles.eventInfo}>
              <h2 className={styles.eventName}>{event}</h2>
              <div className={styles.eventMeta}>
                <span className={styles.metaItem}>
                  <span aria-hidden="true">📅</span> {date}
                </span>
                <span className={styles.metaItem}>
                  <span aria-hidden="true">📍</span> {location}
                </span>
              </div>
              <span className={styles.matchType}>{matchType}</span>
            </div>

            {/* Fighters */}
            <div className={styles.fighters}>
              <Fighter fighter={fighter1} />
              <div className={styles.vs} aria-label="versus">VS</div>
              <Fighter fighter={fighter2} />
            </div>

            {/* Result */}
            <div className={styles.result}>
              <div className={styles.resultLabel}>Official Result</div>
              <div className={styles.resultText}>{result}</div>
            </div>

            {/* Star rating */}
            <div className={styles.rating} aria-label={`${stars} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`${styles.star} ${i >= stars ? styles.starEmpty : ''}`}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Fighter avatar and info inside the match card.
 * @param {{ fighter: object }} props
 */
function Fighter({ fighter }) {
  return (
    <div className={`${styles.fighter} ${fighter.isWinner ? styles.fighterWinner : ''}`}>
      <div
        className={styles.fighterAvatar}
        style={{
          background: `linear-gradient(135deg, ${fighter.gradientFrom}, ${fighter.gradientTo})`,
        }}
        aria-hidden="true"
      >
        {fighter.initials}
      </div>
      <div className={styles.fighterName}>{fighter.name}</div>
      <div className={styles.fighterRole}>{fighter.role}</div>
      {fighter.isWinner && <span aria-label="Winner">🏆 Winner</span>}
    </div>
  );
}

export default FeaturedMatch;
