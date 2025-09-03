'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Users, Calculator, Target, Info } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { calculateBodyFat, validateBodyFat } from '@/lib/calculations';
import { useAssessmentActions } from '@/contexts/AssessmentContext';
import { CalculationResult } from '@/types';

// Zod schema for form validation (Navy method)
const bodyFatSchema = z.object({
  height: z.number().min(100, 'Altura deve ser pelo menos 100cm').max(250, 'Altura deve ser no máximo 250cm'),
  weight: z.number().min(30, 'Peso deve ser pelo menos 30kg').max(300, 'Peso deve ser no máximo 300kg'),
  waist: z.number().min(50, 'Cintura deve ser pelo menos 50cm').max(200, 'Cintura deve ser no máximo 200cm'),
  neck: z.number().min(20, 'Pescoço deve ser pelo menos 20cm').max(60, 'Pescoço deve ser no máximo 60cm'),
  hip: z.number().min(60, 'Quadril deve ser pelo menos 60cm').max(200, 'Quadril deve ser no máximo 200cm').optional(),
  age: z.number().min(15, 'Idade deve ser pelo menos 15 anos').max(80, 'Idade deve ser no máximo 80 anos'),
  gender: z.enum(['male', 'female'], { required_error: 'Gênero é obrigatório' }),
  method: z.enum(['navy', 'bmi'])
});

type BodyFatFormData = z.infer<typeof bodyFatSchema>;

interface BodyFatCalculatorProps {
  onResult?: (result: CalculationResult) => void;
}

export function BodyFatCalculator({ onResult }: BodyFatCalculatorProps) {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'navy' | 'bmi'>('navy');
  const { addResult } = useAssessmentActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue
  } = useForm<BodyFatFormData>({
    resolver: zodResolver(bodyFatSchema),
    defaultValues: {
      method: 'navy'
    }
  });

  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' }
  ];

  const methodOptions = [
    { value: 'navy', label: 'Método Navy (Circunferências)' },
    { value: 'bmi', label: 'Estimativa via BMI' }
  ];

  const watchedValues = watch();
  const watchedGender = watch('gender');

  const onSubmit = async (data: BodyFatFormData) => {
    setIsCalculating(true);
    
    try {
      // Validate inputs
      const validation = validateBodyFat(data);
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      // Calculate result
      const calculationResult = calculateBodyFat({
        method: data.method,
        height: data.height,
        weight: data.weight,
        waist: data.waist,
        neck: data.neck,
        hip: data.hip,
        age: data.age,
        gender: data.gender
      });

      setResult(calculationResult);
      
      // Save to context
      addResult('body-fat-' + data.method, calculationResult, {
        height: data.height,
        weight: data.weight,
        waist: data.waist || 0,
        neck: data.neck || 0,
        hip: data.hip || 0,
        age: data.age,
        gender: data.gender === 'male' ? 1 : 0,
        method: data.method === 'navy' ? 1 : 0
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

  const handleMethodChange = (method: 'navy' | 'bmi') => {
    setSelectedMethod(method);
    setValue('method', method);
  };

  const getResultColor = (category: string) => {
    switch (category) {
      case 'Essencial':
        return 'text-blue-600 bg-blue-50';
      case 'Atleta':
        return 'text-green-600 bg-green-50';
      case 'Fitness':
        return 'text-emerald-600 bg-emerald-50';
      case 'Aceitável':
        return 'text-yellow-600 bg-yellow-50';
      case 'Obesidade':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // Calculate BMI for reference
  const calculateBMI = (weight: number, height: number) => {
    const heightM = height / 100;
    return weight / (heightM * heightM);
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
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Calculadora de Gordura Corporal</h2>
                <p className="text-gray-600">Análise da composição corporal por diferentes métodos</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Method Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Escolha o método:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {methodOptions.map((method) => (
                  <button
                    key={method.value}
                    type="button"
                    onClick={() => handleMethodChange(method.value as 'navy' | 'bmi')}
                    className={`p-4 text-left border-2 rounded-lg transition-all ${
                      selectedMethod === method.value
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{method.label}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {method.value === 'navy' 
                        ? 'Mais preciso - Requer medidas de circunferência' 
                        : 'Mais simples - Baseado apenas em altura, peso e idade'
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="space-y-6">
                {selectedMethod === 'navy' && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      Como medir (Método Navy):
                    </h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• <strong>Cintura:</strong> Ponto mais estreito do abdômen</li>
                      <li>• <strong>Pescoço:</strong> Logo abaixo da laringe</li>
                      <li>• <strong>Quadril (mulheres):</strong> Ponto mais largo dos quadris</li>
                      <li>• Use fita métrica e mantenha-a justa mas não apertada</li>
                    </ul>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input type="hidden" {...register('method')} value={selectedMethod} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Altura (cm)"
                      type="number"
                      placeholder="Ex: 175"
                      {...register('height', { valueAsNumber: true })}
                      error={errors.height?.message}
                    />

                    <Input
                      label="Peso (kg)"
                      type="number"
                      step="0.1"
                      placeholder="Ex: 70.5"
                      {...register('weight', { valueAsNumber: true })}
                      error={errors.weight?.message}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Idade (anos)"
                      type="number"
                      placeholder="Ex: 30"
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
                  </div>

                  {selectedMethod === 'navy' && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          label="Circunferência da cintura (cm)"
                          type="number"
                          step="0.1"
                          placeholder="Ex: 85"
                          {...register('waist', { valueAsNumber: true })}
                          error={errors.waist?.message}
                        />

                        <Input
                          label="Circunferência do pescoço (cm)"
                          type="number"
                          step="0.1"
                          placeholder="Ex: 38"
                          {...register('neck', { valueAsNumber: true })}
                          error={errors.neck?.message}
                        />
                      </div>

                      {watchedGender === 'female' && (
                        <Input
                          label="Circunferência do quadril (cm)"
                          type="number"
                          step="0.1"
                          placeholder="Ex: 95"
                          {...register('hip', { valueAsNumber: true })}
                          error={errors.hip?.message}
                          helperText="Obrigatório para mulheres no método Navy"
                        />
                      )}
                    </>
                  )}

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
                          <span>Calcular Gordura</span>
                        </div>
                      )}
                    </Button>

                    {result && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetCalculator}
                      >
                        Novo Cálculo
                      </Button>
                    )}
                  </div>
                </form>

                {/* BMI Preview */}
                {watchedValues.weight && watchedValues.height && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">IMC de Referência:</h4>
                    <p className="text-sm text-gray-700">
                      Seu IMC: <span className="font-medium text-blue-600">
                        {calculateBMI(watchedValues.weight, watchedValues.height).toFixed(1)}
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
                          <div className="text-3xl font-bold text-green-600 mb-2">
                            {result.value}{result.unit}
                          </div>
                          <div className="text-lg text-gray-700">
                            {result.interpretation}
                          </div>
                        </div>

                        {result.category && (
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getResultColor(result.category)}`}>
                            <Target className="h-4 w-4 mr-2" />
                            Categoria: {result.category}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Body Fat Ranges Reference */}
                    <Card variant="outlined">
                      <CardHeader>
                        <h3 className="text-lg font-semibold text-gray-900">Faixas de Referência</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          {watchedGender === 'male' ? (
                            <>
                              <div className="flex justify-between">
                                <span>Gordura Essencial:</span>
                                <span className="font-medium">2-5%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Atletas:</span>
                                <span className="font-medium">6-13%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Fitness:</span>
                                <span className="font-medium">14-17%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Aceitável:</span>
                                <span className="font-medium">18-24%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Obesidade:</span>
                                <span className="font-medium">25%+</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex justify-between">
                                <span>Gordura Essencial:</span>
                                <span className="font-medium">10-13%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Atletas:</span>
                                <span className="font-medium">14-20%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Fitness:</span>
                                <span className="font-medium">21-24%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Aceitável:</span>
                                <span className="font-medium">25-31%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Obesidade:</span>
                                <span className="font-medium">32%+</span>
                              </div>
                            </>
                          )}
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
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <Users className="h-16 w-16 mb-4 opacity-50" />
                    <p className="text-lg font-medium">Aguardando dados</p>
                    <p className="text-sm">Preencha o formulário para calcular sua composição corporal</p>
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