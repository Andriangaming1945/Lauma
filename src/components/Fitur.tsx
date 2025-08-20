import React, { useEffect, useState, useRef } from "react";

const features = [
  {
    icon: "📊",
    title: "Dashboard Real-time",
    description:
      "Pantau kualitas udara, suhu, dan titik banjir secara langsung dengan data terkini setiap detik.",
  },
  {
    icon: "📸",
    title: "Lapor Mudah",
    description: "Kirim laporan masalah lingkungan dengan foto HD dan lokasi GPS yang akurat dalam hitungan detik.",
  },
  {
    icon: "🤖",
    title: "Chatbot AI Pintar",
    description: "Konsultasi dan dapatkan solusi cerdas untuk masalah lingkungan dengan AI assistant 24/7.",
  },
  {
    icon: "🏆",
    title: "Gamifikasi & Reward",
    description: "Kumpulkan poin, unlock badge eksklusif, dan raih leaderboard sebagai eco-warrior terbaik.",
  },
  {
    icon: "🌍",
    title: "Event Komunitas",
    description: "Bergabung dengan ribuan eco-warriors dalam aksi nyata dan edukasi lingkungan berkelanjutan.",
  },
];

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          // Animasi judul terlebih dahulu
          setTimeout(() => {
            setTitleVisible(true);
          }, 200);
          
          // Trigger animasi cards satu per satu setelah judul muncul
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 800 + (index * 200));
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 px-3 sm:px-4 lg:px-6 xl:px-20 min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #86efac 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header dengan animasi pembukaan */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-800 mb-4 transform transition-all duration-1000 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
          }`}>
            🌱 Fitur Unggulan Kami
          </h2>
          <div className={`w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
            titleVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-green-700 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4 transform transition-all duration-1000 delay-500 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Solusi teknologi terdepan untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan
          </p>
        </div>

        {/* Features Grid - Lebih ramping di mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group rounded-2xl shadow-lg hover:shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border border-green-300/30 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ 
                background: 'linear-gradient(145deg, #4ade80, #22c55e)',
                transitionDelay: `${index * 200}ms`,
                minHeight: window.innerWidth < 640 ? '220px' : '280px'
              }}
            >
              {/* Icon dengan animasi */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 md:mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-green-100 transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-green-100 text-xs sm:text-sm md:text-base leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Bottom accent */}
              <div className="w-full h-1 bg-gradient-to-r from-green-200 to-white rounded-full mt-3 sm:mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 md:mt-16 transform transition-all duration-1000 delay-1500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base md:text-lg">
            Mulai Sekarang! 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;