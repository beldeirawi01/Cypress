/// <reference types="cypress"/>

describe('Cypress Asserions', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/')
    });



    it('Default Assertions - 1', () => {
        cy.get('img[class^="Footer_logo"]')
          .scrollIntoView()
    });

    it('Default Assertions - 2', () => {
        cy.get('button').contains('Mock Interviews').click()
        cy.url().should('eq', 'https://www.techglobal-training.com/login')
    });


    it('Explicit Assertions with then()', () => {
        cy.get('#dropdown-testing').then(el => {
            const text = el.text(); // This is a jQuery Method

            cy.log(text)

            // Explicit Assertions
            expect(el).to.be.visible;
            expect(text).eq('Testing')
        })
    })


    it('Explicit Assertions with each()', () => {
        const expectedOptions = ['Java Exercises', 'JS Exercises']

        cy.get('#dropdown-exercises').realHover()
    })


    it('', () => {
        cy.get('.Footer_socials__7h4n1 a[href*="techglobal"]')
    })

});