import { useState } from 'react';
import WrestlerCard from '../WrestlerCard/WrestlerCard';
import styles from './WrestlerGrid.module.css';

const ERAS = ['All', 'Attitude Era', 'PG Era', 'Modern Era'];

/**
 * WrestlerGrid renders a filterable grid of WrestlerCard components.
 * @param {{ wrestlers: import('../../data/wrestlers').Wrestler[] }} props
 */
function WrestlerGrid({ wrestlers }) {
  const [activeEra, setActiveEra] = useState('All');

  const filtered =
    activeEra === 'All' ? wrestlers : wrestlers.filter((w) => w.era === activeEra);

  return (
    <section id="wrestlers" className={styles.section} aria-label="Wrestlers section">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.sectionLabel}>Hall of Champions</span>
          <h2 className={styles.sectionTitle}>WWE Superstars</h2>
          <p className={styles.sectionDesc}>
            Discover the legends who shaped wrestling history across every era.
          </p>
        </header>

        {/* Era filters */}
        <div className={styles.filters} role="group" aria-label="Filter by era">
          {ERAS.map((era) => (
            <button
              key={era}
              className={`${styles.filterBtn} ${activeEra === era ? styles.active : ''}`}
              onClick={() => setActiveEra(era)}
              aria-pressed={activeEra === era}
            >
              {era}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.length > 0 ? (
            filtered.map((wrestler) => (
              <WrestlerCard key={wrestler.id} wrestler={wrestler} />
            ))
          ) : (
            <p className={styles.empty}>No wrestlers found for this era.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default WrestlerGrid;
