/// <reference types="cypress" />


describe ('Project 02', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend/login')
    })

    it('Validate Login Form', () => {
        cy.get('#username').should('be.visible').and('not.have.attr', 'required')
        cy.get('label[for="username"]').should('have.text', 'Please enter your username')

        cy.get('#password').should('be.visible').and('not.have.attr', 'required')
        cy.get("label[for='password']").should('have.text', 'Please enter your password')

        cy.get('#login_btn').should('be.visible').and('be.enabled')
        .next().should('be.visible')
        .and('have.text', 'Forgot Password?')

    })


    it('Validate Valid Login', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()

        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('have.text', 'LOGOUT')
    })


    it('Validate LogOut', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('Test1234')

        cy.get('#login_btn').click()
        cy.get('#logout').click();

        cy.get('.pt-6').should('be.visible')
    })


    it('Validate Forgot Password link and Reset Password', () => {
        cy.get('.LoginForm_form__m12Jc [href]').click()
        cy.get('#modal_title').should('be.visible')
        cy.get('.delete').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('label[for="email"]').should('have.text', "Enter your email address and we'll send you a link to reset your password. ")
        cy.get('#submit').should('be.visible').and('have.text', 'SUBMIT').and('be.enabled')
    })


    it('Validate Reset Password close button', () => {
        cy.get('.LoginForm_form__m12Jc [href]').click()
        cy.get('.modal-card').should('be.visible')
        cy.get('.delete').click()
        cy.get('.modal-card').should('not.exist')

    })


    it('Validate Reset Password form submission', () => {
        let email = 'beldeirawi@gmail.com'
        cy.get('.LoginForm_form__m12Jc [href]').click()
        cy.get('#email').type(email)
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('be.visible').and('has.text', 'A link to reset your password has been sent to your email address.')
    })


    it('Validate Invalid Login with empty credentials', () => {
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })


    it('Validate Invalid Login with wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })


    it('Validate Invalid Login with wrong password', () => {
        cy.get('#username').type('TechGlobal')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Password entered!')
    })


    it('Validate Invalid Login with wrong username & password', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    })
    
})