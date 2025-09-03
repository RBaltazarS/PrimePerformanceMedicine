'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { BookOpen, Clock, User, ArrowRight, Search, Filter, Tag } from 'lucide-react';
import { articles, categories, getArticlesByCategory, getFeaturedArticles } from '@/data/articles';
import { formatDate } from '@/lib/utils';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : getArticlesByCategory(selectedCategory);

  const displayedArticles = filteredArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredArticles = getFeaturedArticles();

  return (
    <Layout>
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Artigos{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Científicos
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conteúdo educacional de alta qualidade sobre medicina de performance, 
              treinamento e otimização da saúde humana.
            </p>
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artigos em Destaque</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                    {article.featuredImage && (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-orange-100 rounded-t-lg"></div>
                    )}
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                          {article.category.name}
                        </span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime} min
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-3 w-3" />
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value="all">Todas as Categorias</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  {article.featuredImage && (
                    <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-orange-100 rounded-t-lg"></div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        {article.category.name}
                      </span>
                      <span>•</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
                        >
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-3 w-3" />
                        <span>{article.author.name}</span>
                        <span>•</span>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {displayedArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros ou termo de busca.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quer se manter atualizado?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Receba as últimas novidades sobre medicina de performance, 
              protocolos de avaliação e otimização da saúde diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button variant="cta">
                Inscrever-se
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}