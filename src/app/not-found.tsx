import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Stethoscope } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Stethoscope className="h-12 w-12 text-blue-600" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold"
              >
                !
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Página Não Encontrada
            </h2>
            <p className="text-gray-600 mb-6">
              Ops! A página que você está procurando não existe ou foi movida. 
              Mas não se preocupe, temos outras ferramentas incríveis para você explorar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="flex-1">
                <Button variant="primary" className="w-full">
                  <Home className="h-4 w-4 mr-2" />
                  Página Inicial
                </Button>
              </Link>
              
              <Link href="/protocolos" className="flex-1">
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Ver Protocolos
                </Button>
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center justify-center w-full mt-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Voltar à página anterior
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 p-4 bg-blue-50 rounded-lg"
          >
            <h3 className="font-semibold text-blue-900 mb-2">Sugestões:</h3>
            <div className="text-sm text-blue-800 space-y-1">
              <div>• <Link href="/protocolos" className="underline hover:no-underline">Experimente nossos protocolos de avaliação</Link></div>
              <div>• <Link href="/artigos" className="underline hover:no-underline">Leia nossos artigos científicos</Link></div>
              <div>• <Link href="/sobre" className="underline hover:no-underline">Conheça mais sobre medicina de performance</Link></div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
