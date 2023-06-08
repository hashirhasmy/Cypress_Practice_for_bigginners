/// <reference types="cypress" />

describe("Navigations scenarios",()=> {

    it("Navigation test",()=> {
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go('back')
        cy.title().should('contain','Your Store')

        cy.go('forward')
        cy.reload()

    })


})