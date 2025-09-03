'use client';

import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CooperTestCalculator } from '@/components/calculators/CooperTestCalculator';
import { OneRMCalculator } from '@/components/calculators/OneRMCalculator';
import { BodyFatCalculator } from '@/components/calculators/BodyFatCalculator';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Dumbbell, Users, ChevronRight, Target, Clock, BarChart3 } from 'lucide-react';

const protocols = [
  {
    id: 'cooper',
    title: 'Teste de Cooper',
    description: 'Avalie sua capacidade aeróbica através da distância percorrida em 12 minutos',
    icon: Activity,
    component: CooperTestCalculator,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    category: 'Cardio',
    duration: '12 min',
    difficulty: 'Básico'
  },
  {
    id: '1rm',
    title: 'Teste de 1RM',
    description: 'Estime sua força máxima através de repetições submáximas',
    icon: Dumbbell,
    component: OneRMCalculator,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    category: 'Força',
    duration: '15 min',
    difficulty: 'Intermediário'
  },
  {
    id: 'body-fat',
    title: 'Composição Corporal',
    description: 'Analise sua composição corporal com métodos cientificamente validados',
    icon: Users,
    component: BodyFatCalculator,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    category: 'Composição',
    duration: '10 min',
    difficulty: 'Básico'
  }
];

export default function ProtocolsPage() {
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null);

  const selectedProtocolData = protocols.find(p => p.id === selectedProtocol);

  return (
    <Layout>
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Protocolos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Avaliação
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolha um protocolo científico para avaliar diferentes aspectos da sua performance física. 
              Todos os métodos são baseados em pesquisa validada e utilizados por profissionais.
            </p>
          </motion.div>

          {selectedProtocol ? (
            /* Calculator View */
            <div className="space-y-6">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => setSelectedProtocol(null)}
                  className="mb-4"
                >
                  ← Voltar aos Protocolos
                </Button>
              </motion.div>

              {/* Selected Calculator */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProtocol}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {selectedProtocolData && (
                    <selectedProtocolData.component />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Protocol Selection View */
            <div className="space-y-8">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { icon: Target, value: '3', label: 'Protocolos Disponíveis' },
                  { icon: Clock, value: '10-15', label: 'Minutos por Teste' },
                  { icon: BarChart3, value: '95%', label: 'Precisão Científica' }
                ].map((stat, index) => (
                  <Card key={stat.label} className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full mb-4">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </motion.div>

              {/* Protocol Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {protocols.map((protocol, index) => (
                  <motion.div
                    key={protocol.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProtocol(protocol.id)}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${protocol.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-4 ${protocol.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <protocol.icon className={`h-8 w-8 ${protocol.textColor}`} />
                          </div>
                          <div className="text-right text-sm space-y-1">
                            <div className={`inline-flex items-center px-3 py-1 ${protocol.bgColor} ${protocol.textColor} rounded-full text-xs font-medium`}>
                              {protocol.difficulty}
                            </div>
                            <div className="flex items-center text-gray-500 justify-end">
                              <Clock className="h-3 w-3 mr-1" />
                              {protocol.duration}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {protocol.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {protocol.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${protocol.bgColor} ${protocol.textColor}`}>
                            {protocol.category}
                          </span>
                          <ChevronRight className={`h-5 w-5 ${protocol.textColor} group-hover:translate-x-1 transition-transform`} />
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Information Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Por que usar nossos protocolos?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Cientificamente Validados</h4>
                    <p className="text-gray-600 mb-4">
                      Todos os protocolos são baseados em métodos cientificamente validados 
                      e amplamente utilizados na literatura esportiva e médica.
                    </p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Fácil Aplicação</h4>
                    <p className="text-gray-600">
                      Interface intuitiva e instruções claras permitem que qualquer pessoa 
                      realize as avaliações com segurança e precisão.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Resultados Detalhados</h4>
                    <p className="text-gray-600 mb-4">
                      Receba análises completas com interpretação dos resultados, 
                      categorização e recomendações personalizadas.
                    </p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Acompanhamento</h4>
                    <p className="text-gray-600">
                      Histórico de avaliações para monitorar seu progresso ao longo 
                      do tempo e ajustar estratégias de treinamento.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}