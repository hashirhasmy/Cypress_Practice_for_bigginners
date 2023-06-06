//click on link using lable
//over writing existing contains() command

describe("Custom commands", () => {
    it("Handling links", () => {
        cy.visit("https://demo.nopcommerce.com/")

        // Direct approach
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //using custom commands
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch");
    })


    it("overwritting existing commands", () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch");
    })

    it.only("Login command", () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.loginApp("testing@gmail.com", "test123")
        cy.get(".ico-account").should('have.text','My account')
    })
})