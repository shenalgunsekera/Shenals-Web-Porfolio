import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import MoreWork from './components/MoreWork.jsx';
import Skills from './components/Skills.jsx';
import Journey from './components/Journey.jsx';
import Companies from './components/Companies.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <main className="bg-ink text-chalk font-body antialiased">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <MoreWork />
      <Skills />
      <Journey />
      <Companies />
      <Contact />
      <Footer />
    </main>
  );
}
