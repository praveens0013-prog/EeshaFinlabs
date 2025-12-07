import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import LoanProducts from './components/LoanProducts';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <LoanProducts />
        <Partners />
        <WhyChooseUs />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
