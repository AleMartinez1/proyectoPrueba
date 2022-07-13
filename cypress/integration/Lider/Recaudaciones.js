/// <reference types="Cypress"/>
describe('administracion caja', function (){

    beforeEach(function () {
       
        // ingresamos a la pagina
        cy.visit("https://botondepagodev.retailcard.cl/frontend/testing")
    })

    
    it('verificar caja', function (){
        // ingresamos a la pagina
        
    
        
        //Rut
       cy.get('form > :nth-child(1) > p').should('contain.text','rut: ingresar sin punto ni guion ( un rut valido )')
       cy.get(':nth-child(1) > input').type('12345678')
        //cy.wait(5000)
        //Canal
       // cy.get(':nth-child(2) > p').should('contain.value')
       // cy.should()
      // cy.get(':nth-child(2) > input').type('WEB')
        //monto mensual
      // cy.get(':nth-child(3) > input').type('80000')
        //monto minimo
       // cy.get(':nth-child(4) > input').type('15000')
        //fecha
       // cy.get(':nth-child(5) > input').type('15062022')



       cy.get(':nth-child(3) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP')
       cy.get(':nth-child(4) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP')  
       cy.get(':nth-child(5) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP')
       cy.get('#amount')
       cy.get('#email')
       cy.get('.styleButton_yellowButton__OwYg3')//cancelar
       cy.get('.styleButton_blueButton__SJ0lA')//Aceptar
       cy.get('.footer_footerBody__RdECZ > :nth-child(1)')// politica de seguridad
       cy.get('.footer_footerBody__RdECZ > :nth-child(2)')// politica de privacidad


       cy.get('#typeofpay')//tipo de pago Sleccionar ETPay
       cy.get('.styleButton_yellowButton__OwYg3')//volver
       cy.get('.styleButton_blueButton__SJ0lA')//pagar

       cy.get('.modal_errorModal__tXGSo > h1')//titulo modal de error
       cy.get('.modal_errorModal__tXGSo > .styleButton_blueButton__SJ0lA')//aceptar modal de error
       
    

        

    })



})