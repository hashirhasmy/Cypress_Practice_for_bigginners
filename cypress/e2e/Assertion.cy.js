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

            cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')

            cy.xpath('//a').should('have.length','5')  //check number of links available in page

            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Username']").should("have.value","Admin")


            
            








    })
})