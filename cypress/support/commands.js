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

Cypress.Commands.add("NuevoPaciente", () => {

    //Carga de datos para el alta
    cy.get('.justify-content-between > :nth-child(3) > .btn').click()
    cy.get(':nth-child(2) > .form-control').select('ARS')
    cy.get(':nth-child(3) > .form-control').type('121212333')
    cy.get(':nth-child(4) > .input-group > .input-group-append > .btn > .far').click()
    cy.get('.right > .btn > .ngb-dp-navigation-chevron').click()
    cy.get(':nth-child(6) > :nth-child(1) > .btn-light').click()
    cy.get('.d-block').click() //Requiere AVAL
    cy.get(':nth-child(6) > .form-control').select('SGR 11')
    cy.get(':nth-child(7) > .form-control').select('CAPITAL MARKETS ARGENTINA-CHQ.DIF. - 5851 - DUHAU S.A. - 000004437 - MROS')
    cy.get('.btn-primary').click()

})
