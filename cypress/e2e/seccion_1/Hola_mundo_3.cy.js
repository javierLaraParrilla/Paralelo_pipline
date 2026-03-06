describe ("Bienvenido al curse de Cypress sección 1", () =>{

    it("Mi primer Test -> Hola mundo", () =>{
        cy.log("Hola mundo")
        //cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.wait(4000)
    })

    //it("Segundo test->Campo name", () => {
        //cy.visit("https://demoqa.com/text-box")
        //cy.get("#userName").type("Javier")
       // cy.wait(4000)
    //})

})//Cierre de describe