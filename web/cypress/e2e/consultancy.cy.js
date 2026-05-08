//caso eu importe o arquivo Json do consultasy eu não precisto do this. para achar as massas de dados.
import { personal, company } from '../fixtures/consultasy.json'

describe('Formulário de consultoria', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulário', 'Consultoria')
    })
    before(() => {
        cy.log('acontece uma ves antes de tudo')
    })

    it('Deve solicitar consultoria individual', () => {
        // coloquei o function() porque a função de seta "() =>" Não iria ler corretamente as massadas de dados.

        cy.fillConsultancyForm(personal);

        cy.submitConsultancyForm();

        cy.ValidateConsultancyModal();
    })

    it('Deve solicitar consultoria in company', () => {

        // coloquei o function() porque a função de seta "() =>" Não iria ler corretamente as massadas de dados.

        cy.fillConsultancyForm(company);

        cy.submitConsultancyForm();

        cy.ValidateConsultancyModal();

    })

    it('deve verificar os campos obrigatórios', () => {

        cy.submitConsultancyForm();

        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        ]

        requiredFields.forEach(({label, message}) => {
            cy.contains('label', label)
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', message)  
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)');
        })
    })

    afterEach(() => {
        cy.log('só para colocar aqui para ver se sai alguma coisa')
    })
    after(() => {
        cy.log('Só acontece uma vez depois de tudo')
    })
})