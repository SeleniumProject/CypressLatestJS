// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('selectCategories',(categoryName)=>{

    cy.get('li.inactive').each(($el1, index1 , $list1)=>{
        if($el1.text().includes(categoryName))
        {
            cy.get('li.inactive').eq(index1).click()
        }
    }
})



Cypress.Commands.add('Login', (email, password) =>{
    cy.get('.ico-login').click()
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('form > .buttons > .button-1').click()
})

Cypress.Commands.add('selectBooks',(books)=>{

    cy.get('h2.product-title a').each(($el1, index1 , $list1)=>{
        if($el1.text().includes(books))
        {
            cy.wait(1000)
            cy.get('input.button-2.product-box-add-to-cart-button').eq(index1).click()
        }
    }
})


