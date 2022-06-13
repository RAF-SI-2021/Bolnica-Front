/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

import Chance from "chance";
const chance = new Chance();
const dayjs = require("dayjs");

describe("Nurse", () => {
  beforeEach(() => {
    cy.loginAdmin(); //cy.loginRecepcionist();
    cy.visit("http://localhost:3001/recepcionist");
  });

  it("should be able to add new patients to system", () => {
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(2)")
      .should("be.visible")
      .should("contain", "Dodavanje pacijenta")
      .click();
    cy.url({ timeout: 10000 }).should("contain", "/recepcionist/add-patient");
    cy.get("form").should("be.visible");
    cy.get('input[name="ime"]').should("be.visible").type("Test");
    cy.get('input[name="prezime"]').should("be.visible").type("Testic");
    cy.get('input[name="imeRoditelja"]')
      .should("be.visible")
      .type(chance.name());
    cy.get('input[name="jmbg"]')
      .should("be.visible")
      .type(chance.integer({ min: 1000000000000, max: 9999999999999 }));
    cy.get(".form-group-custom:nth-child(5) > .margin-right:nth-child(1)")
      .should("be.visible")
      .click()
      .type("1980-12-12");
    cy.get('input[name="mestoRodjenja"]')
      .should("be.visible")
      .type(chance.city());
    cy.get('input[name="adresa"]').should("be.visible").type(chance.address());
    cy.get('input[name="mestoStanovanja"]')
      .should("be.visible")
      .type(chance.city());
    cy.get('input[name="zemljaStanovanja"]')
      .should("be.visible")
      .type(chance.country());
    cy.get('input[name="zemljaDrzavljanstva"]')
      .should("be.visible")
      .type(chance.country());
    cy.get('input[name="kontaktTelefon"]')
      .should("be.visible")
      .type(chance.phone());
    cy.get('input[name="email"]')
      .should("be.visible")
      .type("testtestic@gmail.com");
    cy.get('input[name="imeStaratelj"]')
      .should("be.visible")
      .type(chance.name());
    cy.get('input[name="jmbgStaratelj"]')
      .should("be.visible")
      .type(chance.integer({ min: 1000000000000, max: 9999999999999 }));
    cy.get('select[name="porodicniStatus"]').should("be.visible").select(2);
    cy.get('select[name="bracniStatus"]').should("be.visible").select(3);
    cy.get('input[name="brojDece"]')
      .should("be.visible")
      .type(chance.integer({ min: 1, max: 5 }));
    cy.get('input[name="zanimanje"]')
      .should("be.visible")
      .type(chance.profession());
    cy.get('select[name="stepenStrucneSpreme"]').should("be.visible").select(4);
    cy.get(
      ".form-custom > .form-group-custom > .wrapper > .option-1 > span"
    ).click(); //gender
    cy.get("button")
      .should("be.visible")
      .should("contain", "Registruj pacijenta")
      .last()
      .click();
    cy.url({ timeout: 10000 }).should("contain", "/recepcionist");
  });

  // it('should be able to see list of patients and search them on homepage', () => {
  //     cy.get('.welcome-msg').should('be.visible')
  //                 .should('contain', 'Dobro jutro');
  //     cy.get('.user-name').should('be.visible')
  //             .should('contain', 'Ana Reljić');//localStorage.getItem('name'));
  //     cy.get('.user-title').should('be.visible')
  //             .should('contain', 'Recepcionar');//localStorage.getItem('title'));
  //     cy.get('form').should('be.visible');
  //     cy.get('input[name="search"]').should('be.visible').type("Test");
  //     cy.get('.example > button > svg').click();
  //     cy.get('.responsivnes > .myTable > .familyFix > tr:nth-child(1) > td:nth-child(1)').should('contain', "Test");
  // })

  it("should be able to schedule/view patients for a specific doctor in specific department in calendar", () => {
    //jebada
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(3)")
      .should("be.visible")
      .should("contain", "Zakazivanje pregleda")
      .click({ multiple: true });
    cy.url({ timeout: 10000 }).should(
      "contain",
      "/recepcionist/add-appointment"
    );

    cy.get(".dropdownButton").first().click();
    //cy.get('.dropdown-item').click();

    cy.get(".dropdownButton").last().click();
    //cy.get('.dropdown-item').click();

    cy.get(
      ".Kalend__ButtonIcon__container:nth-child(3) > .Kalend__ButtonIcon > .Kalend__ButtonIcon__svg-normal > g > g > rect"
    ).click();
    cy.get(
      ".Kalend__CalendarDesktopNavigation__buttons > .Kalend__button"
    ).click();
    cy.get(".Kalend__HeaderCalendarTitle__container > .Kalend__text")
      .should("be.visible")
      .should("contain", dayjs().format("MMMM YYYY"));

    cy.get("#Kalend__timetable").click();

    cy.get(".new-appointment-doctor > .btn-container > .comment-btn").click();
    cy.get(".new-appointment-container > textarea").click().type("test");
    cy.get(".dropdown1 > .form-select").select("pregled");
    cy.get(".dropdown2 > .form-select").select("Pacijent Pacijent");
    cy.get(".my-save-btn").click();

    cy.get(".Kalend__CalendarViewDropdown__wrapper > .Kalend__button").click();
    cy.get(
      ".Kalend__header_calendar_buttons__container-mobile > .Kalend__button:nth-child(1) > .Kalend__text"
    ).click();
    cy.get(".Kalend__CalendarViewDropdown__wrapper > .Kalend__button").click();
    cy.get(
      ".Kalend__header_calendar_buttons__container-mobile > .Kalend__button:nth-child(3) > .Kalend__text"
    ).click();

    cy.get("ul > li:nth-child(1)")
      .should("be.visible")
      .should("contain", "Početna")
      .click({ multiple: true });
  });

  // it("should be able to see list of all patients", () => {
  //   //meni ne radi
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(4)")
  //     .should("be.visible")
  //     .should("contain", "Pretraga pacijenata")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should(
  //     "contain",
  //     "/recepcionist/search-patient"
  //   );

  //   //...
  // });

  it("should be able to see user profile and update its data", () => {
    //vraca na admina
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(5)")
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
