import endereco from '../fixtures/cep.cy.json'

describe('CEP', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Integração', 'Consulta de CEP');
    })

    it('Deve consultar um CEP', () => {

        cy.request({
            method: 'GET',
            url: `https://viacep.com.br/ws/${endereco.cep}/json/`,
            failOnStatusCode: false // Garante que o Cypress não falhe o teste imediatamente se a API der erro 400 ou 500
        }).then((response) => {

            if (response.status === 200) {
                cy.get('#cep').type(endereco.cep);
                cy.contains('button', 'Buscar').click()

                cy.get('#street').should('have.value', endereco.rua)
                cy.get('#neighborhood').should('have.value', endereco.bairro)
                cy.get('#city').should('have.value', endereco.cidade)
                cy.get('#state').should('have.value', endereco.estado)

            } else {
                cy.intercept('GET', `https://viacep.com.br/ws/${endereco.cep}/json/`, {
                    statusCode: 200,
                    body: {
                        logradouro: endereco.rua,
                        bairro: endereco.bairro,
                        localidade: endereco.cidade,
                        uf: endereco.estado
                    }
                }).as('getCep')

                cy.get('#cep').type(endereco.cep);
                cy.contains('button', 'Buscar').click()

                cy.wait('@getCep')// fazer um mock do sistema, caso o viaCEP de pesquisa saia do AR

                cy.get('#street').should('have.value', endereco.rua)
                cy.get('#neighborhood').should('have.value', endereco.bairro)
                cy.get('#city').should('have.value', endereco.cidade)
                cy.get('#state').should('have.value', endereco.estado)

            }
        })
    })

})