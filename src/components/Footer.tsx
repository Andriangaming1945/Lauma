import { Leaf, MapPin, Bell, Users, Award, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function LaumaFooter() {
  return (
  <footer className="bg-gradient-to-br from-emerald-100 via-teal-100 to-green-100 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Lauma
                </span>
                <p className="text-xs text-emerald-600">Platform Pemantauan Lingkungan</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Membantu warga memantau dan menjaga lingkungan sekitar melalui teknologi dan kolaborasi komunitas untuk perubahan yang berkelanjutan.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-emerald-100 hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700" />
              </a>
              <a href="#" className="w-8 h-8 bg-emerald-100 hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700" />
              </a>
              <a href="#" className="w-8 h-8 bg-emerald-100 hover:bg-emerald-200 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Fitur Utama</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <MapPin className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>Dashboard Lingkungan</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <Bell className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>Pelaporan Masalah</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <Users className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>Komunitas Warga</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <Award className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>Sistem Reward</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Beranda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Peta Interaktif</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Lapor Masalah</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Event Lingkungan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Leaderboard</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@lauma.id" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <Mail className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>info@lauma.id</span>
                </a>
              </li>
              <li>
                <a href="tel:+62123456789" className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm group">
                  <Phone className="w-4 h-4 group-hover:text-emerald-500" />
                  <span>+62 123 456 789</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-emerald-500" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg">
                Bergabung Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-white/60 rounded-2xl border border-emerald-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">1,234</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Warga Terdaftar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">856</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Laporan Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">42</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">RT/RW Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">89%</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Tingkat Kepuasan</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-emerald-200">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2025 Lauma. Dibuat dengan ❤️ untuk lingkungan yang lebih baik.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Bantuan</a>
          </div>
        </div>
      </div>

    
    </footer>
  );
}