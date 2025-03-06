import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
      <Chatbot /> {/* Add the Chatbot component here */}
    </div>
  );
}

export default App;
