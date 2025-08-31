'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Activity, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const stats = [
  {
    icon: Activity,
    value: '1000+',
    label: 'Avaliações Realizadas',
    color: 'text-blue-600'
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'Melhoria na Performance',
    color: 'text-green-600'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Atletas Atendidos',
    color: 'text-orange-600'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Anos de Experiência',
    color: 'text-purple-600'
  }
];

export function HeroSection() {
  const scrollToProtocols = () => {
    const protocolsSection = document.getElementById('protocols-preview');
    if (protocolsSection) {
      protocolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              <Activity className="h-4 w-4 mr-2" />
              Medicina de Performance
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Otimize Sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Performance
              </span>{' '}
              Humana
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Revolucione sua abordagem à saúde e performance através da ciência médica avançada. 
              Ferramentas de avaliação profissionais e conteúdo educacional de alta qualidade.
            </motion.p>

            {/* Key Benefits */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-3 text-gray-700"
            >
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Protocolos de avaliação cientificamente validados</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Análise personalizada de composição corporal e performance</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span>Conteúdo educacional de médicos especialistas</span>
              </li>
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="cta"
                size="lg"
                onClick={scrollToProtocols}
                className="group"
              >
                Iniciar Avaliação
                <Activity className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                Conhecer Protocolos
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-blue-600 to-orange-600 rounded-3xl p-8 shadow-2xl">
              {/* Simulated Dashboard */}
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Análise de Performance</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-100 to-orange-100 rounded-lg flex items-end space-x-2 p-4">
                  {[65, 78, 82, 90, 87, 92, 88].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-t from-blue-500 to-orange-500 rounded-sm flex-1"
                    />
                  ))}
                </div>

                {/* Mock Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">42.5</div>
                    <div className="text-sm text-gray-600">VO2 Max</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-600">15.2%</div>
                    <div className="text-sm text-gray-600">Gordura</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg"
              >
                <TrendingUp className="h-8 w-8 text-green-500" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg"
              >
                <Activity className="h-6 w-6 text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToProtocols}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to protocols"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}