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

Cypress.Commands.add('Insertar_texto', (selector,texto,t) => { 
    let tiempo=t
    cy.get(selector, { timeout : 20000}).should('be.visible').type(texto)
    cy.wait(tiempo)

})

Cypress.Commands.add('Insertar_texto_xpath', (selector,texto,t) => { 
    let tiempo=t
    cy.xpath(selector, { timeout : 20000}).should('be.visible').type(texto)
    cy.wait(tiempo)

})

Cypress.Commands.add('Click_get', (selector,t) => { 
    let tiempo=t
    cy.get(selector, { timeout : 20000}).should('be.visible').click()
    cy.wait(tiempo)

})

Cypress.Commands.add('Click_xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector, { timeout : 20000}).should('be.visible').click()
    cy.wait(tiempo)

})

