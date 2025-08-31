import { Article, Category, Author } from '@/types';

export const authors: Author[] = [
  {
    id: 'dr-silva',
    name: 'Dr. Carlos Silva',
    bio: 'Médico do Esporte especializado em Performance Humana. PhD em Fisiologia do Exercício.',
    avatar: '/images/authors/dr-silva.jpg'
  },
  {
    id: 'prof-maria',
    name: 'Profa. Maria Santos',
    bio: 'Professora de Educação Física, especialista em Treinamento de Alto Rendimento.',
    avatar: '/images/authors/prof-maria.jpg'
  },
  {
    id: 'dr-rodrigo',
    name: 'Dr. Rodrigo Oliveira',
    bio: 'Nutricionista Esportivo, especialista em Composição Corporal e Performance.',
    avatar: '/images/authors/dr-rodrigo.jpg'
  }
];

export const categories: Category[] = [
  {
    id: 'fundamentos',
    name: 'Fundamentos',
    slug: 'fundamentos',
    description: 'Conceitos básicos da Medicina de Performance'
  },
  {
    id: 'avaliacao',
    name: 'Avaliação',
    slug: 'avaliacao',
    description: 'Protocolos e métodos de avaliação física'
  },
  {
    id: 'treinamento',
    name: 'Treinamento',
    slug: 'treinamento',
    description: 'Metodologias de treinamento para performance'
  },
  {
    id: 'nutricao',
    name: 'Nutrição',
    slug: 'nutricao',
    description: 'Nutrição aplicada à performance esportiva'
  },
  {
    id: 'recuperacao',
    name: 'Recuperação',
    slug: 'recuperacao',
    description: 'Estratégias de recuperação e regeneração'
  },
  {
    id: 'casos-clinicos',
    name: 'Casos Clínicos',
    slug: 'casos-clinicos',
    description: 'Estudos de caso e aplicações práticas'
  }
];

export const articles: Article[] = [
  {
    id: 'medicina-performance-introducao',
    title: 'Medicina de Performance: Uma Abordagem Revolucionária para Otimização Humana',
    slug: 'medicina-performance-introducao',
    excerpt: 'Entenda como a Medicina de Performance combina ciência médica avançada com metodologias de treinamento para maximizar o potencial humano.',
    content: `
# Medicina de Performance: Uma Nova Era da Otimização Humana

A Medicina de Performance representa uma evolução paradigmática na abordagem médica tradicional, transcendendo o modelo reativo de tratamento de doenças para adotar uma perspectiva proativa de otimização da performance humana.

## O Que é Medicina de Performance?

A Medicina de Performance é uma especialidade médica emergente que aplica princípios científicos rigorosos para maximizar o potencial físico, cognitivo e emocional de indivíduos saudáveis. Diferentemente da medicina convencional, que foca na correção de disfunções, esta abordagem visa a excelência funcional.

## Fundamentos Científicos

### 1. Fisiologia Aplicada
- Análise detalhada dos sistemas cardiovascular, respiratório e neuromuscular
- Otimização da eficiência metabólica
- Monitoramento de biomarcadores de performance

### 2. Medicina Personalizada
- Análise genética para identificação de predisposições
- Avaliação hormonal e metabólica individualizada
- Protocolos customizados baseados no perfil biológico único

### 3. Tecnologia Integrada
- Utilização de dispositivos wearables para monitoramento contínuo
- Análise de dados em tempo real
- Inteligência artificial para predição e otimização

## Aplicações Práticas

### Para Atletas de Elite
- Maximização da performance competitiva
- Prevenção de lesões através de análise preditiva
- Recuperação otimizada entre competições

### Para Executivos e Profissionais
- Melhoria da performance cognitiva
- Gestão do estresse e energia
- Longevidade e qualidade de vida

### Para Indivíduos Ativos
- Otimização da composição corporal
- Melhoria da capacidade física geral
- Prevenção do envelhecimento prematuro

## Métodos de Avaliação

A Medicina de Performance utiliza protocolos de avaliação abrangentes:

1. **Avaliação Cardiorrespiratória**
   - Teste de esforço com análise de gases
   - Variabilidade da frequência cardíaca
   - Eficiência metabólica

2. **Análise de Composição Corporal**
   - DEXA scan para análise precisa
   - Bioimpedância multifrequencial
   - Ultrassonografia muscular

3. **Avaliação Neuromuscular**
   - Análise de força e potência
   - Testes de coordenação e equilíbrio
   - Avaliação da função proprioceptiva

## O Futuro da Medicina de Performance

A integração de tecnologias emergentes como inteligência artificial, genômica avançada e nanotecnologia promete revolucionar ainda mais este campo, oferecendo possibilidades antes inimagináveis de otimização humana.

A Medicina de Performance não é apenas uma tendência, mas uma necessidade em um mundo cada vez mais competitivo e exigente, onde a otimização do potencial humano se torna um diferencial crucial para o sucesso pessoal e profissional.
    `,
    author: authors[0],
    publishedAt: new Date('2024-01-15'),
    category: categories[0],
    tags: ['medicina-performance', 'otimização', 'saúde'],
    readTime: 8,
    featuredImage: '/images/articles/medicina-performance-intro.jpg'
  },
  {
    id: 'teste-cooper-guia-completo',
    title: 'Teste de Cooper: Guia Completo para Avaliação da Capacidade Aeróbica',
    slug: 'teste-cooper-guia-completo',
    excerpt: 'Aprenda tudo sobre o Teste de Cooper, desde sua história até a interpretação de resultados para otimização da performance cardiovascular.',
    content: `
# Teste de Cooper: O Padrão Ouro da Avaliação Aeróbica

O Teste de Cooper, desenvolvido pelo Dr. Kenneth Cooper em 1968, permanece como um dos métodos mais confiáveis e práticos para avaliação da capacidade aeróbica.

## História e Desenvolvimento

Kenneth Cooper, médico da Força Aérea Americana, desenvolveu este teste como uma ferramenta prática para avaliar a aptidão física de militares. A simplicidade e eficácia do protocolo rapidamente expandiram sua aplicação para o âmbito civil.

## Protocolo de Aplicação

### Preparação
- Aquecimento de 10-15 minutos
- Verificação das condições climáticas
- Orientação sobre ritmo e estratégia

### Execução
- Corrida/caminhada contínua por 12 minutos
- Registro da distância total percorrida
- Monitoramento da frequência cardíaca

### Pós-teste
- Volta à calma gradual
- Hidratação adequada
- Registro dos dados

## Fórmula de Cálculo

VO₂ máx = (Distância em metros - 504,9) ÷ 44,73

## Classificação dos Resultados

### Homens (20-29 anos)
- Excelente: > 2800m
- Muito Bom: 2400-2800m
- Bom: 2200-2399m
- Regular: 1600-2199m
- Fraco: < 1600m

### Mulheres (20-29 anos)
- Excelente: > 2700m
- Muito Bom: 2200-2700m
- Bom: 1800-2199m
- Regular: 1500-1799m
- Fraco: < 1500m

## Fatores que Influenciam a Performance

1. **Idade**: Declínio natural de 1% ao ano após os 25 anos
2. **Gênero**: Diferenças fisiológicas estruturais
3. **Composição Corporal**: Relação massa magra/massa gorda
4. **Histórico de Treinamento**: Adaptações cardiovasculares prévias
5. **Condições Ambientais**: Temperatura, umidade, altitude

## Limitações e Considerações

- Requer motivação máxima do avaliado
- Influência de fatores psicológicos
- Não considera eficiência mecânica individual
- Possível superestimação em corredores eficientes

## Aplicação Prática

O Teste de Cooper serve como:
- Baseline para prescrição de exercícios
- Ferramenta de monitoramento de progresso
- Indicador de saúde cardiovascular
- Método de estratificação de risco

## Conclusão

Apesar de suas limitações, o Teste de Cooper mantém-se como uma ferramenta valiosa na avaliação da capacidade aeróbica, oferecendo informações cruciais para a prescrição individualizada de exercícios e o acompanhamento da evolução da aptidão cardiorrespiratória.
    `,
    author: authors[1],
    publishedAt: new Date('2024-01-20'),
    category: categories[1],
    tags: ['teste-cooper', 'avaliação', 'capacidade-aeróbica'],
    readTime: 6,
    featuredImage: '/images/articles/teste-cooper.jpg'
  },
  {
    id: 'composicao-corporal-metodos',
    title: 'Métodos de Avaliação da Composição Corporal: Da Bioimpedância ao DEXA',
    slug: 'composicao-corporal-metodos',
    excerpt: 'Comparação detalhada dos principais métodos de avaliação da composição corporal, suas vantagens, limitações e aplicações práticas.',
    content: `
# Avaliação da Composição Corporal: Escolhendo o Método Ideal

A avaliação precisa da composição corporal é fundamental para o desenvolvimento de estratégias eficazes de treinamento e nutrição.

## Importância da Composição Corporal

A composição corporal fornece informações mais relevantes que o peso corporal isolado, permitindo:
- Avaliação do estado nutricional
- Monitoramento de mudanças induzidas pelo treinamento
- Identificação de riscos à saúde
- Personalização de intervenções

## Principais Métodos de Avaliação

### 1. Bioimpedância Elétrica (BIA)

**Princípio**: Medição da resistência à passagem de corrente elétrica através dos tecidos corporais.

**Vantagens**:
- Não invasivo e rápido
- Equipamentos portáteis disponíveis
- Custo relativamente baixo
- Facilidade de aplicação

**Limitações**:
- Sensível ao estado de hidratação
- Variabilidade entre equipamentos
- Precisão limitada em casos extremos
- Necessita equações populacionais específicas

**Aplicação Prática**: Monitoramento rotineiro em academias e clínicas.

### 2. Absorciometria por Dupla Emissão de Raios-X (DEXA)

**Princípio**: Utilização de dois feixes de raios-X para diferenciação dos tecidos corporais.

**Vantagens**:
- Alta precisão e reprodutibilidade
- Avaliação regional da composição
- Medição da densidade mineral óssea
- Considerado padrão-ouro para pesquisa

**Limitações**:
- Custo elevado do equipamento
- Exposição à radiação (mínima)
- Necessita técnico especializado
- Tempo de exame mais longo

**Aplicação Prática**: Avaliações detalhadas em centros especializados.

### 3. Método Navy (Circunferências)

**Princípio**: Estimativa baseada em medidas de circunferências corporais.

**Vantagens**:
- Extremamente simples e barato
- Não necessita equipamentos especiais
- Aplicável em campo
- Bom para triagem populacional

**Limitações**:
- Precisão limitada
- Não diferencia tipos de tecido
- Variabilidade inter-avaliador
- Baseado em equações populacionais

**Aplicação Prática**: Triagem inicial e monitoramento básico.

### 4. Ultrassonografia

**Princípio**: Medição da espessura de tecidos através de ondas ultrassônicas.

**Vantagens**:
- Avaliação regional específica
- Visualização direta dos tecidos
- Sem exposição à radiação
- Boa reprodutibilidade

**Limitações**:
- Dependente do operador
- Custo do equipamento
- Tempo de avaliação maior
- Necessita treinamento específico

**Aplicação Prática**: Avaliação detalhada em centros especializados.

### 5. Dobras Cutâneas

**Princípio**: Estimativa através da medição da espessura de dobras cutâneas.

**Vantagens**:
- Baixo custo
- Portabilidade
- Tradição em pesquisa
- Múltiplas equações disponíveis

**Limitações**:
- Alta dependência do avaliador
- Dificuldade em obesos
- Variabilidade das equações
- Pressupõe densidade constante

**Aplicação Prática**: Avaliação em ambiente esportivo e acadêmico.

## Fatores que Afetam a Precisão

1. **Estado de Hidratação**
2. **Momento da Avaliação**
3. **Experiência do Avaliador**
4. **Calibração dos Equipamentos**
5. **Características da População**

## Recomendações Práticas

### Para Uso Clínico
- DEXA para avaliações precisas
- Bioimpedância para monitoramento rotineiro

### Para Uso Esportivo
- Ultrassonografia para atletas de elite
- Dobras cutâneas para acompanhamento regular

### Para Uso Populacional
- Método Navy para triagens
- Bioimpedância para programas de saúde

## Interpretação dos Resultados

A interpretação deve considerar:
- Idade e gênero
- Nível de atividade física
- Objetivos individuais
- Histórico de saúde
- Tendências temporais

## Conclusão

A escolha do método de avaliação da composição corporal deve ser baseada nos objetivos da avaliação, recursos disponíveis e características da população. A combinação de métodos pode oferecer informações mais completas e confiáveis.
    `,
    author: authors[2],
    publishedAt: new Date('2024-01-25'),
    category: categories[1],
    tags: ['composição-corporal', 'avaliação', 'métodos'],
    readTime: 10,
    featuredImage: '/images/articles/composicao-corporal.jpg'
  },
  {
    id: 'treinamento-forca-1rm',
    title: 'Treinamento de Força: Compreendendo e Aplicando o Teste de 1RM',
    slug: 'treinamento-forca-1rm',
    excerpt: 'Guia abrangente sobre o teste de uma repetição máxima, suas aplicações no treinamento e métodos seguros de estimativa.',
    content: `
# O Teste de 1RM: Fundamentação Científica e Aplicação Prática

O teste de uma repetição máxima (1RM) representa o padrão-ouro para avaliação da força muscular dinâmica máxima.

## Definição e Conceito

O 1RM é definido como a maior carga que pode ser levantada uma única vez com técnica correta através de toda a amplitude de movimento. Esta medida fornece informações valiosas sobre a capacidade de produção de força máxima.

## Fundamentos Fisiológicos

### Sistemas Energéticos
- Sistema ATP-CP: Fornecimento energético imediato
- Recrutamento de unidades motoras de alto limiar
- Ativação neural máxima

### Adaptações Neurais
- Melhoria da coordenação intramuscular
- Aumento da frequência de disparos neurais
- Redução da inibição de órgãos tendinosos de Golgi

## Protocolos de Aplicação

### Método Direto (Teste Real)

**Aquecimento**:
1. 5-10 repetições com 40-60% do 1RM estimado
2. 3-5 repetições com 60-80% do 1RM estimado
3. 1-3 repetições com 80-90% do 1RM estimado

**Protocolo de Teste**:
- Incrementos de 2,5-5kg por tentativa
- Descanso de 3-5 minutos entre tentativas
- Máximo de 5 tentativas para evitar fadiga

### Método Indireto (Estimativa)

**Fórmulas Mais Utilizadas**:

1. **Epley**: 1RM = peso × (1 + reps/30)
2. **Brzycki**: 1RM = peso × (36/(37-reps))
3. **Lander**: 1RM = peso × (100/(101,3-2,67123×reps))

**Vantagens**:
- Menor risco de lesão
- Aplicável a iniciantes
- Não requer supervisão especializada
- Menos fatigante

## Aplicações no Treinamento

### Prescrição de Intensidade
- Força máxima: 85-95% do 1RM
- Hipertrofia: 65-85% do 1RM
- Resistência muscular: 40-65% do 1RM
- Potência: 30-60% do 1RM

### Periodização
- Teste inicial para estabelecimento de cargas
- Reavaliação a cada 4-6 semanas
- Ajuste de intensidades conforme progresso

### Monitoramento de Progresso
- Indicador objetivo de melhoria
- Comparação entre indivíduos
- Análise de eficácia de programas

## Considerações de Segurança

### Contraindicações
- Lesões musculoesqueléticas ativas
- Problemas cardiovasculares não controlados
- Iniciantes sem base técnica
- Histórico de lesões graves

### Precauções
- Aquecimento adequado obrigatório
- Supervisão de profissional qualificado
- Equipamentos de segurança (barras, travas)
- Técnica perfeita prioritária

## Fatores que Influenciam o 1RM

### Fatores Intrínsecos
1. **Massa Muscular**: Maior área de secção transversa
2. **Tipo de Fibra**: Predominância de fibras tipo II
3. **Coordenação**: Eficiência neural
4. **Alavancas**: Características antropométricas

### Fatores Extrínsecos
1. **Experiência de Treinamento**: Adaptações específicas
2. **Estado Nutricional**: Disponibilidade energética
3. **Sono e Recuperação**: Estado de prontidão neural
4. **Motivação**: Aspectos psicológicos

## Limitações do Teste

- Especificidade angular limitada
- Não considera velocidade de movimento
- Risco de lesão em populações especiais
- Influência de fatores psicológicos
- Variabilidade dia-a-dia

## Exercícios Recomendados para Teste

### Exercícios Multi-articulares
- **Agachamento**: Força de membros inferiores
- **Supino**: Força de membros superiores
- **Levantamento Terra**: Força posterior global

### Exercícios Uni-articulares
- **Rosca Direta**: Força de bíceps
- **Tríceps Testa**: Força de tríceps
- **Leg Press**: Força de quadríceps

## Interpretação dos Resultados

### Classificação Relativa (% peso corporal)

**Supino Reto**:
- Elite: >160% PC
- Avançado: 125-160% PC
- Intermediário: 100-125% PC
- Iniciante: 75-100% PC

**Agachamento**:
- Elite: >200% PC
- Avançado: 150-200% PC
- Intermediário: 125-150% PC
- Iniciante: 100-125% PC

## Aplicação Prática

### Para Atletas
- Monitoramento de picos de força
- Identificação de assimetrias
- Planejamento de tapering

### Para População Geral
- Avaliação de aptidão física
- Prescrição de exercícios
- Motivação e engajamento

## Conclusão

O teste de 1RM, quando aplicado corretamente, fornece informações valiosas para prescrição e monitoramento do treinamento de força. A escolha entre métodos diretos e indiretos deve considerar a população-alvo, objetivos e recursos disponíveis.
    `,
    author: authors[1],
    publishedAt: new Date('2024-02-01'),
    category: categories[2],
    tags: ['1rm', 'força', 'treinamento', 'avaliação'],
    readTime: 12,
    featuredImage: '/images/articles/1rm-treinamento.jpg'
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (categoryId: string): Article[] => {
  return articles.filter(article => article.category.id === categoryId);
};

export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => article.tags.includes(tag));
};

export const getFeaturedArticles = (): Article[] => {
  return articles.slice(0, 3);
};

export const getRecentArticles = (limit: number = 5): Article[] => {
  return articles
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);
};