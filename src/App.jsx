import Cursor from './components/Cursor.jsx';
import Marquee from './components/Marquee.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Manifesto from './components/Manifesto.jsx';
import Portfolio from './components/Portfolio.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Cursor />
      <Marquee />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
