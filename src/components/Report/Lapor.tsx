import React, { useState, useEffect } from 'react';
import { Camera, MapPin, CheckCircle, ArrowLeft, ArrowRight, Navigation, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LaumaReportFeature = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [reportData, setReportData] = useState({
    title: '',
    environmentalIssue: '',
    photo: null,
    location: { lat: null, lng: null, address: '' },
    description: ''
  });
  const [gpsActive, setGpsActive] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setGpsActive(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const detectLocation = () => {
    setReportData(prev => ({
      ...prev,
      location: {
        lat: -6.2088,
        lng: 106.8456,
        address: 'Jakarta Pusat, DKI Jakarta, Indonesia'
      }
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setReportData(prev => ({
          ...prev,
          photo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Laporan berhasil dikirim!');
      // Reset form
      setReportData({
        title: '',
        environmentalIssue: '',
        photo: null,
        location: { lat: null, lng: null, address: '' },
        description: ''
      });
      setCurrentStep(1);
    }, 2000);
  };

  const renderInteractiveMap = () => {
    return (
      <div className="mt-4 bg-white rounded-lg border-2 border-green-200 overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 relative">
          {/* Map Background */}
          <div className="absolute inset-0">
            <div className="grid grid-cols-8 grid-rows-8 h-full opacity-10">
              {Array(64).fill(null).map((_, i) => (
                <div key={i} className="border border-green-300"></div>
              ))}
            </div>
          </div>
          
          {/* Roads */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
            <path d="M30 128 L226 128" stroke="#22c55e" strokeWidth="3" opacity="0.6"/>
            <path d="M128 30 L128 226" stroke="#22c55e" strokeWidth="3" opacity="0.6"/>
            <path d="M60 60 L196 196" stroke="#22c55e" strokeWidth="2" opacity="0.4"/>
            <path d="M196 60 L60 196" stroke="#22c55e" strokeWidth="2" opacity="0.4"/>
          </svg>
          
          {/* Location Markers */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse Animation */}
              <div className="absolute -inset-4 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="absolute -inset-2 bg-green-500 rounded-full animate-ping opacity-40"></div>
              
              {/* Main Location Pin */}
              <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              
              {/* Location Label */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-green-200">
                <span className="text-xs font-medium text-green-700">Lokasi Anda</span>
              </div>
            </div>
          </div>
          
          {/* Nearby Locations */}
          <div className="absolute top-16 left-16 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">
              +
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50">
              -
            </button>
          </div>
          
          {/* Compass */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center relative">
              <div className="w-1 h-3 bg-red-500 rounded-full absolute -top-1"></div>
              <div className="w-1 h-3 bg-gray-400 rounded-full absolute -bottom-1"></div>
              <span className="text-xs font-bold text-green-700">N</span>
            </div>
          </div>
          
          {/* Scale */}
          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-200">
            <span className="text-xs text-gray-600">100m</span>
          </div>
        </div>
        
        {/* Map Info Panel */}
        <div className="p-4 bg-white border-t border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-800">Lauma GPS - Live Tracking</h4>
              <p className="text-sm text-gray-600">Akurasi: ±3 meter</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Connected</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const steps = [
    {
      number: 1,
      title: "Tekan tombol 'Mulai Sekarang!' di halaman utama",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Selamat datang di Fitur Laporan Lingkungan</h3>
            <p className="text-green-700 mb-6">
              Laporkan masalah lingkungan di sekitar Anda untuk membantu menjaga kelestarian lingkungan.
            </p>
            <button 
              onClick={handleNext}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Mulai Sekarang!
            </button>
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Pilih jenis masalah lingkungan yang akan dilaporkan",
      content: (
        <div className="space-y-4">
          {[
            'Pencemaran Air',
            'Pencemaran Udara', 
            'Sampah Ilegal',
            'Kerusakan Hutan',
            'Pencemaran Tanah',
            'Lainnya'
          ].map((issue, index) => (
            <label key={index} className="flex items-center space-x-3 p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-green-300 cursor-pointer transition-colors">
              <input
                type="radio"
                name="environmentalIssue"
                value={issue}
                checked={reportData.environmentalIssue === issue}
                onChange={(e) => setReportData(prev => ({...prev, environmentalIssue: e.target.value}))}
                className="w-4 h-4 text-green-600 focus:ring-green-500"
              />
              <span className="text-gray-700">{issue}</span>
            </label>
          ))}
        </div>
      )
    },
    {
      number: 3,
      title: "Ambil foto dengan kamera atau pilih dari galeri",
      content: (
        <div className="space-y-6">
          <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center">
            {reportData.photo ? (
              <div className="space-y-4">
                <img src={reportData.photo} alt="Preview" className="max-w-full h-48 object-cover rounded-lg mx-auto" />
                <p className="text-green-600">Foto berhasil dipilih</p>
              </div>
            ) : (
              <div className="space-y-4">
                <Camera className="w-16 h-16 text-green-400 mx-auto" />
                <p className="text-gray-600">Tambahkan foto masalah lingkungan</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition-colors"
            >
              {reportData.photo ? 'Ganti Foto' : 'Pilih Foto'}
            </label>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Sistem akan mendeteksi lokasi GPS secara otomatis",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-4 h-4 rounded-full ${gpsActive ? 'bg-green-500 animate-pulse' : 'bg-green-300'}`}></div>
              <Navigation className={`w-6 h-6 ${gpsActive ? 'text-green-600' : 'text-green-400'} ${gpsActive ? 'animate-spin' : ''}`} />
              <span className="text-green-700 font-medium">
                {gpsActive ? 'GPS Aktif - Mendeteksi Lokasi...' : 'GPS Standby'}
              </span>
            </div>
            
            {reportData.location.address ? (
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-medium text-green-800">Lokasi Terdeteksi:</p>
                    <p className="text-green-700">{reportData.location.address}</p>
                    <p className="text-sm text-green-600">
                      Koordinat: {reportData.location.lat}, {reportData.location.lng}
                    </p>
                  </div>
                </div>
                {renderInteractiveMap()}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-green-600 animate-spin" />
                  </div>
                  <p className="text-green-700 font-medium mb-2">Menginisialisasi Lauma GPS...</p>
                  <p className="text-sm text-green-600">Pastikan lokasi diizinkan untuk akurasi terbaik</p>
                </div>
                <button
                  onClick={detectLocation}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Aktifkan GPS & Deteksi Lokasi
                </button>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Tambahkan deskripsi singkat dan kirim laporan",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Laporan
            </label>
            <input
              type="text"
              value={reportData.title}
              onChange={(e) => setReportData(prev => ({...prev, title: e.target.value}))}
              placeholder="Masukkan judul laporan..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Detail
            </label>
            <textarea
              value={reportData.description}
              onChange={(e) => setReportData(prev => ({...prev, description: e.target.value}))}
              placeholder="Jelaskan masalah lingkungan yang Anda temukan..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Ringkasan Laporan:</h4>
            <div className="space-y-1 text-sm text-green-700">
              <p>• Jenis Masalah: {reportData.environmentalIssue || 'Belum dipilih'}</p>
              <p>• Foto: {reportData.photo ? 'Sudah ditambahkan' : 'Belum ditambahkan'}</p>
              <p>• Lokasi: {reportData.location.address || 'Belum terdeteksi'}</p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !reportData.environmentalIssue || !reportData.photo || !reportData.location.address}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Mengirim Laporan...' : 'Kirim Laporan'}
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-200">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Kiri: Logo + Judul */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Lauma GPS</h1>
              <p className="text-sm text-gray-600">
                Environmental Monitoring System
              </p>
            </div>
          </div>

          {/* Kanan: Tombol kembali */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali</span>
          </button>
        </div>
      </div>
    </div>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-green-600">{currentStep} / 5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
              currentStep === steps[currentStep - 1].number ? 'bg-green-600' : 'bg-gray-400'
            }`}>
              {steps[currentStep - 1].number}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {steps[currentStep - 1].title}
              </h2>
              {steps[currentStep - 1].content}
            </div>
          </div>
        </div>

        
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
            {/* Tombol konfirmasi posisi */}
  {currentStep === 4 && (
    <button
      onClick={() => {
        alert('Posisi sudah dikonfirmasi!');
        handleNext();
      }}
      disabled={!reportData.location.address}
      className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Apakah posisi Anda sudah tepat? Klik di sini
    </button>
  )}



        

          <button
            onClick={handleNext}
            disabled={currentStep === 5}
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* GPS Status Indicator */}
      <div className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg border border-green-200">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${gpsActive ? 'bg-green-500 animate-pulse' : 'bg-green-300'}`}></div>
          <Navigation className={`w-5 h-5 text-green-600 ${gpsActive ? 'animate-spin' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default LaumaReportFeature;