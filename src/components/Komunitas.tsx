import React, { useState } from 'react';
import { Users, MapPin, Award, Calendar, MessageCircle, Heart, Share2, Camera, Plus, Search, Filter, ChevronDown, Leaf, Star, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaumaCommunity = () => {
  const [activeTab, setActiveTab] = useState('komunitas');
  const [selectedFilter, setSelectedFilter] = useState('semua');

  const komunitas = [
    {
      id: 1,
      nama: "EcoWarriors Jakarta Selatan",
      anggota: 1247,
      lokasi: "Jakarta Selatan",
      deskripsi: "Komunitas peduli lingkungan yang fokus pada pengurangan sampah plastik dan peningkatan kualitas udara",
      aktivitas: "Bersih-bersih Pantai Ancol",
      tanggal: "15 Agu 2025",
      kategori: "sampah",
      badge: "Champion",
      foto: "🌊",
      moderator: "Sarah Eco"
    },
    {
      id: 2,
      nama: "Green Serpong Community",
      anggota: 892,
      lokasi: "Tangerang Selatan",
      deskripsi: "Gerakan hijau untuk Serpong yang lebih asri dan berkelanjutan melalui urban farming",
      aktivitas: "Workshop Kompos Rumahan",
      tanggal: "18 Agu 2025",
      kategori: "edukasi",
      badge: "Pioneer",
      foto: "🌱",
      moderator: "Budi Green"
    },
    {
      id: 3,
      nama: "Bekasi River Guardians",
      anggota: 634,
      lokasi: "Bekasi",
      deskripsi: "Menjaga kebersihan sungai dan mencegah banjir melalui aksi gotong royong",
      aktivitas: "Monitoring Kualitas Air",
      tanggal: "20 Agu 2025",
      kategori: "air",
      badge: "Guardian",
      foto: "💧",
      moderator: "Indah River"
    }
  ];

  const aktivitasTerbaru = [
    {
      id: 1,
      user: "Maya Hijau",
      komunitas: "EcoWarriors Jakarta Selatan",
      aksi: "Mengumpulkan 25kg sampah plastik di Taman Suropati",
      waktu: "2 jam lalu",
      likes: 42,
      komentar: 8,
      foto: true,
      badge: "🏆"
    },
    {
      id: 2,
      user: "Adi Pohon",
      komunitas: "Green Serpong Community",
      aksi: "Menanam 10 bibit pohon mangga di area RT 05",
      waktu: "5 jam lalu",
      likes: 38,
      komentar: 12,
      foto: true,
      badge: "🌳"
    },
    {
      id: 3,
      user: "Rina Clean",
      komunitas: "Bekasi River Guardians",
      aksi: "Melapor titik pembuangan sampah ilegal di Kali Malang",
      waktu: "1 hari lalu",
      likes: 56,
      komentar: 15,
      foto: true,
      badge: "🚨"
    }
  ];

  const leaderboard = [
    { rank: 1, nama: "Maya Hijau", poin: 2450, badge: "🥇", komunitas: "EcoWarriors JS" },
    { rank: 2, nama: "Adi Pohon", poin: 2280, badge: "🥈", komunitas: "Green Serpong" },
    { rank: 3, nama: "Rina Clean", poin: 2150, badge: "🥉", komunitas: "Bekasi Guardians" },
    { rank: 4, nama: "Budi Green", poin: 1980, badge: "⭐", komunitas: "Green Serpong" },
    { rank: 5, nama: "Sarah Eco", poin: 1850, badge: "⭐", komunitas: "EcoWarriors JS" }
  ];

  const filterOptions = [
    { value: 'semua', label: 'Semua Komunitas' },
    { value: 'sampah', label: 'Pengelolaan Sampah' },
    { value: 'air', label: 'Konservasi Air' },
    { value: 'edukasi', label: 'Edukasi Lingkungan' },
    { value: 'udara', label: 'Kualitas Udara' }
  ];

  const CategoryBadge = ({ kategori }) => {
    const colors = {
      sampah: 'bg-green-100 text-green-800',
      air: 'bg-blue-100 text-blue-800',
      edukasi: 'bg-purple-100 text-purple-800',
      udara: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[kategori] || colors.udara}`}>
        {kategori}
      </span>
    );
  };

  return (
    <div
  className="min-h-screen"
  style={{
    background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #86efac 100%)'
  }}
>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Lauma Community
                </h1>
                <p className="text-sm text-gray-600">Bersama untuk lingkungan yang lebih baik</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Buat Komunitas</span>
              </button>
              <Link
                className="bg-gradient-to-r from-red-500 to-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                to="/">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Kembali</span>
              </Link>
            </div>
          
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'komunitas', label: 'Komunitas', icon: Users },
              { id: 'aktivitas', label: 'Aktivitas', icon: Calendar },
              { id: 'leaderboard', label: 'Leaderboard', icon: Award }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'komunitas' && (
          <div>
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari komunitas di sekitar Anda..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {komunitas.map((community) => (
                <div key={community.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Community Header */}
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div className="text-4xl mb-2">{community.foto}</div>
                      <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs font-medium">{community.badge}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:scale-105 transition-transform">
                      {community.nama}
                    </h3>
                    <div className="flex items-center text-green-100 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {community.lokasi}
                    </div>
                  </div>

                  {/* Community Body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {community.deskripsi}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="font-medium text-green-600">{community.anggota}</span> anggota
                      </div>
                      <CategoryBadge kategori={community.kategori} />
                    </div>

                    {/* Upcoming Activity */}
                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center text-green-700 text-xs font-medium mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        Kegiatan Mendatang
                      </div>
                      <p className="text-sm text-green-800 font-medium">{community.aktivitas}</p>
                      <p className="text-xs text-green-600">{community.tanggal}</p>
                    </div>

                    {/* Action Buttons */}
                   <div className="flex space-x-2">
  <Link
    to="/join"
    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-medium flex items-center justify-center"
  >
    Bergabung
  </Link>

  <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
    <MessageCircle className="w-4 h-4 text-gray-600" />
  </button>
</div>

                    {/* Moderator */}
                    <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs font-bold">
                          {community.moderator.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        Moderator: <span className="text-green-600 font-medium">{community.moderator}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'aktivitas' && (
          <div className="space-y-4">
            {aktivitasTerbaru.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    {activity.user.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-green-600">{activity.user}</h4>
                      <span className="text-xl">{activity.badge}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">{activity.komunitas}</span>
                    </div>
                    
                    <p className="text-gray-800 mb-3">{activity.aksi}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{activity.waktu}</span>
                        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{activity.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{activity.komentar}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {activity.foto && (
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <Camera className="w-6 h-6 text-green-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">🏆 Eco Heroes Mingguan</h3>
              <p className="text-green-100">Para pahlawan lingkungan yang paling aktif minggu ini</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                    user.rank <= 3 ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                        user.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-600' :
                        user.rank === 3 ? 'bg-orange-100 text-orange-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {user.rank <= 3 ? user.badge : user.rank}
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-800">{user.nama}</h4>
                        <p className="text-sm text-gray-500">{user.komunitas}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-green-600 text-lg">{user.poin}</div>
                      <div className="text-xs text-gray-500">eco points</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-center">
                  <p className="text-green-700 font-medium mb-2">🎯 Target Minggu Ini</p>
                  <p className="text-sm text-green-600">Kumpulkan 100 eco points untuk masuk leaderboard!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaumaCommunity;