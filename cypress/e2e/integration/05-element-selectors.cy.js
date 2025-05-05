/// <reference types="cypress"/>

/*
TEST CASE: Validate Register Button
Go to https://www.techglobal-training.com/frontend/html-elements
Click on "Register" button
Validate "You clicked on "Register"" is visible

TEST CASE: Validate Headings Section
Go to https://www.techglobal-training.com/frontend/html-elements
Validate "Programming Languages" heading is visible
Validate "Automation Tools" heading is visible
*/

describe("Cypress Selectors", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/html-elements");
  });

  it("Validate Register Button", () => {
    cy.get("#register_button")
      .should("be.visible")
      .and("be.enabled")
      .and("have.text", "Register")
      .click();

    cy.get(".mt-1")
      .should("be.visible")
      .and("have.text", "You clicked on Register");

    cy.contains("You clicked on Register").should("be.visible");
  });

  it("Validate Headings Section", () => {
    cy.get("#languages_heading")
      .should("be.visible")
      .and("have.text", "Programming Languages");

    cy.get("#tools_heading")
      .should("be.visible")
      .and("have.text", "Automation Tools");
  });

  it("Understanding CSS Syntax - Locating using tags", () => {
    cy.get("button");

    cy.get("h3");

    cy.get("li");

    cy.get("input");
  });

  it("Understanding CSS Syntax - Locating using class and ID", () => {
    cy.get("#checkbox-button-group");

    cy.get(".checkbox");
  });

  it("Understanding CSS Syntax - Locating web elements using multiple selectors", () => {
    cy.get("label.checkbox.is-inline");
  });

  it("Understanding CSS Syntax - Locating child, descendant, adjacent", () => {
    /**
     * Child Selector ( > ) *
     *
     * Description: Targets direct children of a specified parent element.
     */

    cy.get("#checkbox-button-group > h3");

    cy.get("#checkbox-button-group > div > label#apple_check > #checkbox_1");

    /**
     * Descendant Selector ( space ) *
     *
     * Description: Targets elements nested anywhere within a specific parent.
     */

    cy.get("#checkbox-button-group #checkbox_1");

    cy.get("#checkbox-button-group #microsoft_check");

    cy.get("div #microsoft_check");

    cy.get("div #unordered_list");

    cy.get("#ordered_list  #ordered_list_item1");

    // ( + )Locates the immediate sibling of web element
    cy.get("#ordered_list  #ordered_list_item1 + li + li");

    // ( ~ ) Locates all the NEXT siblings of web element
    cy.get("#ordered_list  #ordered_list_item1 ~ li");

    /**
     * Grouping Selectros ( , ) *
     *
     * Description: Combines multiple selectors into one rule set,
     * allowing you to style different elements with the same set of styles.
     */

    cy.get("#register_button, #text_input1");

    cy.get("#register_button, #main_header_container + .button");

    cy.get("#text_input1").should("be.visible");

    /**
     * 1. Navigate to TechGlobal frontend Html Elements Page
     * 2. Validate  "Enter Text Here" input bar is visible
     * 3. Validate "Facebook" link is visible
     */

    cy.get('#text_input1').should('be.visible')
    cy.get('#facebook_link').should('be.visible')

    cy.get('#text_input1, #facebook_link').should('be.visible')
  });

  it('Locating the element using Attribute Selectors', () => {

    // These are proper way to locate the class and id
    cy.get('#checkbox-button-group')
    cy.get('.checkbox')

    cy.get('[id="checkbox-button-group"]')
    cy.get('[class="class"]')

    cy.get('[data-identifier="Headings"]')
    cy.get('[value="Apple"]')
    cy.get('[type="checkbox"]')

    cy.get('#company_dropdown1 > option[value="Apple"]')
  })

  it('Test Case', () => {

    /**
     * Navigate to "https://www.techglobal-training.com/frontend/dynamic-elements"
     * Locate the below boxes is displayed
     * Box 1
     * Box 2
     */


    cy.visit('https://www.techglobal-training.com/frontend/dynamic-elements');
    cy.get('[id^=box_]')
  })

  it('Pseudo Class', () => {
    
  })
});











