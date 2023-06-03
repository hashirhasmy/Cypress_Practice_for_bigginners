/// <reference types="cypress" />

describe("DropDown Elemnt", () => {
    it.skip("Working with normal Select dropdown", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
            .select('American Samoa')
            .should('have.value', 'American Samoa')
    })


    it.skip("Working with not having select attribute drop down", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Spain").type('{enter}')
        cy.get(" #select2-billing_country-container").should('have.text', 'Spain')
    })

    it.skip("Working with Auto suggest drop down", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Vijay')
        cy.get('.suggestion-title').contains('Vijay Deverakonda').click()
        cy.get('.mw-page-title-main').then((text) => {
            let actualcopyText = text.text();
            let expected = "Vijay Deverakonda";
            assert(actualcopyText, expected)
        })
    })

    it("Working with Dynamic drop down", () => {
        cy.visit("https://www.google.com/")
        cy.get("[name='q']").type("Vijay")
        // 1st way
        //cy.get("div[class='erkvQe'] ul[role='listbox']").find("li span").contains("Vijay Antony").click()  
        cy.wait(3000)
        //2nd way 
        cy.get("div.wM6W7d").find("span").should('have.length', 12)
        cy.get("div.wM6W7d").find("span").each(($el, index, $list) => {
            if ($el.text() === 'Vijay') {
                cy.wrap($el).click();
            }
        })
        cy.get("[name='q']").should('have.value', 'vijay')
    })
})