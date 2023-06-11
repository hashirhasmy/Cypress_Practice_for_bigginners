describe("My suit",()=> {

    it("capture scrrenshot and videos", ()=> {
        cy.visit("https://demo.opencart.com/")
        //cy.screenshot("ScreenshotNameForHomePage")
        //cy.wait(5000)
        //cy.get("img[title='Your Store']").screenshot("oneElemnetVerify")

        //Automatically capture screenshot and video only happen while executing using terminal

        cy.get("li:nth-child(7) a:nth-child(1)").should('have.text','Cameras')
        

    })
})