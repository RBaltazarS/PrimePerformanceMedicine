'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Oops! Algo deu errado
            </h2>
            
            <p className="text-gray-600 mb-6">
              Encontramos um erro inesperado. Não se preocupe, isso acontece às vezes. 
              Tente recarregar a página ou voltar à página inicial.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-100 rounded-lg p-3 mb-4 text-left">
                <p className="text-sm font-mono text-red-600 break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                onClick={this.handleReload}
                className="flex-1"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Recarregar Página
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="flex-1"
              >
                <Home className="h-4 w-4 mr-2" />
                Página Inicial
              </Button>
            </div>

            <button
              onClick={this.handleReset}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;