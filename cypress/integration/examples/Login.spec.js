const { idText } = require("typescript")

describe('This test is to test the cypress concepts ', ()=> {


it('Validate the email in login page', ()=> {

    cy.visit('http://demowebshop.tricentis.com/')
    cy.viewport('Iphone -x')
    cy.log('User has navigated to demo webshop url')

    cy.get('.ico-login').click()
    cy.log('User has clicked on Login link')
    // cy.wait(5000)
    // cy.reload()
    // cy.get('#Email').clear()
    // cy.wait(1000)
    // cy.get('#Email').type('someemail@gmail.com', {delay:50})
    // cy.wait(2000)
    // cy.get('#Password').type('testing123',{delay:50})
     cy.get('#Email').as('emailaddress')
     cy.get('@emailaddress').clear()
     cy.get('@emailaddress').type('hotmail@gmail.com')

     cy.wait(3000)

     cy.get('#Password').as('pwd')
     cy.get('@pwd').clear()
     cy.get('@pwd').type('tetsing2323234')

})

})