import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
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
import Terms from './components/Terms';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Helmet>
                  <title>PlansLoan - Quick & Easy Online Loans</title>
                  <meta name="description" content="Get quick access to online payday loans with PlansLoan. Easy application process, fast approval, and secure transactions." />
                </Helmet>
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
          <Route path="/termsOfUse" element={
            <>
              <Helmet>
                <title>Terms of Use - PlansLoan</title>
                <meta name="description" content="Read our terms of use and conditions for using PlansLoan's online loan services." />
              </Helmet>
              <Navbar />
              <Terms />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <>
              <Helmet>
                <title>404 - Page Not Found | PlansLoan</title>
                <meta name="description" content="The page you're looking for cannot be found." />
              </Helmet>
              <NotFound />
            </>
          } />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;