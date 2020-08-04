import {HomePage} from '../Page-Objects/HomePage'
import {LoginPage} from '../Page-Objects/LoginPage'
import {RegisterPage} from '../Page-Objects/RegisterPage'

describe('Register Functionality Successfull Scenarios', ()=>{


    before(function(){

        cy.visit('http://demowebshop.tricentis.com/')

    })
    it('Validate Register with valid credentials', ()=>{

      HomePage.clickRegisterLink()
      RegisterPage.clickGender
    })

})