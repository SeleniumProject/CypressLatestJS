const { createYield } = require("typescript")

describe('This is data driven testing using Json', function(){

    // function()   -- both are same
    // () => 

    before(()=>{
        cy.log('Open the Browser the Navigate to Site Url')
               
        cy.fixture('register').then(function(data){
            this.data =data
            cy.visit(this.data.url)
        }
    })

    beforeEach(()=>{
      
        cy.log('User click on Login Link')
        cy.get('.ico-register').click()
    })


    it('user enter the Register Data', function(){

        cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click()
        cy.get('#FirstName').type(this.data.Firstname, {delay:100})
        cy.get('#LastName').type(this.data.LastName, {delay:50})
        cy.get('#Email').type(this.data.Email, {delay:50})
        cy.get('#Password').type(this.data.password, {delay:50})
        cy.get('#ConfirmPassword').type(this.data.confirmpassword)
        cy.get('#register-button').click()

    })
})