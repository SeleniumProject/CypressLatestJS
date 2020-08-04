/** Verify the login scenario with valid credentials */
/** Verify the login scenario with invalid credentials */
describe('Login functionality test scripts or scenarios', ()=> {

  /** beforeEach - Before running any it scenario beforeeach execute and it scenario will execute next. 
   * beforeEach - 1st
   * it - 2nd
   * common steps will be written in beforeEach
   * Pre - Requisites to it scenarios
   */
  beforeEach('Launch Browser and Navigate to Url',()=>{
    cy.visit('http://demowebshop.tricentis.com/')
   
  })

    it('Verify the login scenario with valid credentials', ()=>{
      
       cy.Login('email','passowrd')
        // what is the difference between cy.screenshot and mochawesome screenshot
        // screenshot - take full page screen shot after that step
        // mocha screensot - only up on failure of your test script. that pertifular scenario or step.
        cy.screenshot()
    })

    it('Verify the login scenario with invalid credentials', ()=>{
       
       cy.Login('email','passowrd')
        // cy.wait(2000) // 2000ms = 2sec
        cy.get('.validation-summary-errors > span').should('be.visible', 'Login was unsuccessful. Please correct the errors and try again.')
        cy.get('.validation-summary-errors > ul > li').should('be.visible', 'No customer account found')
    })


    
})