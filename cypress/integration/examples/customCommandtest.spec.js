const { createYield } = require("typescript")

describe('this scenario based on custom commands', function(){

    beforeEach(()=>{

        cy.log('Open the Browser the Navigate to Site Url')
               
        cy.fixture('login').then(function(data){
            this.data =data
            cy.visit(this.data.url)
        }
    })

    it('This scenario is to add multiple products into cart', function(){

         // cy.Login(this.data.email,this.data.password)

          cy.get('.block-category-navigation > .listbox > .list > :nth-child(1) > a').click()
          cy.wait(3000)    // 2sec
          cy.selectBooks(this.data.product1)
          cy.wait(2000) 
          cy.selectBooks(this.data.product2)
          cy.wait(2000) 
          cy.selectBooks(this.data.product3)
          cy.wait(2000)

    })
})