import React, { useState } from 'react';
import { ArrowLeft, Users, Calendar, MessageCircle, Trophy, Bell, Star, MapPin, Clock, Camera, Heart, Share2, BookOpen, Award, Target, CheckCircle } from 'lucide-react';

const AfterJoinPages = () => {
  const [currentPage, setCurrentPage] = useState('welcome'); // welcome, dashboard, chat, profile

  // Welcome/Onboarding Page
  const WelcomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang di EcoWarriors! 🎉</h1>
          <p className="text-gray-600 text-lg">Anda berhasil bergabung dengan komunitas peduli lingkungan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-emerald-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-emerald-700 mb-2">Badge Pertama</h3>
            <p className="text-emerald-600 text-sm">Anggota Baru</p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-yellow-700 mb-2">Poin Pertama</h3>
            <p className="text-yellow-600 text-sm">+50 Poin</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-blue-700 mb-2">Misi Pertama</h3>
            <p className="text-blue-600 text-sm">Perkenalan Diri</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-gray-800 mb-3">Langkah Selanjutnya:</h3>
          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700">Lengkapi profil Anda</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700">Perkenalkan diri di forum</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-700">Daftar kegiatan pertama</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => setCurrentPage('profile')}
            className="flex-1 bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            Lengkapi Profil
          </button>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Mulai Jelajahi
          </button>
        </div>
      </div>
    </div>
  );

  // Member Dashboard
  const MemberDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentPage('welcome')} className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-800">Dashboard Anggota</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 hover:text-emerald-600 cursor-pointer" />
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl text-white p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Selamat datang, Anggota Baru! 👋</h2>
              <p className="text-emerald-100">Mulai perjalanan Anda dalam menjaga lingkungan bersama EcoWarriors</p>
            </div>
            <div className="text-right">
              <div className="text-emerald-100 text-sm">Level Anda</div>
              <div className="text-2xl font-bold">Pemula</div>
              <div className="text-emerald-100 text-sm">50/100 poin</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Aksi Cepat</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button 
                  onClick={() => setCurrentPage('chat')}
                  className="flex flex-col items-center space-y-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">Forum Chat</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-600">Kegiatan</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">Panduan</span>
                </button>
                <button className="flex flex-col items-center space-y-2 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <Camera className="w-8 h-8 text-orange-600" />
                  <span className="text-sm font-medium text-orange-600">Galeri</span>
                </button>
              </div>
            </div>

            {/* Kegiatan Mendatang */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Kegiatan Mendatang</h3>
              <div className="space-y-4">
                <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Bersih-bersih Pantai Ancol</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>📅 15 Agu 2025</span>
                        <span>🕐 07:00 - 12:00</span>
                      </div>
                    </div>
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs">
                      RECOMMENDED
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Kegiatan perdana yang cocok untuk anggota baru. Mari bersih-bersih pantai sambil berkenalan!
                  </p>
                  <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-600 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Workshop Kompos Rumahan</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1 mb-3">
                    <span>📅 22 Agu 2025</span>
                    <span>🕐 14:00 - 17:00</span>
                    <span>👥 12/30 peserta</span>
                  </div>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Progress Anda</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Menuju Level Aktivis</span>
                    <span className="font-medium text-emerald-600">50/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-700">Badge Terbaru</span>
                  </div>
                  <span className="text-xs text-yellow-600">🆕 Anggota Baru</span>
                </div>
              </div>
            </div>

            {/* Moderator Welcome */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Pesan dari Moderator</h3>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SE</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      "Halo! Selamat datang di EcoWarriors. Jangan ragu untuk bertanya di forum ya! 🌱"
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Sarah Eco • Moderator</div>
                </div>
              </div>
              <button 
                onClick={() => setCurrentPage('chat')}
                className="w-full mt-4 bg-emerald-500 text-white py-2 rounded-lg text-sm hover:bg-emerald-600 transition-colors"
              >
                Balas Pesan
              </button>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Info Komunitas</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Total Anggota</span>
                  <span className="font-medium text-emerald-600">1,248</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Anggota Aktif</span>
                  <span className="font-medium text-emerald-600">324</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Kegiatan Bulan Ini</span>
                  <span className="font-medium text-emerald-600">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Community Chat/Forum
  const CommunityChat = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button onClick={() => setCurrentPage('dashboard')} className="text-gray-500 hover:text-gray-700">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                  <h1 className="text-lg font-bold text-gray-800">Forum EcoWarriors</h1>
                  <p className="text-sm text-gray-500">234 anggota online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">1,248</span>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message for New Member */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 m-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🎉</span>
            </div>
            <div>
              <p className="text-emerald-700 font-medium">Selamat datang anggota baru!</p>
              <p className="text-emerald-600 text-sm">Perkenalkan diri Anda di sini untuk mendapat poin bonus +25!</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4">
          {/* System Message */}
          <div className="flex justify-center">
            <div className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">
              Anda bergabung dengan grup
            </div>
          </div>

          {/* Moderator Welcome */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">SE</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-800">Sarah Eco</span>
                <span className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs">Moderator</span>
                <span className="text-xs text-gray-500">2 menit lalu</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-700">
                  Halo selamat datang di EcoWarriors! 🌱 Kami sangat senang ada anggota baru. 
                  Jangan ragu untuk perkenalkan diri dan tanya-tanya ya! Ada yang ingin langsung ikut kegiatan minggu depan?
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <button className="flex items-center space-x-1 hover:text-emerald-600">
                  <Heart className="w-3 h-3" />
                  <span>12</span>
                </button>
                <button className="hover:text-emerald-600">Balas</button>
              </div>
            </div>
          </div>

          {/* Other Member */}
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">BH</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-800">Budi Hijau</span>
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">Relawan</span>
                <span className="text-xs text-gray-500">1 menit lalu</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-700">
                  Wah ada anggota baru! Selamat datang! Kalau mau ikut bersih-bersih pantai besok, masih ada slot nih 🏖️
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <button className="flex items-center space-x-1 hover:text-emerald-600">
                  <Heart className="w-3 h-3" />
                  <span>8</span>
                </button>
                <button className="hover:text-emerald-600">Balas</button>
              </div>
            </div>
          </div>

          {/* Suggested First Message */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💡</span>
              </div>
              <div>
                <p className="text-yellow-700 font-medium text-sm">Mulai perkenalan Anda!</p>
                <p className="text-yellow-600 text-sm">Template: "Halo semua! Saya [nama], tinggal di [area], tertarik bergabung karena [alasan]"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="sticky bottom-0 bg-white border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Perkenalkan diri Anda di sini untuk mendapat +25 poin..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-emerald-600 transition-colors">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Profile Completion Page
  const ProfilePage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentPage('welcome')} className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-lg font-bold text-gray-800">Lengkapi Profil</h1>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Progress profil</span>
              <span className="font-medium text-emerald-600">60%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-semibold">A</span>
                </div>
                <button className="text-emerald-600 text-sm hover:text-emerald-700">
                  Ubah Foto Profil
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio Singkat</label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Ceritakan sedikit tentang diri Anda dan motivasi peduli lingkungan..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area Tinggal</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Pilih area tinggal</option>
                    <option>Jakarta Selatan</option>
                    <option>Jakarta Pusat</option>
                    <option>Jakarta Utara</option>
                    <option>Jakarta Barat</option>
                    <option>Jakarta Timur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minat Kegiatan</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Bersih-bersih pantai',
                      'Penanaman pohon', 
                      'Workshop lingkungan',
                      'Kampanye anti plastik',
                      'Urban farming',
                      'Daur ulang sampah'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ketersediaan Waktu</label>
                  <div className="space-y-2">
                    {[
                      'Weekday pagi (07:00-12:00)',
                      'Weekday sore (13:00-17:00)', 
                      'Weekend pagi (07:00-12:00)',
                      'Weekend sore (13:00-17:00)'
                    ].map((time) => (
                      <label key={time} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-700">{time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Lewati Dulu
                </button>
                <button 
                  onClick={() => setCurrentPage('dashboard')}
                  className="flex-1 bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                >
                  Simpan Profil (+25 Poin)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Page Navigation
  const renderPage = () => {
    switch(currentPage) {
      case 'welcome': return <WelcomePage />;
      case 'dashboard': return <MemberDashboard />;
      case 'chat': return <CommunityChat />;
      case 'profile': return <ProfilePage />;
      default: return <WelcomePage />;
    }
  };

  return (
    <div>
      {renderPage()}
      
      {/* Page Selector for Demo */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
        <div className="text-xs text-gray-500 mb-2">Demo Pages:</div>
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => setCurrentPage('welcome')}
            className={`text-xs px-3 py-1 rounded ${currentPage === 'welcome' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            1. Welcome
          </button>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className={`text-xs px-3 py-1 rounded ${currentPage === 'dashboard' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            2. Dashboard
          </button>
          <button 
            onClick={() => setCurrentPage('chat')}
            className={`text-xs px-3 py-1 rounded ${currentPage === 'chat' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            3. Forum Chat
          </button>
          <button 
            onClick={() => setCurrentPage('profile')}
            className={`text-xs px-3 py-1 rounded ${currentPage === 'profile' ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            4. Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterJoinPages;