import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import SocialProof from './components/SocialProof';
import PageTransition from './components/PageTransition';
import { ThemeProvider } from './context/ThemeContext';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { AnimatePresence } from 'framer-motion';
import './styles/index.css';


// Create a wrapper component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <WhatsAppButton />
          <SocialProof />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

