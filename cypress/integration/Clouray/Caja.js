/// <reference types="Cypress"/>
describe('administracion caja', function (){


    beforeEach(function () {
       
        // ingresamos a la pagina
        cy.visit("https://cloudray.landscape.cl/login")
    })


    it('verificar caja', function (){

        cy.loginRecepcionista()

        cy.get('#topIconSidebar > a').click()
        cy.get('.TitleAndDate > h1').should('contain.text','Administración')
        cy.get('[style="z-index: 1;"] > .adminTabTitle').should('contain.text','Caja')

    })



})