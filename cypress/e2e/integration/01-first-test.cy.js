/// <reference types="cypress" />

it('Validate TG URL and title', () => {
    cy.visit('https://www.techglobal-training.com/');

    // Validate URL

    cy.url().should('eq', 'https://www.techglobal-training.com/');
    cy.url().should('not.be', 'https://www.apple.com/');
    cy.url().should('contain', 'techglobal' );
    cy.url().should('not.contain', 'apple');


    // Validate Title

    cy.title().should('eq', 'TechGlobal Training | Home');
    cy.title().should('equal', 'TechGlobal Training | Home');
    cy.title().should('not.be', 'Apple');
    cy.title().should('contain', 'TechGlobal');
    cy.title().should('not.include', 'Hello');
    cy.title().should('not.contain', 'Banana');
})