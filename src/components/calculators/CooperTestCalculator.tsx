'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Calculator, Activity, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { calculateCooperTest, validateCooperTest } from '@/lib/calculations';
import { useAssessmentActions } from '@/contexts/AssessmentContext';
import { CalculationResult } from '@/types';

// Zod schema for form validation
const cooperTestSchema = z.object({
  distance: z.number().min(500, 'Distância deve ser pelo menos 500m').max(5000, 'Distância deve ser no máximo 5000m'),
  age: z.number().min(15, 'Idade deve ser pelo menos 15 anos').max(80, 'Idade deve ser no máximo 80 anos'),
  gender: z.enum(['male', 'female'], { required_error: 'Gênero é obrigatório' }),
  weight: z.number().min(30).max(200).optional()
});

type CooperTestFormData = z.infer<typeof cooperTestSchema>;

interface CooperTestCalculatorProps {
  onResult?: (result: CalculationResult) => void;
}

export function CooperTestCalculator({ onResult }: CooperTestCalculatorProps) {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const { addResult } = useAssessmentActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<CooperTestFormData>({
    resolver: zodResolver(cooperTestSchema)
  });

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' }
  ];

  const onSubmit = async (data: CooperTestFormData) => {
    setIsCalculating(true);
    
    try {
      // Validate inputs
      const validation = validateCooperTest(data);
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      // Calculate result
      const calculationResult = calculateCooperTest({
        distance: data.distance,
        age: data.age,
        gender: data.gender,
        weight: data.weight
      });

      setResult(calculationResult);
      
      // Save to context
      addResult('cooper-test', calculationResult, {
        distance: data.distance,
        age: data.age,
        gender: data.gender === 'male' ? 1 : 0, // Convert for storage
        weight: data.weight || 0
      });

      // Call parent callback if provided
      onResult?.(calculationResult);

    } catch (error) {
      console.error('Erro no cálculo:', error);
      alert('Erro no cálculo. Verifique os dados e tente novamente.');
    } finally {
      setIsCalculating(false);
    }
  };

  const resetCalculator = () => {
    setResult(null);
    reset();
  };

  const getResultColor = (category: string) => {
    switch (category) {
      case 'Excelente':
        return 'text-green-600 bg-green-50';
      case 'Bom':
        return 'text-blue-600 bg-blue-50';
      case 'Médio':
        return 'text-yellow-600 bg-yellow-50';
      case 'Abaixo da Média':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-red-600 bg-red-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Teste de Cooper</h2>
                <p className="text-gray-600">Avaliação da capacidade aeróbica em 12 minutos</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Instruções:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Corra ou caminhe por exatos 12 minutos</li>
                    <li>• Mantenha um ritmo constante</li>
                    <li>• Anote a distância total percorrida</li>
                    <li>• Realize em terreno plano e pista medida</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    label="Distância percorrida (metros)"
                    type="number"
                    placeholder="Ex: 2400"
                    {...register('distance', { valueAsNumber: true })}
                    error={errors.distance?.message}
                    helperText="Distância total percorrida em 12 minutos"
                  />

                  <Input
                    label="Idade (anos)"
                    type="number"
                    placeholder="Ex: 25"
                    {...register('age', { valueAsNumber: true })}
                    error={errors.age?.message}
                  />

                  <Select
                    label="Gênero"
                    options={genderOptions}
                    placeholder="Selecione seu gênero"
                    {...register('gender')}
                    error={errors.gender?.message}
                  />

                  <Input
                    label="Peso corporal (kg) - Opcional"
                    type="number"
                    placeholder="Ex: 70"
                    {...register('weight', { valueAsNumber: true })}
                    error={errors.weight?.message}
                    helperText="Para análise mais detalhada (opcional)"
                  />

                  <div className="flex space-x-3">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isCalculating}
                      className="flex-1"
                    >
                      {isCalculating ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Calculando...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Calculator className="h-4 w-4" />
                          <span>Calcular VO2 Max</span>
                        </div>
                      )}
                    </Button>

                    {result && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetCalculator}
                      >
                        Novo Teste
                      </Button>
                    )}
                  </div>
                </form>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {result ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    {/* Main Result */}
                    <Card variant="outlined">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {result.value} {result.unit}
                          </div>
                          <div className="text-lg text-gray-700">
                            {result.interpretation}
                          </div>
                        </div>

                        {result.category && (
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getResultColor(result.category)}`}>
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Categoria: {result.category}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Recommendations */}
                    <Card variant="outlined">
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-gray-900">Recomendações</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {result.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Additional Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Sobre o VO2 Max:</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        O VO2 Max representa a capacidade máxima do seu corpo de consumir oxigênio 
                        durante o exercício. É considerado o melhor indicador de aptidão 
                        cardiorrespiratória e um preditor importante de saúde cardiovascular.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <Activity className="h-16 w-16 mb-4 opacity-50" />
                    <p className="text-lg font-medium">Aguardando dados do teste</p>
                    <p className="text-sm">Preencha o formulário para calcular seu VO2 Max</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}