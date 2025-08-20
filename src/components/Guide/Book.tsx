import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Play, MapPin, Camera, MessageCircle, Trophy, Users, Map, Zap, Eye, Navigation, Filter, AlertTriangle, Leaf, ArrowLeft, BookOpen, Clock, CheckCircle } from 'lucide-react';

const LaumaDesignGuide = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const features = [
    {
      icon: "📊",
      title: "Dashboard Real-time",
      description: "Pantau kualitas udara, suhu, dan titik banjir secara langsung dengan data terkini setiap detik.",
      color: "from-emerald-500 to-green-500",
      steps: [
        "Buka halaman Dashboard dari menu utama",
        "Lihat panel Status Lingkungan di sebelah kiri",
        "Perhatikan indikator warna: Merah (Buruk), Kuning (Sedang), Hijau (Baik)",
        "Data akan terupdate otomatis setiap 30 detik",
        "Klik pada setiap metrik untuk detail lebih lanjut"
      ],
      tips: "Bookmark halaman dashboard untuk akses cepat monitoring harian!"
    },
    {
      icon: "📸",
      title: "Lapor Mudah",
      description: "Kirim laporan masalah lingkungan dengan foto HD dan lokasi GPS yang akurat dalam hitungan detik.",
      color: "from-green-500 to-emerald-600",
      steps: [
        "Tekan tombol 'Mulai Sekarang!' di halaman utama",
        "Pilih jenis masalah lingkungan yang akan dilaporkan",
        "Ambil foto dengan kamera atau pilih dari galeri",
        "Sistem akan mendeteksi lokasi GPS secara otomatis",
        "Tambahkan deskripsi singkat dan kirim laporan"
      ],
      tips: "Ambil foto dari berbagai sudut untuk laporan yang lebih komprehensif!"
    },
    {
      icon: "🤖",
      title: "Chatbot AI Pintar",
      description: "Konsultasi dan dapatkan solusi cerdas untuk masalah lingkungan dengan AI assistant 24/7.",
      color: "from-teal-500 to-cyan-500",
      steps: [
        "Klik tombol 'AI CHATBOT' di pojok kanan bawah",
        "Ketik pertanyaan atau masalah lingkungan Anda",
        "AI akan menganalisis dan memberikan solusi dalam sekejap",
        "Gunakan fitur voice note untuk input yang lebih mudah",
        "Simpan jawaban penting untuk referensi masa depan"
      ],
      tips: "Gunakan bahasa sehari-hari, AI kami memahami konteks percakapan!"
    },
    {
      icon: "🏆",
      title: "Gamifikasi & Reward",
      description: "Kumpulkan poin, unlock badge eksklusif, dan raih leaderboard sebagai eco-warrior terbaik.",
      color: "from-emerald-600 to-green-600",
      steps: [
        "Selesaikan misi harian untuk mendapatkan poin",
        "Laporkan masalah lingkungan = +50 poin",
        "Ikut serta dalam event komunitas = +100 poin",
        "Kumpulkan badge dengan menyelesaikan tantangan khusus",
        "Cek posisi Anda di leaderboard mingguan"
      ],
      tips: "Ajak teman untuk bergabung dan dapatkan bonus poin referral!"
    },
    {
      icon: "🌍",
      title: "Event Komunitas",
      description: "Bergabung dengan ribuan eco-warriors dalam aksi nyata dan edukasi lingkungan berkelanjutan.",
      color: "from-green-600 to-teal-600",
      steps: [
        "Buka tab 'Komunitas' di menu navigasi atas",
        "Pilih event yang menarik di dekat lokasi Anda",
        "Daftar dengan menekan tombol 'Join Event'",
        "Dapatkan notifikasi reminder sebelum event dimulai",
        "Bagikan pengalaman Anda setelah event selesai"
      ],
      tips: "Follow sosial media Lauma untuk info event eksklusif!"
    }
  ];

  const mapFeatures = {
    title: "Peta Interaktif Jakarta Pusat",
    description: "Panduan lengkap menggunakan fitur peta interaktif untuk monitoring lingkungan real-time",
    features: [
      {
        icon: <Navigation className="w-6 h-6" />,
        title: "Navigasi Peta",
        color: "from-blue-500 to-indigo-500",
        steps: [
          "Gunakan mouse untuk pan (geser) peta ke area yang diinginkan",
          "Scroll mouse untuk zoom in/out pada area tertentu",
          "Double-click untuk zoom in dengan cepat",
          "Gunakan tombol + / - di pojok peta untuk kontrol zoom manual"
        ]
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Membaca Indikator",
        color: "from-purple-500 to-pink-500",
        steps: [
          "Marker merah = Tingkat pencemaran TINGGI (butuh perhatian segera)",
          "Marker kuning = Tingkat pencemaran SEDANG (perlu monitoring)",
          "Marker hijau = Tingkat pencemaran RENDAH (kondisi baik)",
          "Marker biru = Lokasi Anda saat ini",
          "Klik marker untuk melihat detail informasi lokasi tersebut"
        ]
      },
      {
        icon: <Filter className="w-6 h-6" />,
        title: "Filter Laporan",
        color: "from-orange-500 to-red-500",
        steps: [
          "Gunakan panel 'Filter Laporan' di sebelah kiri bawah",
          "Pilih jenis laporan: Sampah, Polusi Udara, Kerusakan Fasilitas",
          "Tentukan rentang waktu laporan yang ingin ditampilkan",
          "Atur radius pencarian dari lokasi Anda",
          "Klik 'Apply Filter' untuk menerapkan pengaturan"
        ]
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Laporan Terbaru",
        color: "from-yellow-500 to-orange-500",
        steps: [
          "Panel 'Laporan Terbaru' menampilkan 3 laporan terkini",
          "Status warna: Kuning (Baru), Biru (Proses), Hijau (Selesai)",
          "Klik laporan untuk melihat detail lengkap dan foto",
          "Gunakan tombol refresh untuk update data terbaru",
          "Bookmark laporan penting untuk follow-up"
        ]
      }
    ]
  };

  const pages = [
    {
      title: "Panduan Lengkap Lauma",
      subtitle: "Solusi teknologi terdepan untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan",
      type: "cover"
    },
    ...features.map(feature => ({ ...feature, type: "feature" })),
    { ...mapFeatures, type: "map" }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const renderCoverPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                Lauma
              </span>
              <span className="text-lg text-gray-600 mt-1">Design Guide</span>
            </div>
          </div>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            {pages[0].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl p-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Real-time Monitoring</span>
            </div>
            <p className="text-gray-600 text-sm">Data lingkungan terupdate setiap detik</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Smart Report</span>
            </div>
            <p className="text-gray-600 text-sm">Laporan cerdas dengan GPS dan foto HD</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">AI Assistant</span>
            </div>
            <p className="text-gray-600 text-sm">Konsultasi lingkungan 24/7 dengan AI</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl p-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Gamification</span>
            </div>
            <p className="text-gray-600 text-sm">Sistem reward dan leaderboard</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Community</span>
            </div>
            <p className="text-gray-600 text-sm">Event dan aksi bersama eco-warriors</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-3">
                <Map className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-800">Interactive Map</span>
            </div>
            <p className="text-gray-600 text-sm">Peta interaktif monitoring real-time</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-emerald-200">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700 font-medium">6 Panduan Lengkap Tersedia</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeaturePage = (feature) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className={`bg-gradient-to-r ${feature.color} p-8 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-7xl bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-3">{feature.title}</h1>
                    <p className="text-xl opacity-90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>5 menit baca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Tutorial Step-by-Step</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg p-2">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  Cara Penggunaan
                </h3>
                
                <div className="space-y-4">
                  {feature.steps.map((step, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 leading-relaxed font-medium">{step}</p>
                        </div>
                        <CheckCircle className="w-6 h-6 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                    💡 Tips Pro
                  </h4>
                  <p className="opacity-95 leading-relaxed text-lg">{feature.tips}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMapPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                    <Map className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-3">{mapFeatures.title}</h1>
                    <p className="text-xl opacity-90 leading-relaxed">{mapFeatures.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>8 menit baca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Map className="w-5 h-5" />
                    <span>4 Fitur Utama</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {mapFeatures.features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-3 shadow-lg`}>
                          {React.cloneElement(feature.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {feature.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                            <div className={`bg-gradient-to-r ${feature.color} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                              {stepIndex + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Guide Section */}
              <div className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-2xl mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-7 h-7" />
                    Panduan Khusus Monitoring
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        📊 Interpretasi Data
                      </h5>
                      <ul className="space-y-3 opacity-95">
                        <li className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span>AQI 0-50: Kondisi Baik</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span>AQI 51-100: Kondisi Sedang</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <span>AQI 101+: Tidak Sehat</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                      <h5 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        🎯 Best Practices
                      </h5>
                      <ul className="space-y-3 opacity-95">
                        <li>• Cek peta setiap pagi sebelum beraktivitas</li>
                        <li>• Gunakan filter untuk fokus pada area spesifik</li>
                        <li>• Laporkan kondisi mencurigakan segera</li>
                        <li>• Ikuti trend data untuk prediksi pola</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button & Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackHome}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-200 text-gray-700 hover:text-gray-900 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Kembali</span>
              </button>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Lauma Design Guide</h1>
                  <p className="text-sm text-gray-600">Panduan Lengkap Fitur & Penggunaan</p>
                </div>
              </div>
            </div>
            
            {/* Page Counter */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">
                {currentPage + 1} / {pages.length}
              </span>
              <div className="flex gap-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPage 
                        ? 'bg-emerald-500 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content with top padding for fixed header */}
      <div className="pt-20">
        {pages[currentPage].type === 'cover' && renderCoverPage()}
        {pages[currentPage].type === 'feature' && renderFeaturePage(pages[currentPage])}
        {pages[currentPage].type === 'map' && renderMapPage()}
      </div>

      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">
                {pages[currentPage].type === 'cover' && 'Halaman Utama'}
                {pages[currentPage].type === 'feature' && pages[currentPage].title}
                {pages[currentPage].type === 'map' && 'Panduan Peta Interaktif'}
              </span>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none font-medium"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaumaDesignGuide;