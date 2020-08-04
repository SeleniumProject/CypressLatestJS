const { createYield } = require("typescript")
describe('This is test with beforeeach concepts in cypress ', () => {

    before(() => {
        cy.log('i am before ')
        cy.visit('http://demowebshop.tricentis.com/login')
    })

    after(() => {

        cy.log('i am after')
    })


    //1st run before it scenario
    beforeEach(() => {
        // root-level hook
        // runs before every test
        cy.log('I am before Each')

        cy.get('.ico-login').click()
    })



    it('1st scenario with valid credentials', () => {

        cy.get('input#Email.email').type('gmail125@gmail.com')
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('input#Password.password').type('test123')
        //  cy.wait(2000) // 2000ms = 2sec
        cy.get('input.button-1.login-button').click()
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('.ico-logout').click()
    })

    it('2nd scenario with inavlid credentials', () => {
        cy.get('input#Email.email').type('gmail125@gmail.com')
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('input#Password.password').type('t27623')
        //  cy.wait(2000) // 2000ms = 2sec
        cy.get('input.button-1.login-button').click()
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('.ico-logout').click()
    })

    it('3rd scenario with empty data', () => {
        cy.get('input#Email.email').clear()
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('input#Password.password').clear()
        //  cy.wait(2000) // 2000ms = 2sec
        cy.get('input.button-1.login-button').click()
        // cy.wait(2000) // 2000ms = 2sec

    })


    //last run after each it scenario 
    afterEach(() => {
        cy.log('I am the After Each')
    })
})
