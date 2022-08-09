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



})


Cypress.Commands.add("loginRecepcionista", () => {
    cy.get(':nth-child(2) > input').type('0001')
    cy.get(':nth-child(4) > input').type('lourdes.rubio@landscape.cl')
    cy.get(':nth-child(6) > input').type('User1234567')
    cy.get('.flexboxButton').click()
})

Cypress.Commands.add("loginOperador", () => {
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
    cy.wait(1000)
    //cy.AgregarPaciente()
    cy.get('.form-patientRegister > :nth-child(2) > input').type('Alejandro')
    cy.get('#apellidoPaternoPaciente').type('Martinez')
    cy.get('#appelidoMaternoPaciente').type('Aguero')
    cy.get('#nacimientoPaciente').clear().type('07/12/1991')
    cy.get('#sexPatient').select('Masculino')
    cy.get('#phonePaciente').type('3815722592')
    cy.get('#emailPaciente').type('alejandro.martinez@landscape.cl')
})

Cypress.Commands.add("AbrirCaja", () => {
    cy.wait(1000)
    cy.get('.successModalHeader > h2').should('contain.text', 'Apertura de caja')
    cy.get('[style="text-align: center;"] > button').click()
    cy.wait(2000)
    cy.get('[style="text-align: center;"] > button').click()
})

Cypress.Commands.add("AgregarComentario", () => {
    cy.get('[style="display: flex; justify-content: space-between; align-items: center;"] > div > :nth-child(1)').click()
    cy.get('#notes').type('Comentaro para prueba de regresion')
    cy.get('[style="padding: 10px 20px; background: rgb(1, 115, 153); border: none; border-radius: 10px; color: rgb(255, 255, 255); font-size: 17px; font-weight: 600;"]').click()
})

Cypress.Commands.add("AgregarItemExtra", () => {
    cy.get('[style="width: 85%; display: flex; gap: 8px;"] > :nth-child(2)').click()
        cy.get('.RutSinDigito').type('Item prueba')
        cy.get('[name="itemPrice"]').type('2500')
        cy.get('.addInput').click()
})


