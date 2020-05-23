import React from 'react';
import Header from './components/header/'
import Hero from './components/hero/'
import About from './components/About'
import CloserLook from './components/CloserLook'
import Mission from './components/Mission'
import Story from './components/Story';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <About />
     <CloserLook />
     <Mission />
     <Story />
     <Footer />
    </div>
  );
}

export default App;
