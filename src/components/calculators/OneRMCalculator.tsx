'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Dumbbell, Calculator, Target, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { calculateOneRM, validateOneRM } from '@/lib/calculations';
import { useAssessmentActions } from '@/contexts/AssessmentContext';
import { CalculationResult } from '@/types';

// Zod schema for form validation
const oneRMSchema = z.object({
  weight: z.number().min(1, 'Peso deve ser pelo menos 1kg').max(500, 'Peso deve ser no máximo 500kg'),
  repetitions: z.number().min(1, 'Deve ser pelo menos 1 repetição').max(20, 'Máximo 20 repetições para estimativa confiável'),
  exercise: z.string().min(1, 'Exercício é obrigatório'),
  experience: z.enum(['beginner', 'intermediate', 'advanced'], { required_error: 'Nível de experiência é obrigatório' })
});

type OneRMFormData = z.infer<typeof oneRMSchema>;

interface OneRMCalculatorProps {
  onResult?: (result: CalculationResult) => void;
}

export function OneRMCalculator({ onResult }: OneRMCalculatorProps) {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const { addResult } = useAssessmentActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<OneRMFormData>({
    resolver: zodResolver(oneRMSchema)
  });

  const exerciseOptions = [
    { value: 'bench-press', label: 'Supino Reto' },
    { value: 'squat', label: 'Agachamento' },
    { value: 'deadlift', label: 'Levantamento Terra' },
    { value: 'overhead-press', label: 'Desenvolvimento' },
    { value: 'incline-press', label: 'Supino Inclinado' },
    { value: 'row', label: 'Remada' },
    { value: 'other', label: 'Outro' }
  ];

  const experienceOptions = [
    { value: 'beginner', label: 'Iniciante (0-1 anos)' },
    { value: 'intermediate', label: 'Intermediário (1-3 anos)' },
    { value: 'advanced', label: 'Avançado (3+ anos)' }
  ];

  const watchedValues = watch();

  const onSubmit = async (data: OneRMFormData) => {
    setIsCalculating(true);
    
    try {
      // Validate inputs
      const validation = validateOneRM(data);
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      // Calculate result
      const calculationResult = calculateOneRM({
        weight: data.weight,
        repetitions: data.repetitions,
        exercise: data.exercise,
        experience: data.experience
      });

      setResult(calculationResult);
      
      // Save to context
      addResult('one-rm-test', calculationResult, {
        weight: data.weight,
        repetitions: data.repetitions,
        exercise: data.exercise === 'male' ? 1 : 0, // This is a hack, need to store string properly
        experience: data.experience === 'beginner' ? 1 : data.experience === 'intermediate' ? 2 : 3
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
      case 'Elite':
        return 'text-purple-600 bg-purple-50';
      case 'Avançado':
        return 'text-green-600 bg-green-50';
      case 'Intermediário':
        return 'text-blue-600 bg-blue-50';
      case 'Iniciante':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // Calculate percentage ranges for training
  const getTrainingZones = (oneRM: number) => {
    return {
      strength: Math.round(oneRM * 0.85),
      hypertrophy: Math.round(oneRM * 0.75),
      endurance: Math.round(oneRM * 0.65),
      power: Math.round(oneRM * 0.55)
    };
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
              <div className="p-2 bg-orange-100 rounded-lg">
                <Dumbbell className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Teste de 1RM</h2>
                <p className="text-gray-600">Estimativa da força máxima para uma repetição</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">Instruções:</h3>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Realize um aquecimento adequado</li>
                    <li>• Execute o máximo de repetições possível</li>
                    <li>• Mantenha a técnica perfeita</li>
                    <li>• Use uma carga que permita 1-20 repetições</li>
                    <li>• Tenha supervisão quando necessário</li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Select
                    label="Exercício"
                    options={exerciseOptions}
                    placeholder="Selecione o exercício"
                    {...register('exercise')}
                    error={errors.exercise?.message}
                  />

                  <Input
                    label="Peso levantado (kg)"
                    type="number"
                    step="0.5"
                    placeholder="Ex: 80"
                    {...register('weight', { valueAsNumber: true })}
                    error={errors.weight?.message}
                    helperText="Peso que conseguiu levantar"
                  />

                  <Input
                    label="Número de repetições"
                    type="number"
                    placeholder="Ex: 8"
                    {...register('repetitions', { valueAsNumber: true })}
                    error={errors.repetitions?.message}
                    helperText="Repetições máximas realizadas com essa carga"
                  />

                  <Select
                    label="Nível de experiência"
                    options={experienceOptions}
                    placeholder="Selecione sua experiência"
                    {...register('experience')}
                    error={errors.experience?.message}
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
                          <span>Calcular 1RM</span>
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

                {/* Live Preview */}
                {watchedValues.weight && watchedValues.repetitions && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Prévia do Cálculo:</h4>
                    <p className="text-sm text-gray-700">
                      {watchedValues.weight}kg × {watchedValues.repetitions} reps = 
                      <span className="font-medium text-orange-600 ml-1">
                        ~{Math.round(watchedValues.weight * (1 + watchedValues.repetitions / 30))}kg (1RM estimado)
                      </span>
                    </p>
                  </div>
                )}
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
                          <div className="text-3xl font-bold text-orange-600 mb-2">
                            {result.value} {result.unit}
                          </div>
                          <div className="text-lg text-gray-700">
                            {result.interpretation}
                          </div>
                        </div>

                        {result.category && (
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getResultColor(result.category)}`}>
                            <Target className="h-4 w-4 mr-2" />
                            Nível: {result.category}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Training Zones */}
                    <Card variant="outlined">
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-gray-900">Zonas de Treinamento</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(getTrainingZones(result.value)).map(([zone, weight]) => {
                            const zoneInfo = {
                              strength: { label: 'Força (85%)', color: 'bg-red-500', desc: '1-5 reps' },
                              hypertrophy: { label: 'Hipertrofia (75%)', color: 'bg-blue-500', desc: '6-12 reps' },
                              endurance: { label: 'Resistência (65%)', color: 'bg-green-500', desc: '12+ reps' },
                              power: { label: 'Potência (55%)', color: 'bg-yellow-500', desc: '1-5 reps explosivas' }
                            };
                            
                            const info = zoneInfo[zone as keyof typeof zoneInfo];
                            
                            return (
                              <div key={zone} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-3 h-3 rounded-full ${info.color}`}></div>
                                  <div>
                                    <div className="font-medium text-gray-900">{info.label}</div>
                                    <div className="text-sm text-gray-600">{info.desc}</div>
                                  </div>
                                </div>
                                <div className="font-bold text-gray-900">{weight}kg</div>
                              </div>
                            );
                          })}
                        </div>
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
                              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <Dumbbell className="h-16 w-16 mb-4 opacity-50" />
                    <p className="text-lg font-medium">Aguardando dados do teste</p>
                    <p className="text-sm">Preencha o formulário para calcular seu 1RM</p>
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