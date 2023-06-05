describe("Data driven testing", () => {

    it("Data driven test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangeHRM2').then((data) => {
            data.forEach((userData) => {
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userData.username);
                cy.get("input[placeholder='Password']").type(userData.password);
                cy.get("button[type='submit']").click();

                if(userData.username=='Admin' && userData.password == 'admin123'){
                    cy.xpath("//h6[text()='Dashboard']").should('have.text', userData.expected);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.xpath("//a[normalize-space()='Logout']").click() //logout

                }else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text','Invalid credentials')
                }
                
            });
        })
    })

})