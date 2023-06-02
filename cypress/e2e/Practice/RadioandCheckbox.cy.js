describe("Radio and Checkbox", ()=> {
    it("working with radio button", ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("#male").should('be.visible')

        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')
    })

    it("working with Check Boxes", ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("#monday").should('be.visible')

        cy.get("#monday").check().should('be.checked')  //select a ckeck box

        cy.get("#monday").uncheck().should('not.be.checked')  //unselecting checkboxes
    })

    it("working with multiple Check Boxes", ()=> {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    })
})