describe("DropDown Elemnt", ()=> {
    it.skip("Working with normal Select dropdown", ()=> {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('American Samoa')
        .should('have.value','American Samoa')
    })


    it.skip("Working with not having select attribute drop down", ()=> {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get(" #select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Spain").type('{enter}')
        cy.get(" #select2-billing_country-container").should('have.text','Spain')
    })

    it("Working with Auto suggest drop down", ()=> {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Cypress')
        cy.get(' .suggestions-dropdown').find('a h3').contains('Cypress').click()
        cy.get('.mw-page-title-main').then((text)=>{
                let actualcopyText = text.text();
                let expected = "Cypress";
                assert(actualcopyText,expected)
        })
        
    })
})