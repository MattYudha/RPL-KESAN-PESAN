import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { DateTime } from 'luxon';

const Hero = () => {
  const currentDate = DateTime.now().setLocale('id').toLocaleString(DateTime.DATE_FULL);

  useEffect(() => {
    // AOS will be initialized in the main App component
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
              <GraduationCap className="h-16 w-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pengalaman Perkuliahan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Rekayasa Perangkat Lunak
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Refleksi dan pembelajaran selama mengikuti mata kuliah RPL di Universitas Pamulang
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{currentDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Universitas Pamulang</span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <a 
              href="#experience" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;