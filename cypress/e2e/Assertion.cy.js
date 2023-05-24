/// <reference types="cypress" />


describe("Assertion demo", function(){

    it("Implicit wait", ()=> {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            //should and
            // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            // cy.url().should('include','orangehrmlive.com/web/')
            // cy.url().should('contain','orangehrmlive')

            // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            // .should('include','orangehrmlive.com/web/')
            // .should('contain','orangehrmlive')

            cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('include','orangehrmlive.com/web/')
            .and('contain','orangehrmlive')

            cy.get()

            








    })



})