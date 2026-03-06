/// <reference types='Cypress' />

import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

describe('Carga por Fixture', () =>{
    let tiempo=1500
    //beforeEach(() =>{
    //    cy.fixture('datos2.cy.json').then(function(data) {
    //        globalThis.data = data //Obtener datos que hay en datos2 y meterlos en la variable data

    //    })
    //})

    //beforeEach(function(){
        //cy.fixture("datos2.cy.json").as("datos_json") //El alias
    //})
    it('Test uno Cargando desde Json', () =>{
        

        cy.fixture("datos2.cy.json").then(datos =>{
            datos.forEach(valores => {

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','demosite')
                cy.wait(tiempo)

                const d_nombre=valores.nombre
                const email = valores.email
                const dir1 = valores.dir1
                const dir2 = valores.dir2
                
                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(tiempo)

                cy.get('#userEmail').should('be.visible').type(email)
                cy.wait(tiempo)

                cy.get('#currentAddress').should('be.visible').type(dir1)
                cy.wait(tiempo)

                cy.get('#permanentAddress').should('be.visible').type(dir2)
                cy.wait(tiempo)

                cy.get('#submit').should('be.visible').click({force:true})
                cy.wait(tiempo)
        })
        
        })
    })
})