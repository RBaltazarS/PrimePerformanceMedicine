'use client';

import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { Stethoscope, Target, Users, Award, Heart, Brain, Zap, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Cuidado Personalizado',
    description: 'Cada indivíduo é único. Nossos protocolos são adaptados às características e objetivos específicos de cada pessoa.'
  },
  {
    icon: Brain,
    title: 'Ciência Aplicada',
    description: 'Baseamos todas as nossas metodologias em evidências científicas sólidas e pesquisas atualizadas.'
  },
  {
    icon: Zap,
    title: 'Excelência Técnica',
    description: 'Comprometimento com a mais alta qualidade em todas as avaliações e recomendações oferecidas.'
  },
  {
    icon: TrendingUp,
    title: 'Evolução Contínua',
    description: 'Monitoramento constante do progresso para ajustes e otimizações baseados em resultados reais.'
  }
];

const stats = [
  { value: '1000+', label: 'Avaliações Realizadas', icon: Users },
  { value: '15+', label: 'Anos de Experiência', icon: Award },
  { value: '95%', label: 'Taxa de Satisfação', icon: Heart },
  { value: '3', label: 'Protocolos Validados', icon: Target }
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Prime Performance Medicine
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos pioneiros em medicina de performance, combinando ciência avançada 
              com tecnologia inovadora para maximizar o potencial humano.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Revolucionar a abordagem tradicional da medicina através da implementação 
                de protocolos científicos de avaliação e otimização da performance humana.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Acreditamos que todos podem alcançar níveis superiores de performance 
                física, mental e emocional quando munidos das ferramentas e conhecimentos corretos.
              </p>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Medicina Baseada em Evidências</h3>
                  <p className="text-gray-600">Protocolos validados cientificamente</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Otimizada</h3>
                  <p className="text-gray-600">Resultados mensuráveis e sustentáveis</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Os princípios que guiam nossa abordagem e definem nosso compromisso 
                com a excelência em medicina de performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 lg:p-12 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Resultados que Comprovam nossa Excelência
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Números que refletem nosso compromisso com a qualidade e eficácia 
                dos nossos protocolos de avaliação.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Profissionais altamente qualificados e especializados em medicina de performance, 
                unidos pela paixão em otimizar o potencial humano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dr. Carlos Silva',
                  role: 'Médico do Esporte',
                  specialization: 'Fisiologia do Exercício',
                  experience: '15+ anos'
                },
                {
                  name: 'Profa. Maria Santos',
                  role: 'Educadora Física',
                  specialization: 'Treinamento de Alto Rendimento',
                  experience: '12+ anos'
                },
                {
                  name: 'Dr. Rodrigo Oliveira',
                  role: 'Nutricionista Esportivo',
                  specialization: 'Composição Corporal',
                  experience: '10+ anos'
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="text-center p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-1">{member.specialization}</p>
                    <p className="text-gray-500 text-sm">{member.experience}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gray-50 rounded-3xl p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para Otimizar sua Performance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de pessoas que já descobriram seu potencial máximo 
              através dos nossos protocolos científicos de avaliação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/protocolos" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Iniciar Avaliação
              </a>
              <a 
                href="/contato" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}