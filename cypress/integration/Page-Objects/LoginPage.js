import { createYield } from "typescript";

export default class LoginPage{

    static EnterEmail(email){
        cy.get('#Email').type(email,{delay:50})
    }

    static EnterPassword(password){

        cy.get('#Password').type(password, {delay:50})
    }

    static clickLoginButton(){
        cy.get('input.button-1.login-button').click()
    }
    static displayloginErrorMessage(){
        cy.get('.validation-summary-errors > span').should('be.visible')
    }
    
}