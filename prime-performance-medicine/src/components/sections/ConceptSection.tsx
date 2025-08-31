'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Target, TrendingUp, Shield, Users, Microscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const concepts = [
  {
    icon: Brain,
    title: 'Otimização Cognitiva',
    description: 'Melhoria da função cerebral, foco e tomada de decisões através de protocolos científicos avançados.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Performance Cardiovascular',
    description: 'Maximização da eficiência cardíaca e resistência através de análise detalhada e treinamento específico.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Energia e Metabolismo',
    description: 'Otimização dos processos metabólicos para maior energia, recuperação e composição corporal ideal.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Target,
    title: 'Precisão Diagnóstica',
    description: 'Avaliações detalhadas usando tecnologia avançada para identificar pontos específicos de melhoria.',
    color: 'from-blue-500 to-blue-600'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Aumento de Performance',
    description: 'Melhoria mensurável em indicadores físicos, cognitivos e emocionais.',
    stats: '+32% em média'
  },
  {
    icon: Shield,
    title: 'Prevenção de Lesões',
    description: 'Identificação precoce de desequilíbrios e fatores de risco.',
    stats: '-65% lesões'
  },
  {
    icon: Users,
    title: 'Abordagem Personalizada',
    description: 'Protocolos individualizados baseados em características únicas.',
    stats: '100% customizado'
  },
  {
    icon: Microscope,
    title: 'Base Científica',
    description: 'Métodos validados por pesquisa e evidência clínica robusta.',
    stats: '15+ anos estudo'
  }
];

const pillars = [
  {
    number: '01',
    title: 'Avaliação Integral',
    description: 'Análise completa dos sistemas cardiovascular, neuromuscular, metabólico e cognitivo usando protocolos cientificamente validados.',
    details: [
      'Testes de performance cardiorrespiratória',
      'Análise de composição corporal avançada',
      'Avaliação neuromuscular e biomecânica',
      'Marcadores bioquímicos específicos'
    ]
  },
  {
    number: '02',
    title: 'Intervenção Personalizada',
    description: 'Desenvolvimento de protocolos individualizados baseados nos resultados da avaliação e objetivos específicos.',
    details: [
      'Prescrição de exercícios otimizada',
      'Protocolos nutricionais personalizados',
      'Estratégias de recuperação específicas',
      'Monitoramento contínuo de progresso'
    ]
  },
  {
    number: '03',
    title: 'Monitoramento Científico',
    description: 'Acompanhamento contínuo usando métricas objetivas e tecnologia avançada para ajustes em tempo real.',
    details: [
      'Análise de dados em tempo real',
      'Ajustes baseados em evidências',
      'Relatórios detalhados de progresso',
      'Otimização contínua de protocolos'
    ]
  }
];

export function ConceptSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O Que É{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
              Medicina de Performance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma abordagem revolucionária que combina medicina baseada em evidências com 
            tecnologia avançada para otimizar o potencial humano em todas as suas dimensões.
          </p>
        </motion.div>

        {/* Core Concepts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${concept.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <concept.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {concept.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Benefícios Comprovados
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados mensuráveis baseados em mais de 1000 avaliações realizadas 
              e protocolos cientificamente validados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {benefit.stats}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Os Três Pilares da Medicina de Performance
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa metodologia se baseia em três pilares fundamentais que garantem 
              resultados consistentes e sustentáveis.
            </p>
          </div>

          <div className="space-y-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-bold text-lg rounded-full">
                      {pillar.number}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      {pillar.title}
                    </h4>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-64 bg-gradient-to-br from-blue-100 via-white to-orange-100 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                    {/* Decorative elements based on pillar */}
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="h-4 bg-gradient-to-r from-blue-300 to-blue-400 rounded animate-pulse"></div>
                        <div className="h-4 bg-gradient-to-r from-green-300 to-green-400 rounded animate-pulse delay-100"></div>
                        <div className="h-4 bg-gradient-to-r from-orange-300 to-orange-400 rounded animate-pulse delay-200"></div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                          <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center">
                            <Heart className="h-8 w-8 text-red-500" />
                          </div>
                          <div className="h-16 bg-white rounded-lg shadow flex items-center justify-center">
                            <Brain className="h-8 w-8 text-purple-500" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                          <Target className="h-16 w-16 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">Protocolo Personalizado</div>
                          <div className="text-lg font-semibold text-gray-900">100% Customizado</div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Progresso</span>
                          <span className="text-lg font-semibold text-green-600">+24%</span>
                        </div>
                        <div className="space-y-3">
                          {[85, 72, 91, 68].map((value, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${value}%` }}
                                  transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                  viewport={{ once: true }}
                                  className="h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                                />
                              </div>
                              <span className="text-sm text-gray-600 w-10">{value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Revolucionar Sua Performance?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra seu potencial máximo através de avaliações científicas 
            e protocolos personalizados de otimização.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Iniciar Minha Jornada
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}