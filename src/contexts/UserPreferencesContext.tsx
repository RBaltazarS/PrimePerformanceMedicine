'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserPreferences } from '@/types';

// Default preferences
const defaultPreferences: UserPreferences = {
  units: 'metric',
  language: 'pt',
  theme: 'light'
};

// Context creation
const UserPreferencesContext = createContext<{
  preferences: UserPreferences;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  resetPreferences: () => void;
} | undefined>(undefined);

// Provider component
interface UserPreferencesProviderProps {
  children: ReactNode;
}

export function UserPreferencesProvider({ children }: UserPreferencesProviderProps) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('user-preferences');
      if (savedPreferences) {
        const parsedPreferences = JSON.parse(savedPreferences);
        setPreferences({ ...defaultPreferences, ...parsedPreferences });
      }
    } catch (error) {
      console.warn('Failed to load user preferences from localStorage:', error);
    }
  }, []);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('user-preferences', JSON.stringify(preferences));
    } catch (error) {
      console.warn('Failed to save user preferences to localStorage:', error);
    }
  }, [preferences]);

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...updates }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    try {
      localStorage.removeItem('user-preferences');
    } catch (error) {
      console.warn('Failed to clear user preferences from localStorage:', error);
    }
  };

  return (
    <UserPreferencesContext.Provider value={{ 
      preferences, 
      updatePreferences, 
      resetPreferences 
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

// Custom hook for using the context
export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
}

// Helper hooks for specific preferences
export function useUnits() {
  const { preferences, updatePreferences } = useUserPreferences();
  
  const setUnits = (units: 'metric' | 'imperial') => {
    updatePreferences({ units });
  };

  return {
    units: preferences.units,
    setUnits,
    isMetric: preferences.units === 'metric',
    isImperial: preferences.units === 'imperial'
  };
}

export function useLanguage() {
  const { preferences, updatePreferences } = useUserPreferences();
  
  const setLanguage = (language: 'pt' | 'en') => {
    updatePreferences({ language });
  };

  return {
    language: preferences.language,
    setLanguage,
    isPortuguese: preferences.language === 'pt',
    isEnglish: preferences.language === 'en'
  };
}

export function useTheme() {
  const { preferences, updatePreferences } = useUserPreferences();
  
  const setTheme = (theme: 'light' | 'dark') => {
    updatePreferences({ theme });
  };

  const toggleTheme = () => {
    setTheme(preferences.theme === 'light' ? 'dark' : 'light');
  };

  return {
    theme: preferences.theme,
    setTheme,
    toggleTheme,
    isDark: preferences.theme === 'dark',
    isLight: preferences.theme === 'light'
  };
}