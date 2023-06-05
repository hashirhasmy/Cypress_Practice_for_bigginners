//before()
//after()
//beforeEach()
//AfterEach()


describe("Learn Hooks and tags", () => {


    before(() => {
        cy.log("launch app")
    })

    after(() => {
        cy.log("close app")
    })

    beforeEach(() => {
        cy.log("login to the application")
    })

    afterEach(()=> {
        cy.log("logout from application")
    })

    it("search", () => {
        cy.log("** searching **")
    })

    it("advance search", () => {
        cy.log("** advance search **")
    })

    it("filtering", () => {
        cy.log("** filter the product **")
    })

})