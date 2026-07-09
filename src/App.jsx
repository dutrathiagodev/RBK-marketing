import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BrandIntro from './components/BrandIntro.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Trainings from './pages/Trainings.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const pageTitles = {
  '/': 'Home',
  '/servicos': 'Serviços',
  '/portfolio': 'Portfólio',
  '/treinamentos': 'Treinamentos',
  '/sobre': 'Sobre',
  '/contato': 'Contato',
};

function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const currentPage = pageTitles[normalizedPath] ?? 'Home';

    document.title = `RBK Marketing Digital - ${currentPage}`;
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <>
      {showIntro ? <BrandIntro onComplete={handleIntroComplete} /> : null}
      <DocumentTitle />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/treinamentos" element={<Trainings />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
