import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StatsBar from './components/StatsBar/StatsBar';
import WrestlerGrid from './components/WrestlerGrid/WrestlerGrid';
import FeaturedMatch from './components/FeaturedMatch/FeaturedMatch';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { WRESTLERS } from './data/wrestlers';
import styles from './App.module.css';

/**
 * Root application component. Composes all page sections.
 */
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WrestlerGrid wrestlers={WRESTLERS} />
        <FeaturedMatch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
