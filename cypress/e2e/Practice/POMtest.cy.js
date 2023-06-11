import LoginPage from "../../PageObjects/Loginpage";

describe('POM my suit', () => {

    it('login test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // Maximize the browser window for Windows 10 PC
        //cy.viewport(1920, 1080);
        const lp = new LoginPage();
        cy.fixture('orangeHRM').then((loginData) => {
            lp.setUsername(loginData.username);
            lp.setPassword(loginData.password);
            lp.clickSubmit()
            lp.verifyLogin()
        })
    })
})