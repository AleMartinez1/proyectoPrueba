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


import 'cypress-file-upload';

before(function () {
    //cargamos los valores del archivo loginAdministrador
    cy.fixture('NuevoPaciente').then(function (datos) {
        this.datos = datos
        //cy.fixture(this.datos.Examen).as('Examen1')
    })

    //cy.viewport(1343, 550)


})

Cypress.Commands.add("loginRecepcionista", () => {

    //Login recepcionista
    cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('lourdes.rubio@landscape.cl')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()
    

})

Cypress.Commands.add("loginOperador", () => {

    //Login Operador
    cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('jejumuru@gmail.com')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()
    

})
Cypress.Commands.add("loginRadiologo", () => {

    cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('alonso.arias@landscape.cl')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()
})

Cypress.Commands.add("AgregarPaciente", () => {
    cy.get('#documento').select('Pasaporte')
        cy.get('#documento').should('contain.text', 'Pasaporte')
        //Generar numero aleatorio de Pasaporte
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000000)}`)
        cy.get('#passportOrRut').type(Cypress.config('UniqueNumber'))
        cy.get('#errorCardPatientNotFound').should('contain.text', 'Paciente no encontrado. Ingrese los datos del paciente en el formulario a continuación y marque la opción “Guardar” antes de continuar.')
        cy.wait(2000)
       //cy.AgregarPaciente()
        cy.get('.form-patientRegister > :nth-child(2) > input').type('Alejandro')
        cy.get('#apellidoPaternoPaciente').type('Martinez')
        cy.get('#appelidoMaternoPaciente').type('Aguero')
        cy.get('#nacimientoPaciente').clear().type('07/12/1991')
        cy.get('#sexPatient').select('Masculino')
        cy.get('#phonePaciente').type('3815722592')
        cy.get('#emailPaciente').type('alejandro.martinez@landscape.cl')
})

/*Cypress.Commands.add("AgregarPaciente", () => {
    cy.get('#documento').select('Pasaporte')
        cy.get('#documento').should('contain.text', 'Pasaporte')
        //Generar numero aleatorio de Pasaporte
        Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 100000000)}`)
        cy.get('#passportOrRut').type(Cypress.config('UniqueNumber'))
        cy.get('#errorCardPatientNotFound').should('contain.text', 'Paciente no encontrado. Ingrese los datos del paciente en el formulario a continuación y marque la opción “Guardar” antes de continuar.')
        cy.wait(2000)
       //cy.AgregarPaciente()
        cy.get('.form-patientRegister > :nth-child(2) > input').type(this.datos.Nombre)
        cy.get('#apellidoPaternoPaciente').type(this.datos.ApellidoPaterno)
        cy.get('#appelidoMaternoPaciente').type(this.datos.ApellidoMaterno)
        cy.get('#nacimientoPaciente').clear().type(this.datos.FechaNac)
        cy.get('#sexPatient').select(this.datos.Sexo)
        cy.get('#phonePaciente').type(this.datos.teléfono)
        cy.get('#emailPaciente').type(this.datos.Email)
})*/

