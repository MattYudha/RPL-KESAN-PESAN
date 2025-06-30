import React, { useState } from 'react';
import { Clock, Calendar, BookOpen, User, Award, TrendingUp } from 'lucide-react';
import { DateTime } from 'luxon';
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react';

const Aside = () => {
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const currentDate = DateTime.now().setLocale('id');

  const { refs, floatingStyles } = useFloating({
    open: showQuickInfo,
    onOpenChange: setShowQuickInfo,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const quickStats = [
    { icon: BookOpen, label: 'Materi Dipelajari', value: '5 Topik' },
    { icon: Award, label: 'Tugas Selesai', value: '3/4' },
    { icon: TrendingUp, label: 'Progress', value: '85%' },
    { icon: Calendar, label: 'Semester', value: '6' },
  ];

  return (
    <aside className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
      
      {/* Quick Info Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Info Cepat</h3>
          <button
            ref={refs.setReference}
            onMouseEnter={() => setShowQuickInfo(true)}
            onMouseLeave={() => setShowQuickInfo(false)}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Clock className="h-5 w-5" />
          </button>
          {showQuickInfo && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className="bg-gray-900 text-white text-sm px-2 py-1 rounded-md shadow-lg z-50"
            >
              {currentDate.toLocaleString(DateTime.DATETIME_MED)}
            </div>
          )}
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      {/* Date & Time */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6" data-aos="fade-right" data-aos-delay="200">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {currentDate.toFormat('dd')}
          </div>
          <div className="text-sm text-gray-600">
            {currentDate.toFormat('MMMM yyyy')}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {currentDate.toFormat('EEEE')}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-4 mb-6">
        {quickStats.map((stat, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            data-aos="fade-right" 
            data-aos-delay={300 + index * 100}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <stat.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600">{stat.label}</div>
              <div className="font-semibold text-gray-900">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="space-y-2 mb-6" data-aos="fade-right" data-aos-delay="700">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Navigasi Cepat</h4>
        {[
          { href: '#home', label: 'Beranda' },
          { href: '#experience', label: 'Pengalaman' },
          { href: '#profile', label: 'Profil & Statistik' },
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Course Info */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg" data-aos="fade-right" data-aos-delay="800">
        <div className="flex items-start space-x-3">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg flex-shrink-0">
            <User className="h-4 w-4 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-1">Dosen Pengampu</h4>
            <p className="text-xs text-gray-600 mb-2">Shandi Noris, S.Kom., M.Kom.</p>
            <div className="text-xs text-gray-500">
              <div>Rekayasa Perangkat Lunak</div>
              <div>Semester 6 - 2025</div>
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Aside;