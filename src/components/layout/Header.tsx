'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Stethoscope, Activity, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Início', href: '/' },
  { label: 'Protocolos', href: '/protocolos', icon: Activity },
  { label: 'Artigos', href: '/artigos', icon: BookOpen },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Prime Performance Medicine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="cta" size="md">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button variant="cta" size="md" className="w-full">
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}