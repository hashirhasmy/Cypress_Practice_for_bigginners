/// <reference types="cypress" />


describe("Assertion demo", function () {

        it("Implicit Assertion", () => {

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                //should and
                // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                // cy.url().should('include','orangehrmlive.com/web/')
                // cy.url().should('contain','orangehrmlive')

                // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                // .should('include','orangehrmlive.com/web/')
                // .should('contain','orangehrmlive')

                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                        .and('include', 'orangehrmlive.com/web/')
                        .and('contain', 'orangehrmlive')

                cy.get('.orangehrm-login-branding > img').should('be.visible')
                        .and('exist')

                cy.xpath('//a').should('have.length', '5')  //check number of links available in page

                cy.get("input[placeholder='Username']").type("Admin")
                cy.get("input[placeholder='Username']").should("have.value", "Admin")
        })

        it("Explicit Assertion", () => {

                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                cy.get("input[placeholder='Username']").type("Admin")
                cy.get("input[placeholder='Password']").type("admin123")
                cy.get("button[type='submit']").click()

                let expected = "Quynh Anadebe!";

                cy.get(".oxd-userdropdown-name").then((x) => {
                        let actual = x.text();

                        //BDD Style Assertion
                        expect(actual).to.equal(expected)
                        expect(actual).to.not.equal(expected)

                        //TDD style Assertion
                        assert.equal(actual, expected)
                        assert.notequal(actual, expected)
                })
        })

})