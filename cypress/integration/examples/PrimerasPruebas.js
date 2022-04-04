/// <reference types="Cypress"/>
 
//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba',function()
{

    before(function () {
        //cargamos los valores del archivo loginAdministrador
        cy.fixture('loginRecepcionista').then(function (datos) {
            this.datos = datos
        })

    })
    
//Caso de prueba 1
it('prueba primer caso - Ingreso Recepcionista', function(){
 
    // ingresamos a la pagina
    cy.visit("https://cloudrayweb.wolvex.cl/login")

    //login con usuario Recepcinista
    cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('florinda.mesa@cloudray.cl')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()
   

    //Loguin DDT - Cargamos datos desde el fixture
    //cy.get(':nth-child(2) > input').type(this.datos.codigoCentro)
    //cy.get(':nth-child(4) > input').type(this.datos.email)

})
 
//Caso de prueba 2
it('Nuevo Paciente', function(){
 
     // ingresamos a la pagina
     //cy.visit("https://cloudrayweb.wolvex.cl/login")
     cy.get('.sidenav > :nth-child(1) > :nth-child(4)').click()
     cy.get('#passportOrRut').type('12.273.068-9')
     cy.get('.form-patientRegister > :nth-child(2) > input').type('Alejandro')
     cy.get('#apellidoPaternoPaciente').type('Martinez')
     cy.get('#appelidoMaternoPaciente').type('Aguero')
     cy.get('#nacimientoPaciente').clear().type('07/12/1991')
     cy.get('#sexPatient').select('Masculino')
     cy.get('#phonePaciente').type('38157554')
     cy.get('#emailPaciente').type('prueba@prueba.com')
     cy.get('.saveButton').click()
     //cy.get('.continueButton').click()
     //cy.get('[style="background: rgb(1, 115, 153); border: none; border-radius: 10px; font-weight: 600; font-size: 16px; color: rgb(255, 255, 255); padding: 10px 96px;"]').click()     
     //cy.get('.continueButton').click()

     //cy.NuevoPaciente()
})
//Caso de prueba 3
 
 
})