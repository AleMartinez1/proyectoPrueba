/// <reference types="Cypress"/>    
//Suite de casos que contiene cada caso 
describe('Ejemplos primeras pruebas SABRA', function () {

    /*before(function () {
        //Cargamos los valores del archivo example.json en un objeto de datos
       cy.fixture('ChequeAvalado').then(function (datos) {
            this.datos = datos
            cy.fixture(this.datos.imagenFrente).as('imagenFrente')
            cy.fixture(this.datos.imagenDorso).as('imagenDorso')
            

        })
    })*/

    beforeEach(() => {
        // ingresamos a EPYME    
        cy.visit("http://epyme-dev.cajadevalores.com.ar:12080/login")
    })

    //Avalados - Alta manual
    it('alta de cheque fisico avalado', function () {

        
         //ingreso a EPYME
         cy.get('#email').type('gruposabraqa+sgr_12@gmail.com')
         cy.get('#password').type('Abcd1234')
         cy.get('.btn').click()    


        //verificar cantidad de cajones para el usuario e ingreso al cajon de avalados
        cy.get('.container-fluid > :nth-child(3)').should('contain.text', 'Financiación')
        cy.get('.card ').should('have.length', 8)
        cy.get(':nth-child(4) > .d-flex > :nth-child(3)').as('Cajón Cheque Físico') //---> renombramos el elemento 
        cy.get('@Cajón Cheque Físico').click() //--->Utilizamos el elemento parametrizado
            
        
        
        //ingreso al cajón de consulta de lotes y alta de lote
        cy.get(':nth-child(3) > .d-flex > :nth-child(1)').click()
        cy.get('.justify-content-between > .justify-content-end > .btn').click()


        //Carga de archivo
        /* cy.get(':nth-child(1) > .form-control').select('Archivo')
         cy.get('.form-group > :nth-child(2) > .form-control').select('Casa Central')
        
         const yourFixutePath = 'SGR12.txt';
 
         cy.get('.input-group > .form-control').selectFile(yourFixutePath);
 
         cy.get('.btn-primary').click()*/


         
        //Carga manual - seleccion de datos de cabecera
       
       
        cy.get(':nth-child(1) > .form-control').select('Carga Manual')
        cy.get(':nth-child(2) > .form-control').select('Casa Central')
        cy.get(':nth-child(3) > .form-control').select('MAV - Mercado Argentino de Valores')
        cy.get(':nth-child(4) > .form-control').select('COMITENTE DOCE')
        cy.get(':nth-child(5) > .form-control').select('ALDAZABAL Y CIA. S.A.-CHQ.DIF. - 5893 - ANA CASALLA - 000012338 - MAV')
        cy.get('.btn-primary').click()//----------boton aceptar


        

        //cy.altaManual()


       //Agregar cheque desde el pop up

        cy.get('.justify-content-start > .btn').click() //---------boton agregar cheque

        //POP UP datos del cheque

        cy.get('#checkNumber').type('01211900')
        cy.get('#accountNumber').type('22300885576')
        cy.get('#iaTaxId').type('40044354434')

        cy.get('#bank').type('123')
        cy.get('#branch').type('456')
        cy.get('#zipCode').type('9999')

        cy.get(':nth-child(8) > .form-control').select('48 horas')
        cy.get(':nth-child(10) > .form-control').select('Pesos')
        cy.get('#amount').type('3500000')
        cy.get(':nth-child(9) > .input-group > .input-group-append > .btn > .far').click()
        cy.get(':nth-child(7) > [aria-label="Vie"] > .btn-light').click()
        cy.get(':nth-child(11) > .input-group > .input-group-append > .btn > .far').click()
        cy.get(':nth-child(2) > :nth-child(5) > .btn-light').click()

        cy.get('.modal-footer > .btn-primary').click() //----------boton aceptar del pop up

        cy.get('.p-md > .card > .card-footer > .btn-primary').click() //---- Guardar sin subir imagenes
        cy.get('.modal-footer > .btn').click() // mensaje de alta de lote exitoso

        })


        it('subir imagen al ultimo cheque', function () {

         //ingreso a EPYME
         cy.get('#email').type('gruposabraqa+sgr_12@gmail.com')
         cy.get('#password').type('Abcd1234')
         cy.get('.btn').click()    


        //verificar cantidad de cajones para el usuario e ingreso al cajon de avalados
        cy.get('.container-fluid > :nth-child(3)').should('contain.text', 'Financiación')
        cy.get('.card ').should('have.length', 8)
        cy.get(':nth-child(4) > .d-flex > :nth-child(3)').as('Cajón Cheque Físico') //---> renombramos el elemento 
        cy.get('@Cajón Cheque Físico').click() //--->Utilizamos el elemento parametrizado
            
        
        //ingreso al cajón de consulta de lotes
        cy.get(':nth-child(3) > .d-flex > :nth-child(1)').click()

        

        cy.get(':nth-child(5) > .text-right > .btn > .fa').click()//detalle del ultimo lote lote
        cy.get(':nth-child(11) > .btn').click()//boton alta de imagen

        //cy.get(':nth-child(15) > .btn > .fa-upload').click()////NO ANDA

        //subir imagen del frente
        const frente = 'cheque-frente.jpeg';

        cy.get(':nth-child(1) > .card > .card-body > input').selectFile(frente);

        //subir imagen del dorso
        const dorso = 'cheque-dorso.jpeg';

        cy.get(':nth-child(2) > .card > .card-body > input').selectFile(dorso);

        
       cy.get('.container > .card-footer > .btn-primary').click()//------Boton aceptar para carga de imagenes
    })


})