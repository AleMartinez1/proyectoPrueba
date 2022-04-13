/// <reference types="Cypress"/>
 
//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba',function()
{

    this.beforeEach(function () {
        //cargamos los valores del archivo loginAdministrador
        cy.fixture('NuevoPaciente').then(function (datos) {
            this.datos = datos
        })

    })
    
//Caso de prueba 1
it('prueba primer caso - Ingreso Recepcionista', function(){
 
    // ingresamos a la pagina
    cy.visit("https://cloudrayweb.wolvex.cl/login")

    //login con usuario Recepcinista
    cy.loginRecepcionista()

    /*cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('florinda.mesa@cloudray.cl')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()*/
   
})
 
//Caso de prueba 2
it('Ficha Nuevo Paciente', function(){
 
     // ingresamos a la pagina
     
     cy.get('.sidenav > :nth-child(1) > :nth-child(4)').click()
     cy.get('[style="margin-left: 26px;"] > .titleBar').should('contain.text','Ficha paciente')
     cy.get('#passportOrRut').type(this.datos.Documento)
     cy.get('.form-patientRegister > :nth-child(2) > input').type(this.datos.Nombre)
     cy.get('#apellidoPaternoPaciente').type(this.datos.ApellidoPaterno)
     cy.get('#appelidoMaternoPaciente').type(this.datos.ApellidoMaterno)
     cy.get('#nacimientoPaciente').clear().type(this.datos.FechaNac)
     cy.get('#sexPatient').select(this.datos.Sexo)
     cy.get('#phonePaciente').type(this.datos.teléfono)
     cy.get('#emailPaciente').type(this.datos.Email)
     cy.get('.saveButton').click()
     cy.get('#errorCardPatientRegister').should('contain.text','Paciente guardado con éxito')
     cy.get('.continueButton').click()
     //cy.get('[style="background: rgb(1, 115, 153); border: none; border-radius: 10px; font-weight: 600; font-size: 16px; color: rgb(255, 255, 255); padding: 10px 96px;"]').click()
    

     
})
//Caso de prueba 3
it('Ficha nuevo examen', function(){
    cy.get('#specialist').type('Prueba Especialista')
    cy.get('#clinic').type('clinica prueba')
    cy.get('#email').type('asd@prueba.com')
    cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(1) > .input_container > .checkmark').click()
    cy.get(':nth-child(2) > :nth-child(3) > .section_container-exams > :nth-child(2) > .input_container > .checkmark').click()
    cy.get('#organeButtonPhone').click()

})
 

it('Pagar orden', function(){

    cy.get('.paymentTitle').should('contain.text' , 'Registro de pago')
    cy.get('.textType > :nth-child(4)').should('contain.text' , '38405266-5')
    //cy.get(':nth-child(2) > .paymentInfo_container > .paymentInfo_input > .select_payment').click()
    cy.get('#paymentType').select('Precio normal')//.should('have.value','PRECIO_NORMAL')
    //cy.get('#clinicSelect').select()
    //cy.get('.paymentTitle').should('contain.text' , 'Registro de pago')
    /*cy.get(':nth-child(2) > .center_element').click()
    cy.get('#cashInput').type('24000')
    cy.get('.folio').type('987789')
    cy.get('#cashInput').click()*/
    

})
 
})