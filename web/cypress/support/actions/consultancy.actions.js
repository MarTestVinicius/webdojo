
Cypress.Commands.add('fillConsultancyForm', (form) => {

    cy.get('#name').type(form.name)
    //cy.get('input[placeholder="Digite seu nome completo"]').type('Marcus Vinícius')

    cy.get('#email').type(form.email)
    //cy.get('input[placeholder="Digite seu email"]').type('Marcus Vinícius')

    cy.get('#phone').type(form.phone).should('have.value', '(81) 99919-1570')
    //cy.get('input[placeholder="(00) 00000-0000"]').type('Marcus Vinícius')

    //cy.get('#consultancyType').select('In Company')
    cy.contains('label', 'Tipo de Consultoria').parent().find('select').select(form.consultacyType)

    if (form.personType === 'CPF') {
        cy.contains('label', 'Pessoa Física').find('input').check().should('be.checked')

        cy.contains('label', 'Pessoa Jurídica').find('input').should('be.not.checked')

    }

    if (form.personType === 'CNPJ') {
        cy.contains('label', 'Pessoa Jurídica').find('input').check().should('be.checked')

        cy.contains('label', 'Pessoa Física').find('input').should('be.not.checked')

    }


    cy.contains('label', form.personType)
        .parent()
        .find('input')
        .type(form.document)


    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel).find('input').check().should('be.checked')
    })

    cy.get('input[type="file"]').selectFile(form.file, { force: true })

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type(form.description)

    form.techs.forEach((techs) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]').type(techs).type('{enter}');

        cy.contains('label', 'Tecnologias').parent().contains('span', techs).should('be.visible')

    })

    if (form.terms === true) {
        cy.contains('label', 'termos de uso').find('input').check();
    }

})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário').click();
})

Cypress.Commands.add('ValidateConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 }).should('be.visible')
        .find('.modal-content p').should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.').should('be.visible')
        .parent()
        .parent()
        .find('.modal-footer').should('be.visible');

    cy.contains('Sucesso!').should('be.visible');
})