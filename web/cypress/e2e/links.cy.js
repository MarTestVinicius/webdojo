describe('links abrindo nova guia/janela', () => {
    it('validando o atributo do link do instagram', () => {
        cy.login()
        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', () => {
        cy.login()

        cy.goTo('Formulário', 'Consultoria')

        cy.contains('a','termos de uso')
        .invoke('removeAttr','target')
        .click()

        cy.contains('Termos de Uso').should('be.visible')

    })

})