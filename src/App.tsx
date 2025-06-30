import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceContent from './components/ExperienceContent';
import ProfileStats from './components/ProfileStats';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ExperienceContent />
              <ProfileStats />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Aside />
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;