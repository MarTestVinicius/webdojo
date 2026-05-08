# 🌲 Projeto de Automação de Testes com Cypress

Este repositório contém a aplicação web e o projeto de automação de testes End-to-End (E2E) desenvolvido com o framework [Cypress](https://www.cypress.io/). O projeto visa automatizar testes para uma aplicação web de demonstração, cobrindo funcionalidades como login, busca de CEP, formulários de consultoria, interações com elementos (hover, iframes), e outras features.

## 🛠 Tecnologias Utilizadas

* **JavaScript**
* **Cypress** (Framework E2E)
* **Node.js & npm/yarn**
* **cypress-real-events** (Para simular eventos reais do mouse/teclado)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd web
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

## 🖥️ Executando a Aplicação

A aplicação web é servida localmente para testes:

```bash
npm run dev
```

Isso iniciará o servidor na porta 3000 (http://localhost:3000).

## 🧪 Executando os Testes

### Todos os Testes
```bash
npm run test
```
Executa todos os testes em modo headless com viewport 1440x900.

### Interface Gráfica do Cypress
```bash
npm run test:ui
```
Abre a interface do Cypress para execução interativa.

### Teste Específico: Login
```bash
npm run test:login
```
Executa apenas o teste de login com viewport desktop.

### Teste Específico: Login Mobile
```bash
npm run test:login:mobile
```
Executa o teste de login com viewport mobile (414x896).

## 📁 Estrutura do Projeto

A arquitetura do projeto de testes está organizada da seguinte forma:

```
web/
├── cypress/
│   ├── e2e/               # Arquivos de testes (specs) separados por contexto
│   │   ├── alerts.cy.js   # Testes de alertas
│   │   ├── cep.cy.js      # Testes de busca de CEP
│   │   ├── consultancy.cy.js # Testes do formulário de consultoria
│   │   ├── github.cy.js   # Testes de integração com GitHub
│   │   ├── hover.cy.js    # Testes de interações hover
│   │   ├── iframe.cy.js   # Testes de iframes
│   │   ├── kanban.cy.js   # Testes do quadro Kanban
│   │   ├── links.cy.js    # Testes de links
│   │   ├── login.cy.js    # Testes de login
│   │   └── studio.cy.js   # Testes utilizando Cypress Studio
│   ├── fixtures/          # Massa de dados estática (JSON) para uso nos testes
│   │   ├── cep.cy.json    # Dados de CEP (Brasília)
│   │   └── consultasy.json # Dados para formulário de consultoria
│   ├── screenshots/       # Evidências de imagens geradas automaticamente em caso de falhas
│   ├── support/           # Configurações globais e comandos customizados
│   │   ├── actions/       # Ações reutilizáveis (Page Objects)
│   │   │   └── consultancy.actions.js # Ações para o formulário de consultoria
│   │   ├── commands.js    # Comandos customizados do Cypress
│   │   ├── e2e.js         # Arquivo de inicialização
│   │   └── util.js        # Funções utilitárias (ex: formatação de data)
│   └── videos/            # Gravações em vídeo (desabilitadas por padrão)
├── cypress.config.js      # Arquivo de configuração principal do Cypress
├── package.json           # Dependências e scripts de execução
└── README.md              # Este arquivo
```

## ⚙️ Configuração do Cypress

O arquivo `cypress.config.js` define:

- `baseUrl`: http://localhost:3000
- `experimentalStudio`: true (habilita o Cypress Studio)
- `video`: false (desabilita gravações de vídeo)
- Viewport padrão: 1440x900 (pode ser sobrescrito nos testes)

## 🛠️ Comandos Customizados

### Comandos Gerais
- `cy.start()`: Visita a página inicial da aplicação.
- `cy.submitLoginForm(email, senha)`: Preenche e submete o formulário de login.
- `cy.goTo(btnName, pageTitle)`: Navega clicando em um botão específico.

### Ações Específicas
- `cy.fillConsultancyForm(form)`: Preenche o formulário de consultoria com dados fornecidos.

## 📊 Fixtures

- **cep.cy.json**: Contém dados de endereço para testes de busca de CEP (ex: Brasília).
- **consultasy.json**: Dados para preenchimento do formulário de consultoria, incluindo informações pessoais, tecnologias, etc.

## 📈 Utilitários

- `formatarDataAtual()`: Função para formatar a data atual no formato DD/MM/YYYY, usada para validação de cookies de login.

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📝 Licença

Este projeto é privado e não possui licença pública.