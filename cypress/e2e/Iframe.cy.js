describe("Working with IFreame", ()=> {
    it("hanling iframe approach 01", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.clear().type("Welcome")
        cy.get("button[title='Bold']").click()
    })




})