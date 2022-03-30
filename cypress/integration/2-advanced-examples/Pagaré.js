/// <reference types="Cypress"/>    
//Suite de casos que contiene cada caso 
describe('Pagaré', function () {
    beforeEach(() => {
        // ingresamos a EPYME    
        cy.visit("http://epyme-dev.cajadevalores.com.ar:12080/login")
        cy.get('#email').type('gruposabraqa+ctte_11@gmail.com')
        cy.get('#password').type('Abcd12345')
        cy.get('.btn').click()
        cy.get('.card ').should('have.length', 8)
        cy.get(':nth-child(4) > .d-flex > :nth-child(1)').click() //ingreso al cajón 

    })

    //Alta Pagaré Avalado en pesos
    it('Alta de pagaré Avalado', function () {

        cy.altaPagaréAvalado()
       
        
    })
    //Comitente firma pagaré
    /*it('firma de pagaré', function(){

        //Firmar primer pagaré de la grilla
        cy.get(':nth-child(1) > :nth-child(9) > .btn > .fa').click()
        cy.get('.btn-primary').click()
        cy.get('#pwd').type('Abcd12345')
        cy.get('.form-inline > .btn-primary').click()
    })
*/
})