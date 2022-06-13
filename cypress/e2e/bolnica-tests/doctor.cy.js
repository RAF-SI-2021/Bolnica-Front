/// <reference types="Cypress" />

import Chance from "chance";
const chance = new Chance();
const dayjs = require("dayjs");

describe("Doctor", () => {
  beforeEach(() => {
    cy.loginAdmin(); //cy.loginDoctor();
    cy.visit("http://localhost:3001/"); //-
  });

  afterEach(() => {
    //cy.pause();
  });

  it("should containt all homepage informations after login", () => {
    cy.get(".welcome-msg")
      .should("be.visible")
      .should("contain", "Dobro jutro");
    cy.get(".user-name").should("be.visible").should("contain", "Dr. Paun"); //localStorage.getItem('name'));
    cy.get(".user-title").should("be.visible").should("contain", "Kardiolog"); //localStorage.getItem('title'));
    cy.get(".date-span")
      .should("be.visible")
      .should("contain", dayjs().format("D MMMM, YYYY"));
    cy.get(".flex:nth-child(1) > .statistics").should("be.visible");
    cy.get(".flex:nth-child(1) > .statistics > .text")
      .should("be.visible")
      .should("contain", "Zakazani pregledi");
    cy.get(".flex:nth-child(1) > .statistics > .number")
      .should("be.visible")
      .should("contain", "34"); //localStorage.getItem('numberOfAppointments'));
    cy.get(".flex:nth-child(2) > .statistics").should("be.visible");
    cy.get(".flex:nth-child(2) > .statistics > .text")
      .should("be.visible")
      .should("contain", "Broj pacijenata");
    cy.get(".flex:nth-child(2) > .statistics > .number")
      .should("be.visible")
      .should("contain", "10"); //localStorage.getItem('numberOfPatients'));
    cy.get(".flex:nth-child(3) > .statistics").should("be.visible");
    cy.get(".flex:nth-child(3) > .statistics > .text")
      .should("be.visible")
      .should("contain", "Operacije");
    cy.get(".flex:nth-child(3) > .statistics > .number")
      .should("be.visible")
      .should("contain", "10"); //localStorage.getItem('numberOfOperations'));
  });

  it("should be able to see/find patients and change pages", () => {
    cy.get("ul").should("be.visible");
    //cy.wait(3001);
    cy.get("ul > li:nth-child(2)")
      .should("be.visible")
      .should("contain", "Pacijenti")
      .click({ multiple: true });
    cy.url({ timeout: 10000 }).should("contain", "/patient-preview");
    cy.get("h1").should("be.visible").should("contain", "Pacijenti");
    cy.get('input[name="search"]').should("be.visible").type("Test");
    cy.get("form").should("be.visible").submit();
    cy.get('input[name="search"]').clear();
    cy.get("form").should("be.visible").submit();
    cy.get(".page-item:nth-child(3)").click();
  });

  it("should be able to update patients data", () => {
    cy.config("waitAfterEachCommand", 4000);
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    }); //!!
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(2)")
      .should("be.visible")
      .should("contain", "Pacijenti")
      .click({ multiple: true });
    cy.url({ timeout: 10000 }).should("contain", "/patient-preview");
    cy.get("h1").should("be.visible").should("contain", "Pacijenti");
    cy.get(".familyFix > tr:nth-child(1) > td > .buttonIconBlue > svg").click();
    cy.get("form").should("be.visible");
    cy.get('input[name="prezime"]')
      .should("be.visible")
      .clear()
      .type(chance.word());
    cy.get("body > #root > div > .form-custom > button").click({
      multiple: true,
    });
    cy.url({ timeout: 10000 }).should("contain", "/patient-preview");
  });

  it("should be able to see appointments", () => {
    cy.get("ul").should("be.visible");
    cy.get("ul > li:nth-child(3)")
      .should("be.visible")
      .should("contain", "Zakazani pregledi")
      .click({ multiple: true });
    cy.url({ timeout: 10000 }).should("contain", "/appointments");
    //ne radi
  });

  // it("should be able to write a refferal for labaratory", () => {
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(4)")
  //     .should("be.visible")
  //     .should("contain", "Kreiraj uput")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should("contain", "/create-refferal");
  //   cy.get("h1").should("be.visible").should("contain", "Kreiranje uputa");
  //   cy.get('select[name="lbp"]').should("be.visible").select(1);
  //   cy.get('select[name="referralType"]').should("be.visible").select(1);
  //   cy.get('select[name="institution"]').should("be.visible").select(1);
  //   cy.get('input[name="comment"]')
  //     .should("be.visible")
  //     .clear()
  //     .type(chance.sentence({ words: 5 }));
  //   cy.get('[type="checkbox"]').check("GLU");
  //   cy.get('[type="checkbox"]').check("KKS");
  //   cy.get('[type="checkbox"]').check("CK");
  //   cy.get("button").should("be.visible").last().click({ multiple: true });
  // });

  // it("should be able to write a refferal for diagnosis", () => {
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(4)")
  //     .should("be.visible")
  //     .should("contain", "Kreiraj uput")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should("contain", "/create-refferal");
  //   cy.get("h1").should("be.visible").should("contain", "Kreiranje uputa");
  //   cy.get('select[name="lbp"]').should("be.visible").select(1);
  //   cy.get('select[name="referralType"]').should("be.visible").select(2);
  //   cy.get('select[name="stepenStrucneSpreme"]').should("be.visible").select(2);
  //   cy.get('input[name="comment"]')
  //     .should("be.visible")
  //     .clear()
  //     .type(chance.sentence({ words: 3 }));
  //   cy.get('select[name="diagnosis"]').should("be.visible").select(5);
  //   cy.get('input[name="reason"]')
  //     .should("be.visible")
  //     .clear()
  //     .type(chance.sentence({ words: 5 }));
  //   cy.get("button").should("be.visible").last().click({ multiple: true });
  // });

  // it("should be able to write a refferal for infirmary", () => {
  //   cy.get("ul").should("be.visible");
  //   cy.get("ul > li:nth-child(4)")
  //     .should("be.visible")
  //     .should("contain", "Kreiraj uput")
  //     .click({ multiple: true });
  //   cy.url({ timeout: 10000 }).should("contain", "/create-refferal");
  //   cy.get("h1").should("be.visible").should("contain", "Kreiranje uputa");
  //   cy.get('select[name="lbp"]').should("be.visible").select(1);
  //   cy.get('select[name="referralType"]').should("be.visible").select(3);
  //   cy.get('select[name="stepenStrucneSpreme"]').should("be.visible").select(2);
  //   cy.get('input[name="comment"]')
  //     .should("be.visible")
  //     .clear()
  //     .type(chance.sentence({ words: 3 }));
  //   cy.get('select[name="diagnosis"]').should("be.visible").select(5);
  //   cy.get("button").should("be.visible").last().click({ multiple: true });
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
    cy.get("button").should("be.visible").last().click();
  });
});
