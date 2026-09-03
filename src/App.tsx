import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Undetectability } from './components/Undetectability';
import { Benchmarks } from './components/Benchmarks';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // 10X Smooth Sliding Entrance Observer
    const slidingElements = document.querySelectorAll(
      '.slide-up-init, .slide-left-init, .slide-right-init, .slide-scale-init, .reveal-init'
    );

    if ('IntersectionObserver' in window) {
      const slideObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-active');
              entry.target.classList.add('reveal-visible');
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -30px 0px',
        }
      );

      slidingElements.forEach((el) => slideObserver.observe(el));
      return () => slideObserver.disconnect();
    } else {
      slidingElements.forEach((el) => {
        el.classList.add('slide-active');
        el.classList.add('reveal-visible');
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#19191D] font-sans antialiased overflow-x-hidden selection:bg-[#497EE9]/25 selection:text-[#19191D]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Undetectability />
        <Benchmarks />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
