/// <reference types="cypress" />



describe('Cypress Selectors', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/html-elements');
    });

    it('Validate Headings Section', () => {
        cy.get('languages_heading')
        .should('be.visible')
        .and('have.text', )

    });
})