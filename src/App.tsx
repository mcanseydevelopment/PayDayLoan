import './App.css'
import FAQSection from './components/FAQAccordion'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import ImageOnLeft from './components/ImageOnLeft'
import ImageOnRight from './components/ImageOnRight'
import ImportantDisclosures from './components/ImportantDisclosures'
import Navbar from './components/Navbar'
import ProductFeatures from './components/ProductFeatures'
import TestimonialCarousel from './components/testimonials-slider'
function App() {
  return (
    <>
        <Navbar />
        <HeroSection />
        {/* <HowItWorks />
        <ImageOnLeft />
        <ProductFeatures />
        <ImageOnRight />
        <FAQSection />
        <TestimonialCarousel />
        <ImportantDisclosures />
        <Footer /> */}
    </>
  )
}

export default App