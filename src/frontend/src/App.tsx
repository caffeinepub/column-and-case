import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import CollectionSection from './components/CollectionSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activeSection={activeSection} />
      <main>
        <HeroSection />
        <CollectionSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
