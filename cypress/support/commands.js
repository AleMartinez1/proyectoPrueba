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
