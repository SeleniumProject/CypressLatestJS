const { createYield } = require("typescript")

describe('This is data driven testing using Json', function(){

    // function()   -- both are same
    // () => 

    before(()=>{
        cy.log('Open the Browser the Navigate to Site Url')
               
        cy.fixture('login').then(function(data){
            this.data =data
            cy.visit(this.data.url)
        }
    })

    beforeEach(()=>{
      
        cy.log('User click on Login Link')
        cy.get('.ico-login').click()
    })


    it('user enter the Login Data', function(){

        cy.get('input#Email.email').type(this.data.email)
        // cy.wait(2000) // 2000ms = 2sec
         cy.get('input#Password.password').type(this.data.password)
       //  cy.wait(2000) // 2000ms = 2sec
         cy.get('input.button-1.login-button').click()

    })
})