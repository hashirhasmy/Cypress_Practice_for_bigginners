describe("Handling Tables", () => {

        beforeEach("Login to the dashboad", () => {
                cy.visit("https://demo.opencart.com/admin/index.php")
                cy.get(" #input-username").type("demo")
                cy.get("#input-password").type("demo")
                cy.get("button[type='submit']").click()

                cy.get(".btn-close").click()

                cy.get("#menu-customer>a").click()  //click on customer menu
                cy.get("li[id='menu-customer']>ul>li:first-child").click()  //click on sub customer menu
        })

        it("Check number rows and columns", () => {
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
                //1)Verify rows of the page
                cy.get("table[class='table table-bordered table-hover']>tbody>tr").then(($rows) => {
                        let expected = 10;
                        const rowCount = $rows.length;
                        cy.task('log', 'Table row count: ' + rowCount);
                        assert.equal(rowCount, expected)
                });

                //2)Verify columns of the page
                cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
        })

        it("Check data from specific row and column", () => {
                cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
                        .contains("xvrt@test.com")
        })

        it("Read all the rows and columns data in first page", () => {
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                        .each(($row, index, $rows) => {
                                cy.wrap($row).within(() => {
                                        cy.get("td").each(($column, index, $columns) => {
                                                cy.log($column.text())
                                        })
                                })
                        })
        })


        it("Pagination", () => {
                // find the pages count
                //     cy.get(".col-sm-6.text-end").then((x)=> {
                //         let myText = x.text(); //Showing 1 to 10 of 13121 (1313 Pages)
                //         let totalPages = myText.substring(myText.indexOf("(")+1, myText.indexOf("Pages")-1);
                //         cy.task('log', 'Table page count: ' + totalPages);
                //     })

                let totalpages = 5;

                for (let p = 1; p < totalpages; p++) {
                        if (totalpages > 1) {
                                cy.log("Active page is :" + p)
                                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click()
                                cy.wait(5000)
                                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                                        .each(($row, index, $rows) => {
                                                cy.wrap($row).within(() => {
                                                        cy.get("td:nth-child(3)").then((t) => {
                                                                cy.log(t.text())
                                                        })
                                                })
                                        })

                        }
                }
        })




})