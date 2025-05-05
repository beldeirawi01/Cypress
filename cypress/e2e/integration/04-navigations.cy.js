/// <reference types="cypress" />

describe('Cypress NAvigations', () => {
    it('Refresh, go back, go forward', () => {
        cy.visit('https://www.google.com/')

        
        cy.reload();

        cy.visit('https://www.google.com/');

        cy.go('back');
        cy.go('forward');

        cy.go(-1);
        cy.go(1);
        
    });
})