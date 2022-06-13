/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

import Chance from "chance";
const chance = new Chance();

describe("Biochemist", () => {
  const lbp = "99999";

  beforeEach(() => {
    cy.loginAdmin(); //cy.loginBiochemist();
    cy.visit("http://localhost:3001/biochemist");
  });

  // it("should be able to see unprocessed work orders/reports for today and their details", () => {
  //   cy.get(".user-name").should("be.visible").should("contain", "Jasda"); //localStorage.getItem('name'));
  //   cy.get(".user-title").should("be.visible").should("contain", "Alskcna"); //localStorage.getItem('title'));

  //   cy.get("table").should("be.visible");

  //   cy.get(
  //     ".responsivnes > .myTable > .familyFix > tr:nth-child(1) > td:nth-child(2)"
  //   )
  //     .should("contain", lbp)
  //     .click();
  //   cy.url({ timeout: 5000 }).should("contain", "/biochemist/detailed-result");
  // });

  it("should be able to see user profile and update its data", () => {
    //vraca na admina
    cy.get("ul").should("be.visible");
    cy.get(".nav-item:nth-child(2) > .nav-link > .familyFix")
      .should("be.visible")
      .should("contain", "Profil")
      .click({ multiple: true });
    cy.get("h1").should("be.visible").should("contain", "Profil");
    cy.get("form").should("be.visible");
    cy.get(".buttonIconBlue").first().click({ multiple: true });
    cy.get('input[name="surname"]')
      .should("be.visible")
      .clear()
      .type(chance.word());
    cy.get("body > #root > div > .form-custom > button").click({
      multiple: true,
    });
  });

  it("should be able to logout", () => {
    cy.get(".logout-btn").should("be.visible").last().click();
  });
});
