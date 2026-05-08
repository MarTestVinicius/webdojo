describe('Validações de Alerts em java scripts', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts');
    })

    it('Deve validar mensagem de alerta', () => {

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })


    it('Deve confirmar um diálogo e validar a resposa positiva', () => {

        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true // esse retorno para ir para o botão de confirmação do Alert
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve Cancelar um diálogo e validar a resposa positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false // esse retorno para ir para o botão de confirmação do Alert
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()

    })

    it('Deve interagir com o prompt, inserir um texto e validar uma mensagem', () => {

        const nameUser = 'Marcus'

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(nameUser)
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá ' + nameUser + '! Boas-vindas ao WebDojo!')
        })


        cy.contains('button', 'Mostrar Prompt').click()

    })
})