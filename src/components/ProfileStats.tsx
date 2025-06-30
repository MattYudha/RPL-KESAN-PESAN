import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import FotoProfil from '/assets/Matt.png'; // Pastikan ini sesuai struktur project Anda. Ganti file Matt.png dengan foto profil resolusi tinggi dan profesional Anda.

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ProfileStats = () => {
  const skillsData = {
    labels: ['Waterfall', 'Agile', 'Spiral', 'DevOps', 'Scrum'],
    datasets: [
      {
        label: 'Tingkat Pemahaman (%)',
        data: [85, 90, 80, 75, 88],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 101, 101, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 101, 101, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const learningProgressData = {
    labels: ['Week 1', 'Week 4', 'Week 8', 'Week 12', 'Week 16'],
    datasets: [
      {
        label: 'Progress Pembelajaran (%)',
        data: [20, 45, 65, 80, 95],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const assessmentData = {
    labels: ['Tugas Individu', 'Tugas Kelompok', 'UTS', 'UAS', 'Partisipasi'],
    datasets: [
      {
        data: [25, 30, 20, 20, 5],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 101, 101, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(139, 92, 246, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(245, 101, 101, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(139, 92, 246, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Statistik Pembelajaran RPL' },
    },
    scales: { y: { beginAtZero: true, max: 100 } },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' as const },
      title: { display: true, text: 'Distribusi Penilaian (%)' },
    },
  };

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Profil & Statistik Pembelajaran
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

            {/* Foto Profil Besar */}
            <div className="bg-white/20 p-4 rounded-full">
              <div className="w-24 h-24 bg-white/30 rounded-full overflow-hidden flex items-center justify-center">
                {/* Pastikan file FotoProfil (Matt.png) yang Anda gunakan adalah gambar beresolusi tinggi dan profesional */}
                <img src={FotoProfil} alt="Foto Profil" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-2">Rahmat Yudi Burhanudin</h3>
              <p className="text-lg mb-1">NIM: 221011400300</p>
              <p className="text-lg mb-1">Universitas Pamulang</p>
              <p className="text-lg">Semester 6 - Rekayasa Perangkat Lunak</p>
            </div>

            {/* Grade */}
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="text-3xl font-bold">A</div>
                <div className="text-sm">Target Grade</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          <div className="bg-white rounded-2xl shadow-xl p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pemahaman Metodologi</h3>
            <Bar data={skillsData} options={options} />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Distribusi Penilaian</h3>
            <Pie data={assessmentData} options={pieOptions} />
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Pembelajaran Semester</h3>
          <Line
            data={learningProgressData}
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: {
                  display: true,
                  text: 'Perkembangan Pemahaman Selama Semester',
                },
              },
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default ProfileStats;