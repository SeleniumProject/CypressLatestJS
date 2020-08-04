const { createYield } = require("typescript")
import HomePage from '../Page-Objects/HomePage'
import LoginPage from '../Page-Objects/LoginPage'

describe('Login Successfull Scenarios', ()=>{


    before(function(){

        cy.visit('http://demowebshop.tricentis.com/')

    })

    it('Validate the Login functionality with valid Credentials', ()=>{

        HomePage.clickLoginLink()
        HomePage.sleep(3000)
        LoginPage.EnterEmail('gmail125@gmail.com')
        LoginPage.EnterPassword('test123')
        LoginPage.clickLoginButton()
        HomePage.logOut()
    })

    it('Validate the Login functionality with invalid Credentials', ()=>{

        HomePage.clickLoginLink()
        HomePage.sleep(3000)
        LoginPage.EnterEmail('sdfdfgdg@gmail.com')
        LoginPage.EnterPassword('tesdfgfght123')
        LoginPage.clickLoginButton()
        LoginPage.displayloginErrorMessage()
    })
})