import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FAQSection from './components/FAQAccordion';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import ImageOnLeft from './components/ImageOnLeft';
import ImageOnRight from './components/ImageOnRight';
import ImportantDisclosures from './components/ImportantDisclosures';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ProductFeatures from './components/ProductFeatures';
import TestimonialCarousel from './components/testimonials-slider';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <HeroSection />
              <HowItWorks />
              <ImageOnLeft />
              <ProductFeatures />
              <ImageOnRight />
              <FAQSection />
              <TestimonialCarousel />
              <ImportantDisclosures />
              <Footer />
            </>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;