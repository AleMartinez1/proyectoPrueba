/// <reference types="Cypress"/>
describe('administracion caja', function (){


    beforeEach(function () {
       
        // ingresamos a la pagina
        cy.visit("https://cloudraywebqa.landscape.cl/login")
    })


    it('verificar caja', function (){
        cy.viewport(1343, 950)

        cy.loginRecepcionista()

        cy.get('#topIconSidebar > a').click()
        cy.get('.TitleAndDate > h1').should('contain.text','Administración')
        cy.get('[style="z-index: 1;"] > .adminTabTitle').should('contain.text','Caja')
        cy.get(':nth-child(1) > :nth-child(4) > div > p').should('contain.text','Item prueba')
        cy.get('.tableContainer > :nth-child(1) > :nth-child(10)').should('contain.text','107500')

    })



})