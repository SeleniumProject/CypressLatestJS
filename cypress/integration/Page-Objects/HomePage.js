import { createYield } from "typescript";

export default class HomePage{

    static clickDemoWebShopLogo(){
        cy.get('div.header-logo a img').click()
    }
    
    static clickRegisterLink(){

        cy.get('a.ico-register').click()
    }

    static clickLoginLink(){
        cy.get('a.ico-login').click()
    }

    static clickShoppingCartLink(){

        cy.get('a.ico-cart span.cart-label').click()
        
    }

    static EnterSearchStore(searchvalue){
        cy.get('input#small-searchterms.search-box-text').type('${searchvalue} {enter}')
    }

    static clickSearchButton(){
        cy.get('input.button-1.search-box-button').click()
    }

    static sleep(ms){
        cy.wait(ms)
    }

    static logOut(){

        cy.get('.ico-logout').click()
    }
}