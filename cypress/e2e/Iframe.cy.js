describe("Working with IFreame", ()=> {
    it.skip("hanling iframe approach 01", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
        iframe.clear().type("Welcome")
        cy.get("button[title='Bold']").click()
    })

    it.only("hanling iframe approach 02 by using custom command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })


    it.skip("hanling iframe approach 03 by using IframePlugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
    })




})