

import './App.css';
import Navbar from './Navbar';

import Hero from './HeroNuevo';
import './HeroNuevo';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Register from './Register';
import Collaborate from './Collaborate';
import ValueProposition from './ValueProposition';
import ManosALaObra from './ManosALaObra';
import Footer from './Footer';
import AboutCreator from './AboutCreator';

function App() {
  return (
    <div className="App">

      <Navbar />
  <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
  <ValueProposition />
  <ManosALaObra />
  <Collaborate />
  <Register />
  <AboutCreator />
  <Footer />
    </div>
  );
}

export default App;
