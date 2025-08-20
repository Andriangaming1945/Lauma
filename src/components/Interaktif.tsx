import React, { useState, useEffect } from 'react';
import { MapPin, Droplets, Wind, Thermometer, Trash2, AlertTriangle, TreePine, Camera, Leaf, Plus, Filter, Search, Users, Award, Home } from 'lucide-react';
import { Link } from 'react-router-dom';


const EcoTrackMap = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: -6.2088, lng: 106.8456 }); // Jakarta default
  
  // Data dummy untuk laporan lingkungan
  const [reports, setReports] = useState([
    {
      id: 1,
      type: 'sampah',
      title: 'Tumpukan Sampah Plastik',
      description: 'Banyak sampah plastik berserakan di pinggir jalan',
      lat: -6.2088,
      lng: 106.8456,
      status: 'pending',
      reporter: 'Ahmad S.',
      date: '2025-08-10',
      severity: 'medium',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      type: 'polusi',
      title: 'Asap Pabrik Tebal',
      description: 'Asap hitam dari cerobong pabrik menganggu warga',
      lat: -6.2188,
      lng: 106.8556,
      status: 'in-progress',
      reporter: 'Siti M.',
      date: '2025-08-09',
      severity: 'high',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      type: 'banjir',
      title: 'Genangan Air Hujan',
      description: 'Drainase tersumbat menyebabkan genangan',
      lat: -6.1988,
      lng: 106.8356,
      status: 'resolved',
      reporter: 'Budi T.',
      date: '2025-08-08',
      severity: 'low',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      type: 'infrastruktur',
      title: 'Pohon Tumbang',
      description: 'Pohon besar tumbang menutupi jalan',
      lat: -6.2188,
      lng: 106.8256,
      status: 'pending',
      reporter: 'Rina K.',
      date: '2025-08-11',
      severity: 'high',
      image: '/api/placeholder/300/200'
    }
  ]);

  // Data sensor lingkungan
  const environmentData = {
    aqi: 165,
    temperature: 32,
    humidity: 78,
    rainfall: 12,
    status: 'Tidak Sehat'
  };

  const filterTypes = [
    { key: 'all', label: 'Semua', icon: Filter, color: 'bg-green-500' },
    { key: 'sampah', label: 'Sampah', icon: Trash2, color: 'bg-orange-500' },
    { key: 'polusi', label: 'Polusi', icon: Wind, color: 'bg-red-500' },
    { key: 'banjir', label: 'Banjir', icon: Droplets, color: 'bg-blue-500' },
    { key: 'infrastruktur', label: 'Infrastruktur', icon: AlertTriangle, color: 'bg-yellow-500' }
  ];

  const getMarkerColor = (type) => {
    switch (type) {
      case 'sampah': return 'text-orange-500';
      case 'polusi': return 'text-red-500';
      case 'banjir': return 'text-blue-500';
      case 'infrastruktur': return 'text-yellow-500';
      default: return 'text-green-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const filteredReports = selectedFilter === 'all' 
    ? reports 
    : reports.filter(report => report.type === selectedFilter);

  return (
  <div
  className="min-h-screen"
  style={{
    background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #86efac 100%)'
  }}
>
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
           <div className="flex items-center space-x-3">
  {/* Icon */}
  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
    <Leaf className="w-6 h-6 text-white" />
  </div>

  {/* Text */}
  <div>
    <span className="block text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
      Lauma
    </span>
    <p className="text-sm text-green-600">
      Peta Lingkungan Interaktif
    </p>
  </div>
</div>

            
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 px-4 py-2 rounded-lg">
                <div className="flex items-center text-green-800">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{reports.length} Laporan</span>
                </div>
              </div>
              <div className="bg-emerald-100 px-4 py-2 rounded-lg">
                <div className="flex items-center text-emerald-800">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">150 Poin</span>
                </div>
              </div>
            </div>
                  <Link
                className="bg-gradient-to-r from-red-500 to-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                to="/">
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Kembali</span>
              </Link>
          </div>
        </div>
        
      </div>
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar Kiri - Info Lingkungan */}
          <div className="lg:col-span-1 space-y-6">
            {/* Dashboard Lingkungan */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Wind className="h-5 w-5 text-green-500 mr-2" />
                Status Lingkungan
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <Wind className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Kualitas Udara</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">{environmentData.aqi}</div>
                    <div className="text-xs text-red-500">{environmentData.status}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Suhu</span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">{environmentData.temperature}°C</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Kelembaban</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{environmentData.humidity}%</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  💡 <strong>Rekomendasi:</strong> Kualitas udara buruk hari ini. Kurangi aktivitas luar ruangan dan gunakan masker.
                </p>
              </div>
            </div>

            {/* Filter Laporan */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filter Laporan</h3>
              <div className="space-y-2">
                {filterTypes.map(filter => {
                  const IconComponent = filter.icon;
                  return (
                    <button
                      key={filter.key}
                      onClick={() => setSelectedFilter(filter.key)}
                      className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                        selectedFilter === filter.key 
                          ? 'bg-green-100 text-green-800 border-2 border-green-300' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`p-1 rounded ${filter.color} mr-3`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{filter.label}</span>
                      <span className="ml-auto bg-white px-2 py-1 rounded-full text-xs">
                        {filter.key === 'all' ? reports.length : reports.filter(r => r.type === filter.key).length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Area Peta Utama */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">Peta Lingkungan Jakarta Pusat</h2>
                  <button
                    onClick={() => setShowReportForm(true)}
                    className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Lapor
                  </button>
                </div>
              </div>

              {/* Area Peta Simulasi */}
              <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
                {/* Background peta sederhana */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-20">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Jalan utama simulasi */}
                <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-300 opacity-60 transform -translate-y-1/2"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-8 bg-gray-300 opacity-60 transform -translate-x-1/2"></div>

                {/* Marker laporan */}
                {filteredReports.map((report, index) => (
                  <div
                    key={report.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 z-10`}
                    style={{
                      left: `${30 + (index * 15)}%`,
                      top: `${25 + (index * 12)}%`
                    }}
                    onClick={() => setSelectedReport(report)}
                  >
                    <div className={`relative`}>
                      <div className={`w-8 h-8 rounded-full bg-white shadow-lg border-2 flex items-center justify-center ${
                        report.severity === 'high' ? 'border-red-500' : 
                        report.severity === 'medium' ? 'border-yellow-500' : 'border-green-500'
                      }`}>
                        <MapPin className={`h-5 w-5 ${getMarkerColor(report.type)}`} />
                      </div>
                      {report.severity === 'high' && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                ))}

                {/* User location marker */}
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ left: '50%', top: '60%' }}
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full shadow-lg border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      Lokasi Anda
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="text-xs font-bold text-gray-700 mb-2">Keterangan:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 border-2 border-red-500 rounded-full bg-white mr-2"></div>
                      <span className="text-gray-600">Tinggi</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 border-2 border-yellow-500 rounded-full bg-white mr-2"></div>
                      <span className="text-gray-600">Sedang</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 border-2 border-green-500 rounded-full bg-white mr-2"></div>
                      <span className="text-gray-600">Rendah</span>
                    </div>
                  </div>
                </div>

                {/* Zoom controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button className="bg-white shadow-lg rounded p-2 hover:bg-gray-50 transition-colors">
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-white shadow-lg rounded p-2 hover:bg-gray-50 transition-colors">
                    <span className="text-gray-600 font-bold text-sm">−</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Kanan - Detail Laporan */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Search className="h-5 w-5 text-green-500 mr-2" />
                {selectedReport ? 'Detail Laporan' : 'Laporan Terbaru'}
              </h3>

              {selectedReport ? (
                <div className="space-y-4">
                  <div className={`border-l-4 p-4 bg-gray-50 rounded-r-lg ${getSeverityColor(selectedReport.severity)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{selectedReport.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedReport.status)}`}>
                        {selectedReport.status === 'pending' ? 'Menunggu' : 
                         selectedReport.status === 'in-progress' ? 'Proses' : 'Selesai'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{selectedReport.description}</p>
                    
                    <div className="space-y-2 text-xs text-gray-500">
                      <div>Dilaporkan: {selectedReport.reporter}</div>
                      <div>Tanggal: {selectedReport.date}</div>
                      <div className="flex items-center">
                        Kategori: 
                        <span className={`ml-2 px-2 py-1 rounded ${
                          selectedReport.type === 'sampah' ? 'bg-orange-100 text-orange-700' :
                          selectedReport.type === 'polusi' ? 'bg-red-100 text-red-700' :
                          selectedReport.type === 'banjir' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {selectedReport.type.charAt(0).toUpperCase() + selectedReport.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center text-green-800 mb-2">
                      <Camera className="h-4 w-4 mr-2" />
                      <span className="font-medium">Foto Laporan</span>
                    </div>
                    <div className="w-full h-32 bg-green-100 rounded-lg flex items-center justify-center">
                      <Camera className="h-8 w-8 text-green-400" />
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedReport(null)}
                    className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Tutup Detail
                  </button>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredReports.slice(0, 5).map(report => (
                    <div
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className={`p-3 border-l-4 bg-gray-50 rounded-r-lg cursor-pointer hover:bg-gray-100 transition-colors ${getSeverityColor(report.severity)}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 text-sm">{report.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {report.status === 'pending' ? 'Baru' : 
                           report.status === 'in-progress' ? 'Proses' : 'Selesai'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{report.description.substring(0, 60)}...</p>
                      <div className="text-xs text-gray-500">
                        {report.reporter} • {report.date}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowReportForm(true)}
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 flex items-center transition-all duration-200"
                >
                  <Plus className="h-5 w-5 mr-3" />
                  <span className="font-medium">Laporkan Masalah</span>
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 flex items-center transition-all duration-200">
                  <Users className="h-5 w-5 mr-3" />
                  <span className="font-medium">Event Terdekat</span>
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-3 flex items-center transition-all duration-200">
                  <Award className="h-5 w-5 mr-3" />
                  <span className="font-medium">Lihat Poin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Laporan Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 rounded-t-xl">
              <h3 className="text-xl font-bold text-white">Laporkan Masalah Lingkungan</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori Masalah</label>
                <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>Pilih kategori...</option>
                  <option>Sampah</option>
                  <option>Polusi</option>
                  <option>Banjir</option>
                  <option>Infrastruktur</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Judul Laporan</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Contoh: Tumpukan sampah di jalan..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Jelaskan masalah secara detail..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Foto</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
                  <Camera className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Klik untuk upload foto</p>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowReportForm(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={() => {
                    setShowReportForm(false);
                    // Logic untuk submit laporan
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
                >
                  Kirim Laporan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoTrackMap;