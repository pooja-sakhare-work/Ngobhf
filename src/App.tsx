import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Impact } from './components/Impact';
import { Support } from './components/Support';
import { Contact } from './components/Contact';
import { Transparency } from './components/Transparency';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Support />
        <Contact />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}
