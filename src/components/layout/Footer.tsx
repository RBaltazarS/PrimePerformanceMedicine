import React from 'react';
import Link from 'next/link';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '/' },
      { label: 'Protocolos de Avaliação', href: '/protocolos' },
      { label: 'Artigos Científicos', href: '/artigos' },
      { label: 'Sobre Nós', href: '/sobre' },
      { label: 'Contato', href: '/contato' }
    ]
  },
  {
    title: 'Protocolos',
    links: [
      { label: 'Teste de Cooper', href: '/protocolos/cooper' },
      { label: 'Teste de 1RM', href: '/protocolos/1rm' },
      { label: 'Composição Corporal', href: '/protocolos/gordura-corporal' },
      { label: 'Todos os Protocolos', href: '/protocolos' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Artigos por Categoria', href: '/artigos' },
      { label: 'Casos Clínicos', href: '/artigos/categoria/casos-clinicos' },
      { label: 'Pesquisas Recentes', href: '/artigos/categoria/pesquisa' },
      { label: 'Blog', href: '/blog' }
    ]
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@primeperformance.med.br',
    href: 'mailto:contato@primeperformance.med.br'
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 3456-7890',
    href: 'tel:+551134567890'
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'São Paulo, SP - Brasil',
    href: '#'
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">
                Prime Performance Medicine
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Revolucionando a medicina através da otimização da performance humana. 
              Combinamos ciência médica avançada com metodologias de treinamento 
              para maximizar seu potencial.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <contact.icon className="h-5 w-5 text-blue-400" />
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Prime Performance Medicine. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido com ❤️ para otimização da performance humana.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 text-sm text-gray-400">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer Médico
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}