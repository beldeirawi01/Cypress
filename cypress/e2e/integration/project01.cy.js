/// <reference types="cypress"/>
describe('Project 01', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/form-elements')
    })

    it('Validate Contact Us Info',() => {
        cy.get('.is-size-3')
        cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
        cy.get('#email').should('have.text', 'info@techglobalschool.com')
        cy.get('#phone-number').should('have.text', '(224) 580-2150')
    });


    it('Validate Full Name Input Box', () => {
        cy.get('[placeholder="Enter your full name"]')
        cy.get('[placeholder="Enter your full name"]').should('have.attr', 'required')
        cy.get('[for="name"]').should('have.text', 'Full name *')


        cy.get('[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name')
        
    })

    it('Validate Gender', () => {
        cy.get('label').contains('Gender').should('have.text', 'Gender *')
        cy.get('.mr-1').should('have.attr', 'required')
        cy.get('[type="radio"]').should('be.visible', 'Male', 'Female', 'Prefer not to disclose')



        cy.get('input[type="radio"][required]').click().should('be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')

        cy.get('input[type="radio"]').eq(1).click().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
    })


    it('Validate Address Input Box', () => {
        cy.get('[placeholder="Enter your address"]').should('be.visible')
        cy.get('[placeholder="Enter your address"]').should('not.have.attr', 'required')
        cy.get('label').contains('Address').should('have.text', 'Address')
        cy.get('input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address')
    })

    it('Validate Email Input Box', () => {
        cy.get('[placeholder="Enter your email"]').should('be.visible')
        cy.get('[placeholder="Enter your email"]').should('have.attr', 'required')
        cy.get('label').contains('Email').should('have.text', 'Email *')
        cy.get('input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email')
    })


    it('Validate Phone', () => {
        cy.get('.input[type="phone"]').should('be.visible').and('not.have.attr', 'required')
        cy.get('.input[type="phone"]').should('have.attr', 'placeholder', 'Enter your phone number')
        cy.get('.label').contains('Phone').should('have.text', 'Phone')
    })


    it('Validate Message text area', () => {
        cy.get('.textarea').should('be.visible').and('not.have.attr', 'required')
        cy.get('label').contains('Message').should('have.text', 'Message')
        cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...')
    })


    it('Validate the Consent Checkbox', () => {
        cy.get('label.checkbox').should('have.text', ' I give my consent to be contacted.')
        cy.get('input[type="checkbox"]').should('have.attr', 'required')
        cy.get('input[type="checkbox"]').should('be.enabled')
        cy.get('input[type="checkbox"]').click().should('be.checked')
        cy.get('input[type="checkbox"]').click().should('not.be.checked')
    })


    it('Validate the SUBMIT button', () => {
        cy.get('button[type="submit"]').should('be.visible').and('have.text', 'SUBMIT').and('be.enabled')
    })


    it('Validate Form Submission', () => {
        cy.get('[placeholder="Enter your full name"]').type('Baraa Eldeirawi')
        cy.get('label').contains('Prefer').click()
        cy.get('[placeholder="Enter your address"]').type('2800 River Road')
        cy.get('[placeholder="Enter your email"]').type('johndoe123@gmail.com')
        cy.get('.input[type="phone"]').type('123-456-7890')
        cy.get('.textarea').type("Learning Automation")
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click()
        cy.get("strong[class='mt-5']").should('be.visible')

    })


})