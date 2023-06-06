// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath" />




Cypress.Commands.add('getIframe', (iframeLocator) => {
    return cy.get(iframeLocator)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
})

//To click links using custom comands
Cypress.Commands.add('clickLink', (lable) => {
    cy.get('a').contains(lable).click()
})

//Overite the custom comand to work with any uper case lower case sentence
/*Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=> {
    //determine if a filtered argumant get passed
        if(typeof text == 'object'){
            options = text
            text = filter
            filter = undefined
        }

        options.matchCase = false

        return originalFn(subject, filter, text, options)
}) */



//custom command for login
Cypress.Commands.add('loginApp', (email, password) => {
        cy.get("#Email").type(email)
        cy.get("#Password").type(password)
        cy.get("button[class='button-1 login-button']").click()
})



/*
    Way 01 from Achira 
    function add (){

    }
    Way 02
    const add = ()=>{
    } 
*/





