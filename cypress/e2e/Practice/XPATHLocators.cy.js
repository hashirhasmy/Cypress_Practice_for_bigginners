

describe("xpathlocator Testing", () => {

    // beforeEach(() => {
    //     Cypress.Configuration.defaults({
    //       video: false
    //     });
    //   });

    it("Verify the nest sellers image count", ()=> {
        cy.visit('http://automationpractice.pl/index.php')
        cy.get(".blockbestsellers[data-toggle='tab']").click()
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)
    })

})