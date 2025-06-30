import React from 'react';
import { BookOpen, Mail, MapPin, Calendar, Heart, ExternalLink } from 'lucide-react';
import { DateTime } from 'luxon';
import Swal from 'sweetalert2';

const Footer = () => {
  const currentYear = DateTime.now().year;

  const handleEmailClick = () => {
    Swal.fire({
      title: 'Hubungi Saya',
      html: `
        <div class="text-left space-y-2">
          <p><strong>Email:</strong> dewarahmat12334@gmail.com</p>
          <p><strong>LinkedIn:</strong> https://www.linkedin.com/in/rahmat-yudi-burhanudin-1a884227b/</p>
          <p><strong>GitHub:</strong> https://github.com/MattYudha</p>
        </div>
      `,
      icon: 'info',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Tutup',
      showCancelButton: true,
      cancelButtonText: 'Kirim Email',
      cancelButtonColor: '#10b981'
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = 'mailto:dewarahmat12334@gmail.com?subject=Halo%20dari%20Blog%20RPL';
      }
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">RPL Experience Blog</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Blog pengalaman dan pembelajaran selama mengikuti mata kuliah Rekayasa Perangkat Lunak 
              di Universitas Pamulang. Berbagi insight dan refleksi perjalanan akademik.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Kontak</span>
              </button>
              <a 
                href="#home"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Kembali ke Atas</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Beranda' },
                { href: '#experience', label: 'Pengalaman' },
                { href: '#profile', label: 'Profil' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold text-lg mb-4">Informasi</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Universitas Pamulang</div>
                  <div className="text-sm">Tangerang Selatan</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Calendar className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Semester 6</div>
                  <div className="text-sm">Tahun Akademik 2025</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-gray-300 text-sm">
              © {currentYear} Rahmat Yudi Burhanudin - NIM 221011400300. 
              <span className="hidden sm:inline"> Blog Pengalaman RPL.</span>
            </div>

            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Dibuat dengan</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>untuk pembelajaran</span>
            </div>

            <div className="text-gray-400 text-xs">
              Terakhir diperbarui: {DateTime.now().setLocale('id').toLocaleString(DateTime.DATE_SHORT)}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;