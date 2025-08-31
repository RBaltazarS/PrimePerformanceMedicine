import { AssessmentProtocol } from '@/types';
import { 
  calculateCooperTest, 
  calculateOneRM, 
  calculateBodyFat, 
  validateCooperTest, 
  validateOneRM, 
  validateBodyFat 
} from '@/lib/calculations';

export const assessmentProtocols: AssessmentProtocol[] = [
  {
    id: 'cooper-test',
    name: 'Teste de Cooper',
    description: 'Avalia a capacidade aeróbica através da distância percorrida em 12 minutos',
    category: 'cardio',
    difficulty: 'basic',
    inputs: [
      {
        name: 'distance',
        label: 'Distância percorrida (metros)',
        type: 'number',
        placeholder: 'Ex: 2400',
        validation: {
          required: true,
          min: 500,
          max: 5000
        }
      },
      {
        name: 'age',
        label: 'Idade (anos)',
        type: 'number',
        placeholder: 'Ex: 25',
        validation: {
          required: true,
          min: 15,
          max: 80
        }
      },
      {
        name: 'gender',
        label: 'Gênero',
        type: 'select',
        options: [
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Feminino' }
        ],
        validation: {
          required: true
        }
      },
      {
        name: 'weight',
        label: 'Peso corporal (kg) - Opcional',
        type: 'number',
        placeholder: 'Ex: 70',
        validation: {
          required: false,
          min: 30,
          max: 200
        }
      }
    ],
    calculate: (inputs) => calculateCooperTest({
      distance: inputs.distance,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female',
      weight: inputs.weight
    }),
    validate: (inputs) => validateCooperTest({
      distance: inputs.distance,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female',
      weight: inputs.weight
    })
  },
  {
    id: 'one-rm-test',
    name: 'Teste de 1RM',
    description: 'Estima a força máxima para uma repetição baseado em repetições submáximas',
    category: 'strength',
    difficulty: 'intermediate',
    inputs: [
      {
        name: 'weight',
        label: 'Peso levantado (kg)',
        type: 'number',
        placeholder: 'Ex: 80',
        validation: {
          required: true,
          min: 1,
          max: 500
        }
      },
      {
        name: 'repetitions',
        label: 'Número de repetições',
        type: 'number',
        placeholder: 'Ex: 8',
        validation: {
          required: true,
          min: 1,
          max: 20
        }
      },
      {
        name: 'exercise',
        label: 'Exercício',
        type: 'select',
        options: [
          { value: 'bench-press', label: 'Supino Reto' },
          { value: 'squat', label: 'Agachamento' },
          { value: 'deadlift', label: 'Levantamento Terra' },
          { value: 'overhead-press', label: 'Desenvolvimento' },
          { value: 'other', label: 'Outro' }
        ],
        validation: {
          required: true
        }
      },
      {
        name: 'experience',
        label: 'Nível de experiência',
        type: 'select',
        options: [
          { value: 'beginner', label: 'Iniciante (0-1 anos)' },
          { value: 'intermediate', label: 'Intermediário (1-3 anos)' },
          { value: 'advanced', label: 'Avançado (3+ anos)' }
        ],
        validation: {
          required: true
        }
      }
    ],
    calculate: (inputs) => calculateOneRM({
      weight: inputs.weight,
      repetitions: inputs.repetitions,
      exercise: inputs.exercise,
      experience: inputs.experience as 'beginner' | 'intermediate' | 'advanced'
    }),
    validate: (inputs) => validateOneRM({
      weight: inputs.weight,
      repetitions: inputs.repetitions,
      exercise: inputs.exercise,
      experience: inputs.experience as 'beginner' | 'intermediate' | 'advanced'
    })
  },
  {
    id: 'body-fat-navy',
    name: 'Percentual de Gordura (Método Navy)',
    description: 'Calcula o percentual de gordura corporal usando medidas de circunferência',
    category: 'body-composition',
    difficulty: 'basic',
    inputs: [
      {
        name: 'height',
        label: 'Altura (cm)',
        type: 'number',
        placeholder: 'Ex: 175',
        validation: {
          required: true,
          min: 100,
          max: 250
        }
      },
      {
        name: 'weight',
        label: 'Peso (kg)',
        type: 'number',
        placeholder: 'Ex: 70',
        validation: {
          required: true,
          min: 30,
          max: 300
        }
      },
      {
        name: 'waist',
        label: 'Circunferência da cintura (cm)',
        type: 'number',
        placeholder: 'Ex: 85',
        validation: {
          required: true,
          min: 50,
          max: 200
        }
      },
      {
        name: 'neck',
        label: 'Circunferência do pescoço (cm)',
        type: 'number',
        placeholder: 'Ex: 38',
        validation: {
          required: true,
          min: 20,
          max: 60
        }
      },
      {
        name: 'hip',
        label: 'Circunferência do quadril (cm) - Mulheres',
        type: 'number',
        placeholder: 'Ex: 95',
        validation: {
          required: false,
          min: 60,
          max: 200
        }
      },
      {
        name: 'age',
        label: 'Idade (anos)',
        type: 'number',
        placeholder: 'Ex: 30',
        validation: {
          required: true,
          min: 15,
          max: 80
        }
      },
      {
        name: 'gender',
        label: 'Gênero',
        type: 'select',
        options: [
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Feminino' }
        ],
        validation: {
          required: true
        }
      }
    ],
    calculate: (inputs) => calculateBodyFat({
      method: 'navy',
      height: inputs.height,
      weight: inputs.weight,
      waist: inputs.waist,
      neck: inputs.neck,
      hip: inputs.hip,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female'
    }),
    validate: (inputs) => validateBodyFat({
      method: 'navy',
      height: inputs.height,
      weight: inputs.weight,
      waist: inputs.waist,
      neck: inputs.neck,
      hip: inputs.hip,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female'
    })
  },
  {
    id: 'body-fat-bmi',
    name: 'Percentual de Gordura (via BMI)',
    description: 'Estima o percentual de gordura corporal baseado no IMC e dados demográficos',
    category: 'body-composition',
    difficulty: 'basic',
    inputs: [
      {
        name: 'height',
        label: 'Altura (cm)',
        type: 'number',
        placeholder: 'Ex: 175',
        validation: {
          required: true,
          min: 100,
          max: 250
        }
      },
      {
        name: 'weight',
        label: 'Peso (kg)',
        type: 'number',
        placeholder: 'Ex: 70',
        validation: {
          required: true,
          min: 30,
          max: 300
        }
      },
      {
        name: 'age',
        label: 'Idade (anos)',
        type: 'number',
        placeholder: 'Ex: 30',
        validation: {
          required: true,
          min: 15,
          max: 80
        }
      },
      {
        name: 'gender',
        label: 'Gênero',
        type: 'select',
        options: [
          { value: 'male', label: 'Masculino' },
          { value: 'female', label: 'Feminino' }
        ],
        validation: {
          required: true
        }
      }
    ],
    calculate: (inputs) => calculateBodyFat({
      method: 'bmi',
      height: inputs.height,
      weight: inputs.weight,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female'
    }),
    validate: (inputs) => validateBodyFat({
      method: 'bmi',
      height: inputs.height,
      weight: inputs.weight,
      age: inputs.age,
      gender: inputs.gender as 'male' | 'female'
    })
  }
];

export const getProtocolById = (id: string): AssessmentProtocol | undefined => {
  return assessmentProtocols.find(protocol => protocol.id === id);
};

export const getProtocolsByCategory = (category: 'cardio' | 'strength' | 'body-composition'): AssessmentProtocol[] => {
  return assessmentProtocols.filter(protocol => protocol.category === category);
};

export const getProtocolsByDifficulty = (difficulty: 'basic' | 'intermediate' | 'advanced'): AssessmentProtocol[] => {
  return assessmentProtocols.filter(protocol => protocol.difficulty === difficulty);
};