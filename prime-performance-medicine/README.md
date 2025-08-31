# Prime Performance Medicine Platform

Uma plataforma digital abrangente para medicina de performance, oferecendo protocolos de avaliação científicos, calculadoras especializadas e conteúdo educacional de alta qualidade.

## 🚀 Características Principais

### 🏠 Landing Page Institucional
- Design profissional e responsivo
- Apresentação clara dos conceitos de Medicina de Performance
- Call-to-actions estratégicos para conversão
- Animações suaves e micro-interações

### 🧪 Protocolos de Avaliação Interativos
- **Teste de Cooper**: Avaliação da capacidade aeróbica com cálculo de VO2 Max
- **Teste de 1RM**: Estimativa de força máxima com múltiplas fórmulas científicas
- **Composição Corporal**: Análise via métodos Navy e BMI com interpretação detalhada

### 📚 Conteúdo Educacional
- Artigos científicos categorizados
- Sistema de busca e filtros avançados
- Conteúdo produzido por especialistas
- Casos clínicos e pesquisas atualizadas

### ⚙️ Tecnologias Utilizadas
- **Next.js 13+** com App Router
- **TypeScript** para type safety
- **Tailwind CSS** para design responsivo
- **Framer Motion** para animações
- **React Hook Form + Zod** para validação
- **Context API** para gerenciamento de estado

## 🛠 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Git

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/prime-performance-medicine.git
cd prime-performance-medicine
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── artigos/           # Página de artigos
│   ├── contato/           # Página de contato
│   ├── protocolos/        # Página de protocolos
│   ├── sobre/             # Página sobre
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── calculators/       # Calculadoras especializadas
│   ├── layout/           # Componentes de layout
│   ├── sections/         # Seções da página
│   └── ui/               # Componentes de UI
├── contexts/             # React Contexts
├── data/                 # Dados estáticos
├── lib/                  # Utilitários e funções
└── types/               # Definições TypeScript
```

## 🧪 Testes

### Executar Testes de Calculadoras
```bash
npm run test:calculations
```

### Validar Funcionalidades
```bash
npm run test
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Build Local
```bash
npm run build
npm run start
```

### Docker
```bash
docker build -t prime-performance-medicine .
docker run -p 3000:3000 prime-performance-medicine
```

## 📈 Performance

### Otimizações Implementadas
- ✅ Lazy loading de componentes
- ✅ Otimização de imagens automática
- ✅ Compressão gzip habilitada
- ✅ Splitting de código automático
- ✅ PWA ready com manifest
- ✅ SEO otimizado

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔧 Configuração

### Variáveis de Ambiente
```env
NEXT_PUBLIC_SITE_URL=https://primeperformance.med.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Customização de Tema
Edite `tailwind.config.js` para personalizar cores e estilos:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    }
  }
}
```

## 📊 Funcionalidades dos Protocolos

### Teste de Cooper
- Cálculo preciso do VO2 Max
- Categorização por idade e gênero
- Recomendações personalizadas
- Histórico de progresso

### Teste de 1RM
- Múltiplas fórmulas científicas
- Zonas de treinamento calculadas
- Análise de força relativa
- Sugestões de progressão

### Composição Corporal
- Método Navy (circunferências)
- Estimativa via BMI
- Interpretação detalhada
- Faixas de referência

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Suporte

- **Email**: contato@primeperformance.med.br
- **Website**: https://primeperformance.med.br
- **Documentação**: https://docs.primeperformance.med.br

## 🔄 Atualizações

### Versão 1.0.0
- ✅ Landing page completa
- ✅ Três protocolos de avaliação
- ✅ Sistema de artigos
- ✅ Design responsivo
- ✅ Otimizações de performance

### Roadmap Futuro
- [ ] Integração com wearables
- [ ] Dashboard de progresso
- [ ] Relatórios em PDF
- [ ] Sistema de usuários
- [ ] API para terceiros

---

**Desenvolvido com ❤️ para otimização da performance humana**