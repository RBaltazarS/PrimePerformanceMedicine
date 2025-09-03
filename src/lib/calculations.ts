import { CooperTestInput, OneRMInput, BodyFatInput, CalculationResult, ValidationResult } from '@/types';

// Cooper Test Calculator
export function calculateCooperTest(input: CooperTestInput): CalculationResult {
  const { distance, age, gender } = input;
  
  // VO2 max calculation using Cooper Test formula
  const vo2Max = (distance - 504.9) / 44.73;
  
  // Fitness categories based on age and gender
  const category = getAerobicCategory(vo2Max, age, gender);
  
  const recommendations = getCooperRecommendations(category, vo2Max);
  
  return {
    value: parseFloat(vo2Max.toFixed(1)),
    interpretation: `VO2 Max: ${vo2Max.toFixed(1)} ml/kg/min`,
    category,
    recommendations,
    unit: 'ml/kg/min'
  };
}

function getAerobicCategory(vo2Max: number, age: number, gender: 'male' | 'female'): string {
  // Simplified categorization - in practice, you'd use detailed age/gender tables
  const categories = {
    male: {
      excellent: age <= 29 ? 51.4 : age <= 39 ? 45.4 : age <= 49 ? 41.0 : 37.1,
      good: age <= 29 ? 45.5 : age <= 39 ? 39.5 : age <= 49 ? 35.1 : 31.2,
      average: age <= 29 ? 41.0 : age <= 39 ? 35.5 : age <= 49 ? 31.1 : 27.2,
      poor: age <= 29 ? 36.5 : age <= 39 ? 31.5 : age <= 49 ? 27.1 : 23.2
    },
    female: {
      excellent: age <= 29 ? 44.2 : age <= 39 ? 39.5 : age <= 49 ? 35.2 : 31.2,
      good: age <= 29 ? 37.8 : age <= 39 ? 33.8 : age <= 49 ? 29.9 : 26.9,
      average: age <= 29 ? 33.8 : age <= 39 ? 30.2 : age <= 49 ? 26.9 : 24.0,
      poor: age <= 29 ? 29.9 : age <= 39 ? 26.9 : age <= 49 ? 24.0 : 21.1
    }
  };
  
  const thresholds = categories[gender];
  
  if (vo2Max >= thresholds.excellent) return 'Excelente';
  if (vo2Max >= thresholds.good) return 'Bom';
  if (vo2Max >= thresholds.average) return 'Médio';
  if (vo2Max >= thresholds.poor) return 'Abaixo da Média';
  return 'Muito Baixo';
}

function getCooperRecommendations(category: string, vo2Max: number): string[] {
  const baseRecommendations = [
    'Mantenha uma rotina regular de exercícios aeróbicos',
    'Monitore sua frequência cardíaca durante os treinos'
  ];
  
  switch (category) {
    case 'Excelente':
      return [
        ...baseRecommendations,
        'Parabéns! Sua capacidade aeróbica está excelente',
        'Continue com treinos de manutenção e considere novos desafios'
      ];
    case 'Bom':
      return [
        ...baseRecommendations,
        'Boa capacidade aeróbica! Continue assim',
        'Considere aumentar gradualmente a intensidade dos treinos'
      ];
    case 'Médio':
      return [
        ...baseRecommendations,
        'Há espaço para melhoria na sua capacidade aeróbica',
        'Aumente gradualmente a duração e intensidade dos exercícios'
      ];
    default:
      return [
        ...baseRecommendations,
        'Recomenda-se iniciar um programa de condicionamento aeróbico',
        'Consulte um profissional de educação física para orientação',
        'Comece com exercícios de baixa intensidade e aumente progressivamente'
      ];
  }
}

// 1RM Calculator
export function calculateOneRM(input: OneRMInput): CalculationResult {
  const { weight, repetitions, experience } = input;
  
  // Multiple formulas for better accuracy
  const formulas = {
    epley: weight * (1 + repetitions / 30),
    brzycki: weight * (36 / (37 - repetitions)),
    lander: weight * (100 / (101.3 - 2.67123 * repetitions)),
    oconner: weight * (1 + 0.025 * repetitions)
  };
  
  // Calculate average for more accurate result
  const average = Object.values(formulas).reduce((a, b) => a + b) / Object.values(formulas).length;
  
  const strengthCategory = getStrengthCategory(average, input);
  const recommendations = getStrengthRecommendations(experience, average, strengthCategory);
  
  return {
    value: parseFloat(average.toFixed(1)),
    interpretation: `1RM Estimado: ${average.toFixed(1)} kg`,
    category: strengthCategory,
    recommendations,
    unit: 'kg'
  };
}

function getStrengthCategory(oneRM: number, input: OneRMInput): string {
  // Simplified strength standards - would normally use detailed tables
  const { weight: bodyWeight } = input;
  
  if (!bodyWeight) return 'Não avaliado';
  
  const ratio = oneRM / bodyWeight;
  
  // Example for bench press ratios
  if (ratio >= 1.5) return 'Elite';
  if (ratio >= 1.25) return 'Avançado';
  if (ratio >= 1.0) return 'Intermediário';
  if (ratio >= 0.75) return 'Iniciante';
  return 'Novato';
}

function getStrengthRecommendations(experience: string, oneRM: number, category: string): string[] {
  const baseRecommendations = [
    'Mantenha uma progressão gradual nos treinos',
    'Priorize a técnica antes de aumentar a carga'
  ];
  
  switch (experience) {
    case 'beginner':
      return [
        ...baseRecommendations,
        'Foque no aprendizado dos movimentos básicos',
        'Treine com supervisão de um profissional',
        'Aumente a carga em 2,5-5kg por semana'
      ];
    case 'intermediate':
      return [
        ...baseRecommendations,
        'Varie os métodos de treino (séries, repetições)',
        'Considere periodização no seu treinamento',
        'Monitore a recuperação entre as sessões'
      ];
    case 'advanced':
      return [
        ...baseRecommendations,
        'Implemente técnicas avançadas de treinamento',
        'Considere trabalhar com diferentes faixas de repetições',
        'Monitore indicadores de overtraining'
      ];
    default:
      return baseRecommendations;
  }
}

// Body Fat Calculator
export function calculateBodyFat(input: BodyFatInput): CalculationResult {
  const { method } = input;
  
  switch (method) {
    case 'navy':
      return calculateNavyBodyFat(input);
    case 'bmi':
      return calculateBMIBodyFat(input);
    default:
      throw new Error('Método de cálculo não suportado');
  }
}

function calculateNavyBodyFat(input: BodyFatInput): CalculationResult {
  const { height, waist, neck, hip, gender } = input;
  
  if (!waist || !neck) {
    throw new Error('Medidas de cintura e pescoço são obrigatórias para o método Navy');
  }
  
  let bodyFatPercentage: number;
  
  if (gender === 'male') {
    // Navy formula for men
    bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
  } else {
    // Navy formula for women
    if (!hip) {
      throw new Error('Medida do quadril é obrigatória para mulheres no método Navy');
    }
    bodyFatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
  }
  
  const category = getBodyFatCategory(bodyFatPercentage, gender);
  const recommendations = getBodyFatRecommendations(category, bodyFatPercentage, gender);
  
  return {
    value: parseFloat(bodyFatPercentage.toFixed(1)),
    interpretation: `Percentual de Gordura: ${bodyFatPercentage.toFixed(1)}%`,
    category,
    recommendations,
    unit: '%'
  };
}

function calculateBMIBodyFat(input: BodyFatInput): CalculationResult {
  const { height, weight, age, gender } = input;
  
  // Convert height from cm to m
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  
  // Deurenberg formula for body fat estimation from BMI
  let bodyFatPercentage: number;
  
  if (gender === 'male') {
    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 16.2;
  } else {
    bodyFatPercentage = (1.20 * bmi) + (0.23 * age) - 5.4;
  }
  
  const category = getBodyFatCategory(bodyFatPercentage, gender);
  const recommendations = getBodyFatRecommendations(category, bodyFatPercentage, gender);
  
  return {
    value: parseFloat(bodyFatPercentage.toFixed(1)),
    interpretation: `Percentual de Gordura (via BMI): ${bodyFatPercentage.toFixed(1)}%`,
    category,
    recommendations,
    unit: '%'
  };
}

function getBodyFatCategory(bodyFatPercentage: number, gender: 'male' | 'female'): string {
  const categories = {
    male: {
      essential: [2, 5],
      athlete: [6, 13],
      fitness: [14, 17],
      acceptable: [18, 24],
      obese: [25, Infinity]
    },
    female: {
      essential: [10, 13],
      athlete: [14, 20],
      fitness: [21, 24],
      acceptable: [25, 31],
      obese: [32, Infinity]
    }
  };
  
  const ranges = categories[gender];
  
  for (const [category, [min, max]] of Object.entries(ranges)) {
    if (bodyFatPercentage >= min && bodyFatPercentage <= max) {
      return category === 'essential' ? 'Essencial' :
             category === 'athlete' ? 'Atleta' :
             category === 'fitness' ? 'Fitness' :
             category === 'acceptable' ? 'Aceitável' : 'Obesidade';
    }
  }
  
  return 'Não classificado';
}

function getBodyFatRecommendations(category: string, percentage: number, gender: 'male' | 'female'): string[] {
  const baseRecommendations = [
    'Mantenha uma dieta balanceada e equilibrada',
    'Pratique exercícios regularmente'
  ];
  
  switch (category) {
    case 'Essencial':
      return [
        ...baseRecommendations,
        'Atenção: você pode estar com gordura corporal muito baixa',
        'Consulte um nutricionista para avaliação',
        'Monitore sua saúde regularmente'
      ];
    case 'Atleta':
      return [
        ...baseRecommendations,
        'Excelente composição corporal para atletas',
        'Mantenha o equilíbrio entre treino e recuperação',
        'Continue monitorando sua composição corporal'
      ];
    case 'Fitness':
      return [
        ...baseRecommendations,
        'Ótima composição corporal!',
        'Continue com seu programa de exercícios atual',
        'Foque na manutenção dos resultados'
      ];
    case 'Aceitável':
      return [
        ...baseRecommendations,
        'Há espaço para melhoria na composição corporal',
        'Considere incluir exercícios de força',
        'Monitore sua alimentação mais de perto'
      ];
    case 'Obesidade':
      return [
        ...baseRecommendations,
        'Recomenda-se buscar orientação profissional',
        'Inicie um programa gradual de perda de peso',
        'Considere acompanhamento médico e nutricional',
        'Foque em mudanças de estilo de vida sustentáveis'
      ];
    default:
      return baseRecommendations;
  }
}

// Validation functions
export function validateCooperTest(input: Partial<CooperTestInput>): ValidationResult {
  const errors: string[] = [];
  
  if (!input.distance || input.distance < 500 || input.distance > 5000) {
    errors.push('Distância deve estar entre 500 e 5000 metros');
  }
  
  if (!input.age || input.age < 15 || input.age > 80) {
    errors.push('Idade deve estar entre 15 e 80 anos');
  }
  
  if (!input.gender || !['male', 'female'].includes(input.gender)) {
    errors.push('Gênero deve ser especificado');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateOneRM(input: Partial<OneRMInput>): ValidationResult {
  const errors: string[] = [];
  
  if (!input.weight || input.weight < 1 || input.weight > 500) {
    errors.push('Peso deve estar entre 1 e 500 kg');
  }
  
  if (!input.repetitions || input.repetitions < 1 || input.repetitions > 20) {
    errors.push('Repetições devem estar entre 1 e 20');
  }
  
  if (!input.experience || !['beginner', 'intermediate', 'advanced'].includes(input.experience)) {
    errors.push('Nível de experiência deve ser especificado');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateBodyFat(input: Partial<BodyFatInput>): ValidationResult {
  const errors: string[] = [];
  
  if (!input.height || input.height < 100 || input.height > 250) {
    errors.push('Altura deve estar entre 100 e 250 cm');
  }
  
  if (!input.weight || input.weight < 30 || input.weight > 300) {
    errors.push('Peso deve estar entre 30 e 300 kg');
  }
  
  if (!input.age || input.age < 15 || input.age > 80) {
    errors.push('Idade deve estar entre 15 e 80 anos');
  }
  
  if (!input.gender || !['male', 'female'].includes(input.gender)) {
    errors.push('Gênero deve ser especificado');
  }
  
  if (input.method === 'navy') {
    if (!input.waist || input.waist < 50 || input.waist > 200) {
      errors.push('Circunferência da cintura deve estar entre 50 e 200 cm');
    }
    
    if (!input.neck || input.neck < 20 || input.neck > 60) {
      errors.push('Circunferência do pescoço deve estar entre 20 e 60 cm');
    }
    
    if (input.gender === 'female' && (!input.hip || input.hip < 60 || input.hip > 200)) {
      errors.push('Circunferência do quadril é obrigatória para mulheres e deve estar entre 60 e 200 cm');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}