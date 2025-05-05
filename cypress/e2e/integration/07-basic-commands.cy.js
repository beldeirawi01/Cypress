/// <reference types="cypress"/>

describe("Cypress Actions", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");
    cy.visit("https://www.techglobal-training.com/frontend");
  });

  /**
   * Visit the techglobal frontend page
   * Click and navigate to Html Elements page
   * Click on the Register button on the Html Elements Page
   * Validate "You clicked on “Register" text is visible
   * And click on the "Sign in" button
   * Validate "You clicked on “Sign in”" text is visible
   */
  it("Click Action - click()", () => {
    cy.get("#register_button").click();
    cy.get(".mt-1").should("have.text", "You clicked on “Register”");

    cy.get("#signin_button").click();
    cy.get(".mt-1").should("have.text", "You clicked on “Sign in”");

    cy.get("#register_button")
      .click()
      .next()
      .next()
      .should("have.text", "You clicked on “Register”")
      .prev()
      .click()
      .next()
      .should("have.text", "You clicked on “Sign in”");
  });

  it("Checkbox & Radio Buttons - check()", () => {
    // This assertion will not work, because '#apple_check' targets <label> web element
    // and this element is not the input itself, and it is not possible to get the input information from it
    cy.get("#apple_check").click().should("be.checked");

    /**
     * cy.check() can only be called on :checkbox and :radio.
     * Your subject is a: <label id="apple_check" class="checkbox">...</label>
     */

    // cy.get('#apple_check').check()

    /**
     * 1. Check on the Apple checkbox button
     * 2. Then Validate its checked
     * 3. Uncheck the Apple checkbox button
     * 4. Validate its unchecked
     */

    // cy.get('#checkbox_1').check().should('be.checked')
    // cy.get('#checkbox_1').uncheck().should('not.be.checked')

    cy.get('#checkbox_1').check()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')
  });

  it("Checkbox & Radio Buttons - check() 3", () => {
    cy.get("#radio_1_option_1").check()
    cy.get("#radio_1_option_1").should('be.checked')
    cy.get("#radio_1_option_2").check()
    cy.get("#radio_1_option_2").should('be.checked').and("#radio_1_option_1", 'not.be.checked')
  });

  it("Checkbox & Radio Buttons - check() 4", () => {
    cy.get("input[id^='#radio_1']")
    .should('have.length', 3)
    .each(x => {
      cy.wrap(x).check().should('be.checked')
    })
  })
});


    