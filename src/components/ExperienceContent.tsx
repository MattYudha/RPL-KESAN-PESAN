import React from 'react';
import { User, BookOpen, Award, Heart } from 'lucide-react';

const ExperienceContent = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pengalaman dan Kesan Perkuliahan RPL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Greeting Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full flex-shrink-0">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Salam Pembuka</h3>
              <p className="text-gray-600 leading-relaxed">
                <em>Assalamu'alaikum Warahmatullahi Wabarakatuh,</em>
              </p>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Perkenalkan, saya <strong>Rahmat Yudi Burhanudin</strong> dengan NIM <strong>221011400300</strong>, 
                mahasiswa Universitas Pamulang. Dengan penuh hormat, saya ingin mengucapkan terima kasih yang 
                sebesar-besarnya kepada <strong>Bapak Shandi Noris, S.Kom., M.Kom.</strong>, selaku dosen pengampu 
                mata kuliah Rekayasa Perangkat Lunak (RPL) pada semester 6 ini.
              </p>
            </div>
          </div>
        </div>

        {/* Main Experience Content */}
        <div className="space-y-8">
          
          {/* Learning Experience */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full flex-shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pengalaman Pembelajaran</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selama mengikuti perkuliahan RPL, saya mendapatkan pengalaman yang sangat berkesan sekaligus bermanfaat. 
                  Salah satu hal yang paling saya apresiasi adalah metode pengajaran yang diterapkan oleh Bapak Dosen yang 
                  sangat komunikatif, terstruktur, dan mudah dipahami. Materi disampaikan secara sistematis, dimulai dari 
                  konsep dasar hingga ke penerapan yang lebih kompleks, sehingga sangat membantu pemahaman kami, termasuk 
                  bagi mahasiswa yang belum memiliki pengalaman langsung di bidang pengembangan perangkat lunak.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Selain itu, dosen juga memberikan berbagai studi kasus nyata yang diambil dari praktik industri, 
                  termasuk contoh proses pengembangan perangkat lunak di perusahaan berskala besar. Pendekatan ini 
                  membuat teori yang kami pelajari lebih aplikatif dan relevan dengan kebutuhan di dunia profesional.
                </p>
              </div>
            </div>
          </div>

          {/* Development Models */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Model Pengembangan Perangkat Lunak</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dalam pembahasan terkait model-model pengembangan perangkat lunak, kami tidak hanya mempelajari 
                  metode Waterfall yang dikenal sebagai model terstruktur klasik, tetapi juga dikenalkan dengan 
                  metodologi Agile yang lebih fleksibel dan berorientasi pada kolaborasi tim. Menariknya, kami 
                  juga mendalami model Spiral yang memadukan pendekatan iteratif dengan pengelolaan risiko yang terencana.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Dari penjelasan tersebut, saya semakin memahami bahwa pemilihan metode pengembangan sangat 
                    bergantung pada karakteristik proyek, tujuan, serta kebutuhan pengguna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment System */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sistem Penilaian Komprehensif</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mata kuliah ini juga memiliki sistem penilaian yang komprehensif, tidak hanya berfokus pada ujian akhir, 
                  tetapi juga melibatkan penugasan individu maupun kelompok. Tugas-tugas tersebut mendorong kami untuk 
                  melakukan analisis studi kasus, menyusun dokumentasi rekayasa perangkat lunak, serta membuat berbagai 
                  model sistem seperti use case diagram, activity diagram, hingga perancangan struktur basis data.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Melalui proses ini, saya belajar untuk berpikir secara sistematis, mempertimbangkan aspek teknis dan 
                  non-teknis, serta memahami pentingnya dokumentasi dan evaluasi risiko dalam sebuah proyek pengembangan 
                  perangkat lunak.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Kesimpulan dan Apresiasi</h3>
                <p className="leading-relaxed mb-4">
                  Secara keseluruhan, saya merasa bahwa mata kuliah RPL ini memberikan kontribusi besar terhadap 
                  pemahaman saya dalam bidang rekayasa perangkat lunak. Walaupun kegiatan praktik lapangan belum 
                  dilaksanakan, materi yang diberikan, studi kasus yang relevan, dan pendekatan pembelajaran yang 
                  interaktif membuat saya lebih siap untuk menghadapi tantangan di dunia industri, khususnya dalam 
                  hal analisis kebutuhan sistem, perencanaan proyek, dan penerapan prinsip rekayasa perangkat lunak 
                  secara profesional dan bertanggung jawab.
                </p>
                <p className="leading-relaxed mb-4">
                  Demikian yang dapat saya sampaikan. Terima kasih atas bimbingan dan ilmu yang telah diberikan 
                  selama perkuliahan berlangsung.
                </p>
                <p className="font-semibold italic">
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceContent;