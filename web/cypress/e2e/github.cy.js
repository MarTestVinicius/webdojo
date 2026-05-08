describe('Gerenciamento de Perfis no Github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub');

    })

    it('Deve poder Preencher os campos do Github', () => {

        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('papitodev')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', 'papitodev')//papito dev é o valor único da tabela, por isso que ele está partindo dele para achar os outros
            .should('be.visible')
            .as('Trprofile')

        const elements = ['Fernando Papito', 'QA']

        elements.forEach((element) => {
            cy.get('@Trprofile').contains(element)
                .should('be.visible')
        })
    })

    it('Deve poder remover um perfil do GitHub', () => {
        const removeProfile = {
            name: 'Fernando Papito',
            username: 'papito123',
            profile: 'QA'
        }

        cy.get('#name').type(removeProfile.name)
        cy.get('#username').type(removeProfile.username)
        cy.get('#profile').type(removeProfile.profile)
        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', removeProfile.username)//papito dev é o valor único da tabela, por isso que ele está partindo dele para achar os outros
            .should('be.visible')
            .as('Trprofile')

        cy.get('@Trprofile').find('button[title="Remover perfil"]').click()
        cy.contains('table tbody', removeProfile.username)
            .should('not.exist')


    })

    it('Deve ir ao perfil do GitHub', () => {
        const perfilProfile = {
            name: 'Fernando Papito',
            username: 'papitodev',
            profile: 'QA'
        }

        cy.get('#name').type(perfilProfile.name)
        cy.get('#username').type(perfilProfile.username)
        cy.get('#profile').type(perfilProfile.profile)
        cy.contains('button', 'Adicionar Perfil').click();

        cy.contains('table tbody tr', perfilProfile.username)//papito dev é o valor único da tabela, por isso que ele está partindo dele para achar os outros
            .should('be.visible')
            .as('Trprofile')

        cy.get('@Trprofile').find('a[title="Abrir perfil no GitHub"]')
        .should('have.attr','href','https://github.com/'+perfilProfile.username)
        .and('have.attr','target','_blank')
    })

})