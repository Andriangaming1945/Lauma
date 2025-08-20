import { useState, useEffect } from 'react';
import { Leaf, Users, Target, Award, MapPin, TrendingUp } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initial loading animation
    setIsLoaded(true);

    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 py-24">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/10 rounded-full transform transition-all duration-1000 ${
                isLoaded ? 'animate-pulse' : ''
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                transform: isLoaded ? `translate(${Math.sin(i) * 20}px, ${Math.cos(i) * 20}px)` : 'translate(0, 0)'
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-12'
          }`}>
            <Leaf className={`w-8 h-8 text-white transition-transform duration-1000 ${isLoaded ? 'rotate-0' : 'rotate-180'}`} />
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-1200 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Tentang <span className={`text-green-200 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>Lauma</span>
          </h1>
          <p className={`text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Platform Pemantauan & Aksi Lingkungan Warga untuk Perubahan yang Berkelanjutan
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            id="mission"
            data-animate
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Lauma for <span className="text-green-600">Change</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 transform transition-all duration-1000 delay-300 ${
              isVisible.mission ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Lauma adalah platform inovatif yang menghubungkan warga untuk memantau dan menjaga lingkungan sekitar. 
              Dengan teknologi dan kolaborasi komunitas, kami berkomitmen untuk menciptakan perubahan yang berkelanjutan 
              melalui aksi nyata setiap hari.
            </p>
          </div>

          {/* Problem & Solution Cards */}
          <div 
            id="problem-solution"
            data-animate
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {/* Problem Card */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500 transform transition-all duration-1000 ${
              isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                Masalah yang Kami Hadapi
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className={`flex items-start transform transition-all duration-700 delay-200 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Banyak warga tidak tahu kondisi lingkungan sekitar secara real-time
                </li>
                <li className={`flex items-start transform transition-all duration-700 delay-400 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Pelaporan masalah lingkungan seringkali lambat atau tidak terkoordinasi
                </li>
                <li className={`flex items-start transform transition-all duration-700 delay-600 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Minimnya edukasi aksi sederhana yang bisa langsung dilakukan masyarakat
                </li>
                 <li className={`flex items-start transform transition-all duration-700 delay-600 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Kurangnya transparansi tindak lanjut laporan warga sering tidak tahu apakah laporan mereka sudah diproses atau belum.
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className={`bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-8 text-white transform transition-all duration-1000 delay-300 ${
              isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                Solusi Lauma
              </h3>
              <ul className="space-y-4">
                <li className={`flex items-start transform transition-all duration-700 delay-500 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Memberikan informasi lingkungan lokal secara cepat & akurat
                </li>
                <li className={`flex items-start transform transition-all duration-700 delay-700 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Memudahkan warga melapor masalah lingkungan dengan sistem terintegrasi
                </li>
                <li className={`flex items-start transform transition-all duration-700 delay-900 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Memberikan edukasi dan ajakan aksi yang relevan dengan kondisi terkini
                </li>
                 <li className={`flex items-start transform transition-all duration-700 delay-900 ${
                  isVisible['problem-solution'] ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                }`}>
                  <div className="w-2 h-2 bg-green-200 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  Sistem pelacakan status laporan warga bisa lihat progres laporan mereka dari “Diterima” → “Diproses” → “Selesai”.
                </li>
              </ul>
            </div>
          </div>

          {/* Core Features */}
          <div 
            id="features"
            data-animate
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {[
              { icon: TrendingUp, title: "Dashboard Real-time", desc: "Data lingkungan lokal yang akurat dan terkini" },
              { icon: MapPin, title: "Pelaporan Masalah", desc: "Lapor kondisi lingkungan dengan foto dan lokasi" },
              { icon: Target, title: "Aksi & Edukasi", desc: "Tips dan rekomendasi aksi lingkungan harian" },
              { icon: Award, title: "Gamifikasi", desc: "Sistem poin dan badge untuk motivasi berkelanjutan" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center group transform transition-all duration-1000 ${
                  isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Vision & Values */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Visi & Nilai Kami</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Kolaborasi</h4>
                <p className="text-gray-600">Kami percaya kekuatan kolaborasi komunitas dalam menciptakan perubahan positif yang berkelanjutan.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Aksi Nyata</h4>
                <p className="text-gray-600">Setiap fitur dirancang untuk mendorong aksi nyata, bukan sekedar awareness tanpa tindakan.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h4>
                <p className="text-gray-600">Komitmen jangka panjang untuk menciptakan lingkungan yang sehat bagi generasi mendatang.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl shadow-2xl py-16 px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bergabunglah dengan Gerakan Perubahan
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Setiap individu memiliki peran penting dalam menjaga kelestarian lingkungan. 
              Mari bersama-sama menciptakan lingkungan yang lebih bersih dan sehat.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Mulai Berkontribusi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}