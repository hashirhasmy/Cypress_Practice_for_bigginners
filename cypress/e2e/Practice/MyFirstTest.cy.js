// const cypress = require("cypress");
/// <reference types="cypress" />

describe('My First Test', () => {
    it('verify actual title', function()  {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq","OrangeHRM");
    })

    it('verify title with nagative',{ screenshots: false }, () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should("eq","OrangeHRM123");
    })
})
  
