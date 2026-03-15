import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

/**
 * Navbar component with scroll-aware blur, active section tracking, and mobile hamburger menu.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'wrestlers', 'matches', 'newsletter'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Wrestlers', id: 'wrestlers' },
    { label: 'Matches', id: 'matches' },
    { label: 'Newsletter', id: 'newsletter' },
  ];

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => handleNavClick('home')}>
          <span>WWE</span> Legends
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`} role="menubar">
          {navItems.map(({ label, id }) => (
            <li key={id} role="none">
              <button
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                onClick={() => handleNavClick(id)}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
