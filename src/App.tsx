import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FAQSection from './components/FAQAccordion';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import HowItWorksPage from './components/HowItWorksPage';
import ImageOnLeft from './components/ImageOnLeft';
import ImageOnRight from './components/ImageOnRight';
import ImportantDisclosures from './components/ImportantDisclosures';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import ProductFeatures from './components/ProductFeatures';
import TestimonialCarousel from './components/testimonials-slider';
import Terms from './components/Terms';
import About from './components/About';
import Disclaimer from './components/Disclaimer';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import PersonalLoansPage from './components/PersonalLoansPage';
import ShortTermLoansPage from './components/ShortTermLoansPage';
import EmergencyLoansPage from './components/EmergencyLoansPage';
import FundingOptionsPage from './components/FundingOptionsPage';
import ScrollToTop from './components/ScrollToTop';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Helmet>
                  <title>PlansLoan - Loan Connection Service</title>
                  <meta name="description" content="PlansLoan connects you with lenders offering personal loan options. Request to see if you qualify for a loan from our network of lending partners." />
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
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path="/howItWorks" element={
            <>
              <Helmet>
                <title>How It Works - PlansLoan</title>
                <meta name="description" content="Learn how PlansLoan connects you with lenders for quick and easy personal loans." />
              </Helmet>
              <Navbar />
              <HowItWorksPage />
              <Footer />
            </>
          } />
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
          <Route path="/disclaimer" element={
            <>
              <Helmet>
                <title>Disclaimer - PlansLoan</title>
                <meta name="description" content="Important disclosures and disclaimers about PlansLoan's services." />
              </Helmet>
              <Navbar />
              <Disclaimer />
              <Footer />
            </>
          } />
          <Route path="/privacyPolicy" element={
            <>
              <Helmet>
                <title>Privacy Policy - PlansLoan</title>
                <meta name="description" content="Learn about PlansLoan's privacy practices and your rights regarding your personal information." />
              </Helmet>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Contact Us - PlansLoan</title>
                <meta name="description" content="Get in touch with PlansLoan. We're here to help with any questions about our loan connection service." />
              </Helmet>
              <Navbar />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/legal-disclosures" element={
            <>
              <Helmet>
                <title>Legal Disclosures - PlansLoan</title>
                <meta name="description" content="Important legal disclosures from PlansLoan regarding our loan connection service." />
              </Helmet>
              <Navbar />
              <ImportantDisclosures />
              <Footer />
            </>
          } />
          <Route path="/personal-loans" element={
            <>
              <Helmet>
                <title>Personal Loans - PlansLoan</title>
                <meta name="description" content="Explore personal loan options through PlansLoan's network of lending partners." />
              </Helmet>
              <Navbar />
              <PersonalLoansPage />
              <Footer />
            </>
          } />
          <Route path="/short-term-loans" element={
            <>
              <Helmet>
                <title>Short Term Loans - PlansLoan</title>
                <meta name="description" content="Find short-term loan solutions for your immediate financial needs through PlansLoan." />
              </Helmet>
              <Navbar />
              <ShortTermLoansPage />
              <Footer />
            </>
          } />
          <Route path="/emergency-loans" element={
            <>
              <Helmet>
                <title>Emergency Loans - PlansLoan</title>
                <meta name="description" content="Get connected with emergency loan providers quickly through PlansLoan's service." />
              </Helmet>
              <Navbar />
              <EmergencyLoansPage />
              <Footer />
            </>
          } />
          <Route path="/funding-options" element={
            <>
              <Helmet>
                <title>Funding Options - PlansLoan</title>
                <meta name="description" content="Explore various funding options available through PlansLoan's lending network." />
              </Helmet>
              <Navbar />
              <FundingOptionsPage />
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