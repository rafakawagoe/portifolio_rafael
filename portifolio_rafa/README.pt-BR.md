# 🚀 Portfólio Rafael Kawagoe

[![en](https://img.shields.io/badge/lang-en-red.svg)](README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-BR.md)

Portfólio profissional desenvolvido com React, TypeScript e Vite, apresentando projetos, habilidades e experiência profissional. Suporta múltiplos idiomas (Português e Inglês) e possui integração completa com Google Analytics.

🌐 **[Ver Site ao Vivo](https://rafakawagoe.github.io/portifolio_rafael/)**

## ✨ Características

- 🎨 **Design Moderno e Responsivo** - Interface limpa e profissional que funciona em todos os dispositivos
- 🌍 **Bilíngue** - Suporte para Português (pt-BR) e Inglês (en-US) com troca dinâmica
- ⚡ **Performance Otimizada** - Lazy loading, code splitting e React.memo para carregamento rápido
- 📊 **Google Analytics** - Rastreamento completo de eventos e comportamento do usuário
- ♿ **Acessível** - Atributos ARIA e boas práticas de acessibilidade
- 🎯 **SEO Otimizado** - Meta tags Open Graph e Twitter Card para melhor visibilidade
- 🔄 **Navegação Suave** - Transições e animações fluidas entre seções
- 🎪 **Carrosséis Interativos** - Exibição de projetos e experiências profissionais

## 🛠️ Tecnologias

### Core

- **React 19.1.1** - Biblioteca UI com recursos mais recentes
- **TypeScript 5.9.3** - Type safety e melhor DX
- **Vite 7.1.14** - Build tool ultra-rápida com Rolldown

### Roteamento & Internacionalização

- **react-router-dom 7.9.5** - Navegação SPA
- **i18next 25.6.2** - Sistema de internacionalização
- **react-i18next 16.3.1** - Integração React com i18next

### SEO & Analytics

- **react-helmet-async 2.0.5** - Gerenciamento de meta tags
- **Google Analytics** - Rastreamento customizado de eventos

### UI & Ícones

- **react-icons 5.5.0** - Biblioteca de ícones

### Qualidade de Código

- **ESLint 9.36.0** - Linting e boas práticas
- **Prettier 3.6.2** - Formatação consistente
- **Husky 9.1.7** - Git hooks
- **lint-staged 16.2.6** - Validação em commits

### Deploy

- **gh-pages 6.3.0** - Deploy automatizado no GitHub Pages

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/rafakawagoe/portifolio_rafael.git

# Entre no diretório
cd portifolio_rafael

# Instale as dependências (use --legacy-peer-deps para React 19)
npm install --legacy-peer-deps
```

## ⚙️ Configuração

Crie um arquivo `.env.local` na raiz do projeto com suas configurações:

```env
# Social Media Links
VITE_WHATSAPP_NUMBER=+5511999999999
VITE_LINKEDIN_URL=https://linkedin.com/in/seu-perfil
VITE_EMAIL=seu.email@example.com
VITE_GITHUB_URL=https://github.com/seu-usuario
VITE_PHONE=+5511999999999

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Compila para produção
npm run preview          # Preview do build de produção

# Qualidade de Código
npm run lint             # Executa ESLint
npm run lint:fix         # Corrige problemas do ESLint automaticamente
npm run format           # Formata código com Prettier

# Deploy
npm run deploy           # Build e deploy no GitHub Pages
```

## 📊 Rastreamento Analytics

O projeto inclui rastreamento completo de eventos:

- **Page Views** - Visualizações de páginas automáticas
- **Scroll Tracking** - Rastreamento de profundidade de scroll (25%, 50%, 75%, 100%)
- **Time on Page** - Tempo gasto em cada página
- **Navigation Clicks** - Cliques em links de navegação
- **Social Media Clicks** - Cliques em links sociais
- **Language Changes** - Mudanças de idioma
- **Button Interactions** - Cliques em CTAs
- **Project Clicks** - Interações com cards de projetos
- **Carousel Interactions** - Navegação em carrosséis

## 🏗️ Estrutura do Projeto

```
portifolio_rafa/
├── public/              # Arquivos estáticos
│   └── 404.html        # Redirect para SPA no GitHub Pages
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── Button/
│   │   ├── Navbar/
│   │   ├── ErrorBoundary/
│   │   ├── LoadingSpinner/
│   │   ├── SEO/
│   │   └── ...
│   ├── features/       # Features/páginas
│   │   ├── HomePage/
│   │   └── AboutPage/
│   ├── hooks/          # hooks customizados
│   ├── locales/        # Arquivos de tradução
│   ├── services/       # API e serviços
│   ├── utils/          # Utilitários e helpers
│   │   └── analytics.ts
│   ├── i18n/           # Configuração i18n
│   ├── main.tsx        # Inicialização
│   └── index.css       # Estilos globais
├── .husky/             # Git hooks
├── .env.local          # Variáveis de ambiente (não commitado)
└── index.html          # HTML template
```

## 🎨 Boas Práticas Implementadas

- ✅ **Error Boundaries** - Tratamento gracioso de erros
- ✅ **Lazy Loading** - Carregamento sob demanda de rotas
- ✅ **React.memo** - Otimização de re-renders
- ✅ **TypeScript Strict Mode** - Type safety máximo
- ✅ **CSS Variables** - Design tokens para consistência
- ✅ **Accessibility** - ARIA labels e atributos semânticos
- ✅ **SEO** - Meta tags completas e Open Graph
- ✅ **Code Quality** - ESLint + Prettier + Husky
- ✅ **Conventional Commits** - Histórico de commits padronizado

## 🚢 Deploy

O projeto está configurado para deploy automatizado no GitHub Pages:

```bash
npm run deploy
```

Isso irá:

1. Compilar o projeto (`npm run build`)
2. Fazer deploy da pasta `dist/` para a branch `gh-pages`
3. Disponibilizar em `https://[username].github.io/portifolio_rafael/`

### Configuração GitHub Pages

1. Vá em Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`
4. Salve as configurações

## 🔧 Troubleshooting

### React 19 e Dependências

Se encontrar erros de peer dependency, use:

```bash
npm install --legacy-peer-deps
```

### Analytics não funciona em produção

Certifique-se de configurar `VITE_GA_MEASUREMENT_ID` nas variáveis de ambiente do GitHub:

- Settings → Secrets and variables → Actions
- Adicione `VITE_GA_MEASUREMENT_ID` com seu ID do Google Analytics

## 📝 Licença

Este projeto é de uso pessoal e está disponível como portfólio open-source.

## 👤 Autor

**Rafael Kawagoe**

- GitHub: [@rafakawagoe](https://github.com/rafakawagoe)
- LinkedIn: [Rafael Kawagoe](https://www.linkedin.com/in/rafaelkawagoe/)

---

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!
