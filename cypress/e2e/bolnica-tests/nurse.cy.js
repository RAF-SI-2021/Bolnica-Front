/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

import Chance from "chance";
const chance = new Chance();
const dayjs = require("dayjs");

describe("Nurse", () => {
  beforeEach(() => {
    cy.loginAdmin(); //cy.loginNurse();
    cy.visit("http://localhost:3001/nurse");
  });

  it("should be able to choose a doctor and see his/hers patients for the day", () => {
    cy.get(".user-name").should("be.visible").should("contain", "Ana Reljic"); //localStorage.getItem('name'));
    cy.get(".user-title").should("be.visible").should("contain", "Med sestra"); //localStorage.getItem('title'));
    cy.get(".dropdown").click();
    cy.get(".dropdown-item").contains("Dr. Test").click();
    //...
  });

  // it("should be able to see/find patients and change pages", () => {
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(2)")
  //     .should("be.visible")
  //     .should("contain", "Pacijenti")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should("contain", "/nurse/patient-preview");
  //   cy.get(".welcome-msg")
  //     .should("be.visible")
  //     .should("contain", "Dobro jutro");
  //   cy.get(".user-name").should("be.visible").should("contain", "Ana Reljić"); //localStorage.getItem('name'));
  //   cy.get(".user-title").should("be.visible").should("contain", "Med sestra"); //localStorage.getItem('title'));
  //   cy.get(".date-span")
  //     .should("be.visible")
  //     .should("contain", dayjs().format("D MMMM, YYYY"));
  //   cy.url({ timeout: 10000 }).should("contain", "/patient-preview");
  //   cy.get("h1").should("be.visible").should("contain", "Pacijenti");
  //   cy.get('input[name="search"]').should("be.visible").type("Test");
  //   cy.get("form").should("be.visible").submit();
  //   cy.get('input[name="search"]').clear();
  //   cy.get("form").should("be.visible").submit();
  //   cy.get(".page-item:nth-child(3)").click();
  // });

  it("should be able to schedule/view patients for a specific doctor in calendar", () => {
    //jebada
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(3)")
      .should("be.visible")
      .should("contain", "Zakazivanje")
      .click({ multiple: true });
    cy.url({ timeout: 10000 }).should("contain", "/nurse/schedule-appointment");

    cy.get(".dropdownButton").click();
    cy.get(".dropdown-item").contains("Dr. Test").click();

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
    //cy.get('div > .Kalend__Calendar__root > .Kalend__Calendar__table > #Kalend__timetable')
    //.should('equal', '#Kalend__day__'+ dayjs().format('YYYY-MM-DD')).click();// + 'T13\3A 41\3A 02\.724\+02\3A 00').click();

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

    cy.visit("http://localhost:3001/nurse", { timeout: 10000 });

    cy.get(".dropdown").click();
    cy.get(".dropdown-item").contains("Dr. Test").click();
    cy.wait(500);
    cy.get(".customButton1").click({ multiple: true }, { force: true });
    //cy.get('.customButton2').click();
    cy.get(".customButton3").first().click({ force: true });
    //cy.get('.customButton4').click();
  });

  // it("should be able to update patients data", () => {
  //   cy.config("waitAfterEachCommand", 4000);
  //   cy.on("uncaught:exception", (err, runnable) => {
  //     return false;
  //   }); //!!
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(2)")
  //     .should("be.visible")
  //     .should("contain", "Pacijenti")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should("contain", "/patient-preview");
  //   cy.get("h1").should("be.visible").should("contain", "Pacijenti");
  //   cy.get(".familyFix > tr:nth-child(1) > td > .buttonIconBlue > svg").click();
  //   cy.get("form").should("be.visible");
  //   cy.get('input[name="prezime"]')
  //     .should("be.visible")
  //     .clear()
  //     .type(chance.word());
  //   cy.get("body > #root > div > .form-custom > button").click({
  //     multiple: true,
  //   });
  //   cy.url({ timeout: 10000 }).should("contain", "/nurse/patient-preview");
  // });

  it("should be able to add new patients", () => {
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(4)")
      .should("be.visible")
      .should("contain", "Nov pacijent")
      .click();
    cy.url({ timeout: 10000 }).should("contain", "/nurse/register-patient");
    cy.get("form").should("be.visible");
    cy.get('input[name="ime"]').should("be.visible").type("Test");
    cy.get('input[name="prezime"]').should("be.visible").type("Testic");
    cy.get('input[name="imeRoditelja"]')
      .should("be.visible")
      .type(chance.name());
    cy.get('input[name="jmbg"]')
      .should("be.visible")
      .type(chance.integer({ min: 1000000000000, max: 9999999999999 }));
    cy.get('input[name="datumRodjenja"]')
      .should("be.visible")
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
    cy.get("button").should("be.visible").last().click();
    cy.url({ timeout: 10000 }).should("contain", "/nurse/patient-preview");
  });

  // it('should be able to see user profile and update its data', () => {//vraca na admina
  //     cy.get('ul').should('be.visible');
  //     cy.get('ul > li:nth-child(5)').should('be.visible').should('contain', 'Profil').click({ multiple: true });
  //     cy.get('h1').should('be.visible').should('contain', 'Profil');
  //     cy.get('form').should('be.visible');
  //     cy.get('.buttonIconBlue').first().click({ multiple: true })
  //     cy.get('input[name="surname"]').should('be.visible').clear().type(chance.word());
  //     cy.get('body > #root > div > .form-custom > button').click({ multiple: true })
  // })

  it("should be able to logout", () => {
    cy.get("button").should("be.visible").last().click();
  });
});
