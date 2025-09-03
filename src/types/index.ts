// Core types for Performance Medicine Platform

export interface CalculationResult {
  value: number;
  interpretation: string;
  recommendations: string[];
  category?: string;
  unit?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'number' | 'select' | 'radio';
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation: {
    required: boolean;
    min?: number;
    max?: number;
  };
}

export interface AssessmentProtocol {
  id: string;
  name: string;
  description: string;
  category: 'cardio' | 'strength' | 'body-composition';
  difficulty: 'basic' | 'intermediate' | 'advanced';
  inputs: FormField[];
  calculate: (inputs: Record<string, number>) => CalculationResult;
  validate?: (inputs: Record<string, number>) => ValidationResult;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Cooper Test specific types
export interface CooperTestInput {
  distance: number; // meters
  age: number;
  gender: 'male' | 'female';
  weight?: number;
}

// 1RM Test specific types
export interface OneRMInput {
  weight: number;
  repetitions: number;
  exercise: string;
  experience: 'beginner' | 'intermediate' | 'advanced';
}

// Body Fat specific types
export interface BodyFatInput {
  method: 'navy' | 'bmi' | 'skinfold';
  height: number;
  weight: number;
  waist?: number;
  neck?: number;
  hip?: number; // Required for females in Navy method
  age: number;
  gender: 'male' | 'female';
}

// Article types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date;
  category: Category;
  tags: string[];
  readTime: number;
  featuredImage?: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Assessment Context types
export interface AssessmentState {
  currentProtocol: string | null;
  results: Record<string, CalculationResult>;
  history: AssessmentHistory[];
}

export interface AssessmentHistory {
  protocolId: string;
  result: CalculationResult;
  timestamp: Date;
  inputs: Record<string, number>;
}

// User preferences
export interface UserPreferences {
  units: 'metric' | 'imperial';
  language: 'pt' | 'en';
  theme: 'light' | 'dark';
}

export interface UserAssessmentData {
  userId?: string;
  assessments: {
    [protocolId: string]: {
      results: CalculationResult[];
      lastUpdated: Date;
    };
  };
  preferences: UserPreferences;
}

// Progress tracking
export interface ProgressData {
  protocolId: string;
  timeframe: 'week' | 'month' | 'year';
  values: Array<{
    date: Date;
    value: number;
  }>;
  trend: 'improving' | 'stable' | 'declining';
}

export interface ComparisonResult {
  protocolId: string;
  date1: Date;
  date2: Date;
  difference: number;
  percentageChange: number;
  interpretation: string;
}

// Content filtering
export interface ContentFilter {
  category?: string;
  tags?: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  readTime?: 'short' | 'medium' | 'long';
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}