describe('CSSlocators_Practice', function(){

    it('cssLocators', () => {

       cy.visit('http://automationpractice.pl/index.php')
       cy.get("[id='search_query_top']").type("T-Shirts")
       cy.get("[name='submit_search']").click()
        

       cy.get(".lighter").contains("T-Shirts")  //Assertion
        


    })

})