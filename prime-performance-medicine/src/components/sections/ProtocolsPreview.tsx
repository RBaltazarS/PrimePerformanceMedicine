'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Dumbbell, Users, ArrowRight, Clock, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const protocols = [
  {
    id: 'cooper-test',
    title: 'Teste de Cooper',
    description: 'Avalie sua capacidade aeróbica através da distância percorrida em 12 minutos. Método padrão ouro para VO2 Max.',
    icon: Activity,
    difficulty: 'Básico',
    duration: '12 min',
    category: 'Cardio',
    benefits: [
      'Avaliação da capacidade cardiovascular',
      'Cálculo preciso do VO2 Max',
      'Comparação com padrões populacionais',
      'Prescrição de exercícios personalizada'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    href: '/protocolos/cooper'
  },
  {
    id: 'one-rm-test',
    title: 'Teste de 1RM',
    description: 'Estime sua força máxima através de repetições submáximas. Múltiplas fórmulas científicas validadas.',
    icon: Dumbbell,
    difficulty: 'Intermediário',
    duration: '15 min',
    category: 'Força',
    benefits: [
      'Estimativa segura da força máxima',
      'Zonas de treinamento personalizadas',
      'Acompanhamento da evolução',
      'Prevenção de lesões'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    href: '/protocolos/1rm'
  },
  {
    id: 'body-composition',
    title: 'Composição Corporal',
    description: 'Analise sua composição corporal com métodos cientificamente validados: Navy, BMI e medidas antropométricas.',
    icon: Users,
    difficulty: 'Básico',
    duration: '10 min',
    category: 'Composição',
    benefits: [
      'Percentual de gordura preciso',
      'Múltiplos métodos de cálculo',
      'Interpretação personalizada',
      'Monitoramento de progresso'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    href: '/protocolos/gordura-corporal'
  }
];

const stats = [
  {
    value: '1000+',
    label: 'Avaliações Realizadas',
    icon: BarChart3
  },
  {
    value: '3',
    label: 'Protocolos Validados',
    icon: Activity
  },
  {
    value: '95%',
    label: 'Precisão dos Resultados',
    icon: Users
  }
];

export function ProtocolsPreview() {
  return (
    <section id="protocols-preview" className="py-20 bg-gray-50">
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
            Protocolos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
              Avaliação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ferramentas científicas para avaliação completa da sua performance física. 
            Protocolos validados e utilizados por profissionais do esporte.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${protocol.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 ${protocol.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <protocol.icon className={`h-8 w-8 ${protocol.textColor}`} />
                    </div>
                    <div className="text-right text-sm">
                      <div className={`inline-flex items-center px-2 py-1 ${protocol.bgColor} ${protocol.textColor} rounded-full text-xs font-medium mb-1`}>
                        {protocol.difficulty}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {protocol.duration}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {protocol.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {protocol.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                    <ul className="space-y-2">
                      {protocol.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 rounded-full ${protocol.textColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link href={protocol.href} className="block">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:border-blue-500 group-hover:text-blue-600 transition-colors"
                    >
                      <span>Iniciar Teste</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para descobrir seu potencial?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Escolha um protocolo e inicie sua jornada de otimização da performance. 
              Todos os testes são baseados em métodos cientificamente validados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/protocolos">
                <Button variant="cta" size="lg" className="group">
                  Ver Todos os Protocolos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/artigos">
                <Button variant="outline" size="lg">
                  Conhecer a Ciência
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}