describe('Quadro Kanban', () => {

    it('deve mover o item do ToDo para Done atualizando o quadro', () => {
        cy.login()

        cy.goTo('Kanban', 'Kanban')

        const dataTransfer = new DataTransfer();

        cy.contains('div[draggable=true]','Documentar API')
        .trigger('dragstart',{dataTransfer})

        cy.get('.column-done')
        .trigger('drop',{dataTransfer})
        .find('h3')
        .should('have.text','Done (4)')

        cy.get('.column-done')
        .should('include.text','Documentar API')
        .and('include.text','Criar documentação da API com Swagger')


    })
})