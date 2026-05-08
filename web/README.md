# 🌲 Projeto de Automação de Testes com Cypress

Este repositório contém a aplicação web e o projeto de automação de testes End-to-End (E2E) desenvolvido com o framework [Cypress](https://www.cypress.io/).

## 🛠 Tecnologias Utilizadas

* **JavaScript**
* **Cypress** (Framework E2E)
* **Node.js & npm**

## 📁 Estrutura do Projeto

A arquitetura do projeto de testes está organizada da seguinte forma dentro do diretório `WEB`:

```text
WEB/
├── cypress/
│   ├── e2e/               # Arquivos de testes (specs) separados por contexto (ex: login, cep, github, etc.)
│   ├── fixtures/          # Massa de dados estática (arquivos JSON, PDFs) para uso nos testes
│   ├── screenshots/       # Evidências de imagens geradas automaticamente em caso de falhas
│   ├── support/           # Configurações globais e comandos customizados
│   │   ├── actions/       # Ações reutilizáveis (Page Objects / App Actions) para isolar a lógica de iteração
│   │   ├── commands.js    # Comandos customizados do Cypress (ex: cy.login())
│   │   ├── e2e.js         # Arquivo de inicialização, executado antes de todas as specs
│   │   └── util.js        # Funções utilitárias e helpers
│   └── videos/            # Gravações em vídeo das execuções em modo headless
├── dist/                  # Build da aplicação web gerada para o servidor local
├── cypress.config.js      # Arquivo de configuração principal do Cypress
└── package.json           # Dependências e scripts de execução