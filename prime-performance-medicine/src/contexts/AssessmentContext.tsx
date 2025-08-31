'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AssessmentState, AssessmentHistory, CalculationResult } from '@/types';

// Action types
type AssessmentAction =
  | { type: 'SET_CURRENT_PROTOCOL'; payload: string }
  | { type: 'ADD_RESULT'; payload: { protocolId: string; result: CalculationResult; inputs: Record<string, number> } }
  | { type: 'CLEAR_RESULTS' }
  | { type: 'LOAD_HISTORY'; payload: AssessmentHistory[] };

// Initial state
const initialState: AssessmentState = {
  currentProtocol: null,
  results: {},
  history: []
};

// Reducer function
function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'SET_CURRENT_PROTOCOL':
      return {
        ...state,
        currentProtocol: action.payload
      };
    
    case 'ADD_RESULT':
      const { protocolId, result, inputs } = action.payload;
      const historyEntry: AssessmentHistory = {
        protocolId,
        result,
        timestamp: new Date(),
        inputs
      };
      
      return {
        ...state,
        results: {
          ...state.results,
          [protocolId]: result
        },
        history: [...state.history, historyEntry]
      };
    
    case 'CLEAR_RESULTS':
      return {
        ...state,
        results: {},
        history: []
      };
    
    case 'LOAD_HISTORY':
      return {
        ...state,
        history: action.payload
      };
    
    default:
      return state;
  }
}

// Context creation
const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<AssessmentAction>;
} | undefined>(undefined);

// Provider component
interface AssessmentProviderProps {
  children: ReactNode;
}

export function AssessmentProvider({ children }: AssessmentProviderProps) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

// Custom hook for using the context
export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}

// Helper functions
export const useAssessmentActions = () => {
  const { dispatch } = useAssessment();

  const setCurrentProtocol = (protocolId: string) => {
    dispatch({ type: 'SET_CURRENT_PROTOCOL', payload: protocolId });
  };

  const addResult = (protocolId: string, result: CalculationResult, inputs: Record<string, number>) => {
    dispatch({ type: 'ADD_RESULT', payload: { protocolId, result, inputs } });
    
    // Save to localStorage
    try {
      const savedData = localStorage.getItem('assessment-data');
      const currentData = savedData ? JSON.parse(savedData) : { assessments: {} };
      
      if (!currentData.assessments[protocolId]) {
        currentData.assessments[protocolId] = { results: [], lastUpdated: new Date().toISOString() };
      }
      
      currentData.assessments[protocolId].results.push({
        ...result,
        timestamp: new Date().toISOString(),
        inputs
      });
      currentData.assessments[protocolId].lastUpdated = new Date().toISOString();
      
      localStorage.setItem('assessment-data', JSON.stringify(currentData));
    } catch (error) {
      console.warn('Failed to save assessment data to localStorage:', error);
    }
  };

  const clearResults = () => {
    dispatch({ type: 'CLEAR_RESULTS' });
    try {
      localStorage.removeItem('assessment-data');
    } catch (error) {
      console.warn('Failed to clear assessment data from localStorage:', error);
    }
  };

  const loadHistory = () => {
    try {
      const savedData = localStorage.getItem('assessment-data');
      if (savedData) {
        const data = JSON.parse(savedData);
        const history: AssessmentHistory[] = [];
        
        Object.entries(data.assessments || {}).forEach(([protocolId, protocolData]: [string, any]) => {
          protocolData.results?.forEach((result: any) => {
            history.push({
              protocolId,
              result: {
                value: result.value,
                interpretation: result.interpretation,
                recommendations: result.recommendations,
                category: result.category,
                unit: result.unit
              },
              timestamp: new Date(result.timestamp || protocolData.lastUpdated),
              inputs: result.inputs || {}
            });
          });
        });
        
        dispatch({ type: 'LOAD_HISTORY', payload: history });
      }
    } catch (error) {
      console.warn('Failed to load assessment data from localStorage:', error);
    }
  };

  return {
    setCurrentProtocol,
    addResult,
    clearResults,
    loadHistory
  };
};