'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from '../components';

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary"></div>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <ToastContainer />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
