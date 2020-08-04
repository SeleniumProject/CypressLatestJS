const { idText, createYield } = require("typescript")

    describe('Verify the login functionality scenarios ', ()=>{

    it('Validate the Login functionality with Valid data', ()=>{
       //Navigate to Demo Webshop url
       cy.visit('http://demowebshop.tricentis.com/')

       cy.clearCookies({log:true})   // browser level
       cy.clearLocalStorage('Clear your Temp Files history', {log:true})   /// system temp files level

       cy.wait(2000)
       // adding date stamp

       const date = new Date(2020,7,21).getTime()
       cy.clock(date)

       cy.log('Your time now ' + date)
       
       //verify the title of the home page
       cy.title().should('include', 'Demo Web Shop')
       // user click on login link
       cy.get('.ico-login').click()

       cy.wait(2000)
       // verify the title of login page
       cy.title().should('include','Demo Web Shop. Login')

       cy.get('#Email').as('emailaddress')
       cy.get('@emailaddress').clear()
       cy.get('@emailaddress').type('gmail125@gmail.com', {delay:50})

       cy.wait(2000)
       cy.get('#Password').as('pwd')
       cy.get('@pwd').clear()
       cy.get('@pwd').type('test123',{delay:50})

       cy.get('form > .buttons > .button-1').click()
       cy.wait(2000)
        // it is verify the that perticular element available int he page but not text 
       cy.get('.ico-logout').should('be.visible').and('contains','Log out')   // verify both elements and text 
       cy.wait(2000)
       cy.get('.header-links > ul > :nth-child(1) > .account').should('be.visible').and('contains','gmail125@gmail.com')
    })

})