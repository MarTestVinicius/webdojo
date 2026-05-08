import {formatarDataAtual} from '../support/util'

describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000')
  })
})

//.only para executar um unico cenário depois do it ou o skip para pular o cenário e executar o próximo.

describe('Login', () => {

  it('Deve logar com Sucesso', () => {
    
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123');

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

      cy.getCookie('login_date').should('exist');

      cy.getCookie('login_date').should((cookie) => {
        expect(cookie.value).to.eq(formatarDataAtual());
      })

      cy.window().then((win) => {
        const token = win.localStorage.getItem('token');
        expect(token).to.match(/^[a-fA-F0-9]{32}$/);
      })
  })

  it('Não deve Logar com Senha Incorreta', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana321');
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })


  it('Não deve Logar com Login Incorreto', () => {
    cy.start()
    cy.submitLoginForm('teste@webdojo.com', 'katana123');
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})