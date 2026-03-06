class ProyectoUno_Po{

    visitWeb(){
        let tiempo = 1000
        before(() =>{
            cy.visit('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')
            cy.title().should('eq','Selenium Practice - Student Registration Form')
            cy.wait(tiempo)
        })
    }

    SeccionUno(name,last_name,mobile){
        let tiempo=1000
        cy.get('[name="name"]').should('be.visible').type(name)
        cy.screenshot("Campo nombre")
        cy.get('[name="email"]').should('be.visible').type(last_name)
        cy.wait(tiempo)
        cy.get(':nth-child(4) > .col-sm-9 > .d-flex > :nth-child(3) > .form-check-input').should('be.visible').click({force:true})
        cy.wait(tiempo)
        cy.get('[name="mobile"]').should('be.visible').type(mobile)
        cy.wait(tiempo)
    }
}//Final

export default ProyectoUno_Po;