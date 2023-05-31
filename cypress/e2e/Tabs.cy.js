/// <reference types="cypress" />

describe("Tabs behavior", ()=> {

    it.skip("Approch 01", function() {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example>a").invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(5000)

        cy.go('back')
    })

    it("Approch 02", function() {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get(".example>a").then((x)=> {
                let url = x.prop('href')
        cy.visit(url)   
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)

        cy.go('back')


    })


})