import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, User, Mail, Home } from 'lucide-react';
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open: showTooltip,
    onOpenChange: setShowTooltip,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    Swal.fire({
      title: 'Kontak Informasi',
      html: `
        <div class="text-left">
          <p><strong>Nama:</strong> Rahmat Yudi Burhanudin</p>
          <p><strong>NIM:</strong> 221011400300</p>
          <p><strong>Universitas:</strong> Universitas Pamulang</p>
          <p><strong>Email:</strong> dewarahmat12334@gmail.com</p>
        </div>
      `,
      icon: 'info',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Tutup'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              RPL Blog
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`flex items-center space-x-1 transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Beranda</span>
            </a>
            <a 
              href="#experience" 
              className={`flex items-center space-x-1 transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Pengalaman</span>
            </a>
            <a 
              href="#profile" 
              className={`flex items-center space-x-1 transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <User className="h-4 w-4" />
              <span>Profil</span>
            </a>
            <button
              ref={refs.setReference}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={handleContactClick}
              className={`flex items-center space-x-1 transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Kontak</span>
            </button>
            {showTooltip && (
              <div
                ref={refs.setFloating}
                style={floatingStyles}
                className="bg-gray-900 text-white text-sm px-2 py-1 rounded-md shadow-lg z-50"
              >
                Klik untuk info kontak
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Beranda
              </a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Pengalaman
              </a>
              <a href="#profile" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Profil
              </a>
              <button
                onClick={handleContactClick}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;