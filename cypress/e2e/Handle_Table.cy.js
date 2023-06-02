describe("Handling Tables", ()=> {

    beforeEach("Login to the dashboad", ()=> {
            cy.visit("https://demo.opencart.com/admin/index.php")
            cy.get(" #input-username").type("demo")
            cy.get("#input-password").type("demo")
            cy.get("button[type='submit']").click()

            cy.get(".btn-close").click()

            cy.get("#menu-customer>a").click()  //click on customer menu
            cy.get("li[id='menu-customer']>ul>li:first-child").click()  //click on sub customer menu
    })

    it("Check number rows and columns",()=>{
            // We can't use this because  In Cypress, commands like cy.get() are asynchronous, and you cannot assign their values directly to variables using let or const inside a test.
            // let count = cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            // cy.log(count)   

        //    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length',10)
        //     .its('length')
        //     .then((count) => {
        //         // console.log doesn't give a output in cypress only can see the output in browser console
        //         // So we hyave to use cy.log
        //         cy.log('Table row count: ' + count);
        //     });

           // We can see the out put in terminal it self if we use thismethod
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").then(($rows) => {
            const rowCount = $rows.length;
            cy.task('log', 'Table row count: ' + rowCount);
          });
    })


})