// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector, texto) => {
    let tiempo=1500
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Bloque_ToolsQA', (texto1,texto2,texto3) => {
    let tiempo=1500
    cy.get("#userName").should('be.visible').type(texto1)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(texto2)
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').type(texto3)
    cy.wait(tiempo)
    cy.get('#permanentAddress').should('be.visible').type(texto3)
    cy.wait(tiempo)
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

  Cypress.Commands.add('reto_Custom', (texto1,texto2,texto3,texto4,texto5) => {
    let tiempo=150
    cy.get('[name="name"]').should('be.visible').type(texto1)
    cy.wait(tiempo)
    cy.get('[name="email"]').should('be.visible').type(texto2)
    cy.wait(tiempo)
    cy.get(':nth-child(4) > .col-sm-9 > .d-flex > :nth-child(3) > .form-check-input').should('be.visible').click({force:true})
    cy.wait(tiempo)
    cy.get('[name="mobile"]').should('be.visible').type(texto3)
    cy.wait(tiempo)
    cy.get('.col-sm-9 > [name="dob"]').should('be.visible').type(texto4)
    cy.wait(tiempo)
    cy.get('[name="subjects"]').should('be.visible').type(texto5)
    cy.wait(tiempo)
    cy.get(':nth-child(1) > [name="dob"]').should('be.visible').click({force:true})
    cy.wait(tiempo)
    cy.get(".input-group > [name='picture']").selectFile("cypress/fixtures/imagen1.jpg")
    cy.wait(tiempo)
    cy.get('.col-sm-9 > [name="picture"]').should('be.visible').type(texto5)
    cy.wait(tiempo)
    cy.get('[name="state"]').should('be.visible').select("Haryana")
    cy.wait(tiempo)
    cy.get("[name='city']").should('be.visible').select("Agra")
    cy.wait(tiempo)
    cy.get('.btn').should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

