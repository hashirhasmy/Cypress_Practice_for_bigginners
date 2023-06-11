class LoginPage {

    setUsername (username){
        cy.get("input[placeholder='Username']").type(username)
    }

    setPassword(password){
        cy.get("input[placeholder='Password']").type(password)
    }

    clickSubmit(){
        cy.get("button[type='submit']").click()
    }

    verifyLogin(){
        cy.xpath("//h6[text()='Dashboard']").should('have.text', 'Dashboard');
    }

}

export default LoginPage;