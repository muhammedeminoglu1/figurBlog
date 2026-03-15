import { useState } from 'react';
import styles from './Newsletter.module.css';

/**
 * Newsletter section with email subscription form and success state.
 */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className={styles.section} aria-label="Newsletter subscription">
      <div className={styles.container}>
        <span className={styles.label}>Stay Updated</span>
        <h2 className={styles.title}>Join the WWE Community</h2>
        <p className={styles.subtitle}>
          Get the latest news, exclusive interviews, match previews, and behind-the-scenes
          content delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className={styles.success} role="status" aria-live="polite">
            <span className={styles.successIcon} aria-hidden="true">🏆</span>
            <div className={styles.successTitle}>You're In the Ring!</div>
            <p className={styles.successText}>
              Thanks for subscribing. Welcome to the WWE Legends community!
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              className={styles.input}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              autoComplete="email"
            />
            <button type="submit" className={styles.submitBtn}>
              Subscribe
            </button>
          </form>
        )}

        <p className={styles.privacyNote}>
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}

export default Newsletter;
