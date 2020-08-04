const { idText, createYield } = require("typescript")

beforeEach(() => {
    // root-level hook
    // runs before every test
  })
  
  describe('Hooks', function() {
    before(() => {
      // runs once before all tests in the block
      cy.fixture('example').then(function(data){
            this.data =data;
      })
    })
  
    it('some data transfer', function(){

        cy.visit(this.data.name)
        cy.get('.ico-login').click()
        cy.get('#Email').type(this.data.email)
    })
    beforeEach(() => {
      // runs before each test in the block
    })
  
    afterEach(() => {
      // runs after each test in the block
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  })