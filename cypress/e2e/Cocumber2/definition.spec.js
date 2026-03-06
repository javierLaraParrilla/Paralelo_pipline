import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given ("Abrir el navegador principal", () =>{
    cy.visit("https://demoqa.com/text-box")
})

When ("Cargando el nombre {word}", (Name) =>{
    cy.get('#userName').should('be.visible').type(Name)
    cy.wait(500)
})

When ("Cargando el email {word}", (Email) =>{
    cy.get('#userEmail').should('be.visible').type(Email)
    cy.wait(500)
})

When ("Cargando la Dirección {string}", (dir1) =>{
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(500)
})

When ("Cargando la Dirección dos {string}", (dir2) =>{
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(500)
})

When ("Haciendo click en el boton Submit", () =>{
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(500)
})

Then ("Validar el nombre de la Página", () =>{
    cy.title().should('eq','demosite')
    cy.wait(500)
})