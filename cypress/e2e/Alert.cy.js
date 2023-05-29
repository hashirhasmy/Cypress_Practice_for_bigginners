describe("Alert", ()=> {

        //1) Js Alert : it will have some text and an "ok" button

        it.skip("Js Alert", ()=> {
              cy.visit("https://the-internet.herokuapp.com/javascript_alerts")  
              cy.get("button[onclick='jsAlert()']").click()
              cy.on("window:alert",(t)=> {
                    expect(t).to.contains("I am a JS Alert")
              })
            //Alert window succeesfully closed by cypress
            cy.get("#result").should("have.text","You successfully clicked an alert")
        })

        //2) js confirm alert : it will have some text withg "ok" and "cancel" button

        it.skip("js confirm alert - OK",()=> {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
            cy.on("window:confirm",(t)=> {
                expect(t).to.contains("I am a JS Confirm")
          })
          //Alert window succeesfully closed by cypress by deafulr pressing ok button
          cy.get("#result").should("have.text","You clicked: Ok")
        })

        it.skip("js confirm alert - Cancel",()=> {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
            cy.on("window:confirm",(t)=> {
                expect(t).to.contains("I am a JS Confirm")
            })
            cy.on("window:confirm", ()=> false);  //cypress close alert window using cancel button
            cy.get("#result").should("have.text","You clicked: Cancel")
        })


        //3) js promt alert : it will have some text with a text box for user input along with "ok" button
        it.skip("js promt alert", ()=> {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
             
            cy.window().then((win)=> {
                cy.stub(win,'prompt').returns("welcome")
            })

            cy.get("button[onclick='jsPrompt()']").click();

            //cypress will automatically close the promt aler = it will use by default ok
            cy.get("#result").should("have.text","You entered: welcome")
        })

        //4) Authenticated alert
        it.only("Authenticated alert", ()=> {
            cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth:{username:"admin",password:"admin"}});
            cy.get("div[class='example'] p").should('have.contain',"Congratulations")
        })


})