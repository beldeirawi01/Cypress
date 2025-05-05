/// <reference types="cypress"/>

describe('Cypress Advanced Actions', () => {
    beforeEach(() => {
        cy.visit("https://www.techglobal-training.com/frontend");

        cy.contains(".card", "Actions").click()
    });

    it('Type and clear actions', () => {
        let query = 'Apple'

        cy.get('#input_box')
          .should('exist')
          .and('be.visible')
          .and('be.enabled')
          .and('have.attr', 'placeholder', 'Enter your message...')
          .and('have.attr', 'value', '')
          .type(query)
          .should('have.attr', 'value', query)
          .clear()
          .should('have.attr', 'value', '')
          .and('be.empty')


        //cy.get('#input_box'); // Selector in Cypress is chainable

        it('Drag and Drop', () => {
            cy.get('#drag_element').drag('#drop_element'); // requires 4tw/cypress-drag-drop dependency
            cy.get('#drag_and_drop_result')
              .should('be.visible')
              .and('have.text', 'An element dropped here!')
          })
    })
})