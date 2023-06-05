/// <reference types="cypress-xpath" />

describe("fixture demo test", () => {

    it("login to opencart appliocation using fixture aproach 01", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangeHRM').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.xpath("//h6[text()='Dashboard']").should('have.text', data.expected);
        })
    })


    let userData;
    before(() => {
        cy.fixture('orangeHRM').then((data01) => {
            userData = data01;
        })
    })

    it("login to opencart appliocation using fixture aproach 02", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
        cy.xpath("//h6[text()='Dashboard']").should('have.text', userData.expected);
    })


})