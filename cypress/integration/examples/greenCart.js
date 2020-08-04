/** Verify the login scenario with valid credentials */
/** Verify the login scenario with invalid credentials */
describe('Login functionality test scripts or scenarios', ()=> {

    /** beforeEach - Before running any it scenario beforeeach execute and it scenario will execute next. 
     * beforeEach - 1st
     * it - 2nd
     * common steps will be written in beforeEach
     * Pre - Requisites to it scenarios
     */

    before(()=>{
        cy.log('Open the Browser the Navigate to Site Url')
               
      cy.fixture('example').then(function(data){
          this.data =data
          cy.visit('https://rahulshettyacademy.com/angularpractice/')
     })
 
  
      it('Verify the login scenario with valid credentials', ()=>
      {
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.selectproduct("iphone X")
         cy.wait(2000)
       

         this.data.productNames.forEach(function(element){
             cy.selectproduct(element)
         })
         
      })
