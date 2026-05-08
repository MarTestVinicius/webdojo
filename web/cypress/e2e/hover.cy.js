describe('Simulando Mouse Hover', () => {

    it('deve mostrar o texto ao passar o mouse encima do Link do instagram', () => {
        cy.login()

        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    })
})