'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();  // <-- Get current path

  const navigationItems = [
    { title: 'Home', url: '/' },
    { title: 'Menu', url: '/menu' },
    { title: 'Schedule', url: '/schedule' },
    { title: 'Contact', url: '/contact' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/78706eb61_4246C484-AFB8-4353-BD61-F92A75D806F8.png"
              alt="The Right Seasons Mobile Kitchen"
              className="h-14 w-14"
              loading="lazy"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-amber-900">The Right Seasons</h1>
              <p className="text-sm text-amber-700">Mobile Kitchen</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-100 text-amber-800 shadow-sm'
                      : 'text-amber-700 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  <span className="font-medium">{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-amber-200 bg-white/95 backdrop-blur-sm">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-amber-100 text-amber-800' : 'text-amber-700 hover:bg-amber-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
