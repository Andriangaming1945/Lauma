import React, { useState, useEffect } from 'react';
import { Leaf, MapPin, BarChart3, Users, Award, Bell } from 'lucide-react';

const EcoTrackNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: BarChart3, href: '#dashboard' },
    { name: 'Peta Interaktif', icon: MapPin, href: '#map' },
    { name: 'Komunitas', icon: Users, href: '#community' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Isi navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                Lauma
              </span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className={`flex space-x-1 px-2 py-2 transition-all duration-300 ${
                isScrolled
                  ? 'bg-emerald-50/50 rounded-full shadow-sm border border-emerald-100'
                  : 'bg-white rounded-full shadow-lg border border-emerald-100'
              }`}
            >
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span className="hidden lg:block">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="relative p-2 rounded-full transition-all duration-200 hover:bg-sky-100">
              <div className="w-9 h-9 bg-sky-600 rounded-full flex items-center justify-center shadow-md">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>

          {/* Menu Mobile - Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-sm my-1 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-800 rounded-sm transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Dropdown Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-white/95 backdrop-blur-md rounded-b-xl shadow-lg border-t border-emerald-100">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
            <div className="border-t border-emerald-100 pt-4 mt-4">
              <div className="flex items-center space-x-3 px-4 py-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Andi Pratama</p>
                  <p className="text-sm text-gray-600">250 EcoPoints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EcoTrackNavbar;