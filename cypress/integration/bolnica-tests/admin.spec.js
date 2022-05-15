/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Admin', () => {
    beforeEach(() => {

        cy.loginAdmin();
        //cy.loginAdminBetter();

        cy.visit('http://localhost:3000/admin');
    })

    afterEach(() => {
        //cy.pause();
    })
    
    it('should be able to register new employees', () => {
        cy.get('ul').should('be.visible');
        cy.get('ul > li:nth-child(3)').should('be.visible').should('contain', 'Nov zaposleni').click();
        cy.get('form').should('be.visible');
        cy.get('input[name="name"]').should('be.visible').type("Test");
        cy.get('input[name="surname"]').should('be.visible').type("Testic");
        cy.get('input[name="username"]').should('be.visible').type("test.testic");
        cy.get('input[name="email"]').should('be.visible').type("testtestic@gmail.com");
        cy.get('input[name="dob"]').should('be.visible').type('1980-12-12');
        cy.get('input[name="address"]').should('be.visible').type(chance.address());
        cy.get('input[name="city"]').should('be.visible').type(chance.city());
        cy.get('input[name="contact"]').should('be.visible').type(chance.phone());
        cy.get('input[name="jmbg"]').should('be.visible').type(chance.integer({ min: 1000000000000, max: 9999999999999 }));
        cy.get('select[name="title"]').should('be.visible').select(2);
        cy.get('select[name="profession"]').should('be.visible').select(5);
        cy.get('select[name="department"]').should('be.visible').select(1);      
        cy.get('.form-custom > .form-group-custom > .wrapper > .option-1 > span').click();//gender
        cy.get('button').should('be.visible').last().click();
    })

    it('should be able to find employees and change pages', () => { //meni ne radi search
        cy.get('ul').should('be.visible');
        //cy.wait(3000);
        cy.get('ul > li:nth-child(2)').should('be.visible').should('contain', 'Zaposleni').click({ multiple: true });
        cy.get('h1').should('be.visible').should('contain', 'Zaposleni');
        cy.get('input[name="search"]').should('be.visible').type("Test");
        cy.get('form').should('be.visible').submit();
        cy.get('input[name="search"]').clear();
        cy.get('form').should('be.visible').submit();
        cy.get('.responsivnes > div > .myPagination > .pagination > .page-item:nth-child(3)').click();
    })

    it('should be able to update employee data', () => {
        cy.config("waitAfterEachCommand", 4000);
        cy.on('uncaught:exception', (err, runnable) => {
            return false
          });//!!
        cy.get('ul').should('be.visible');
        cy.get('ul > li:nth-child(2)').should('be.visible').should('contain', 'Zaposleni').click({ multiple: true });
        cy.get('h1').should('be.visible').should('contain', 'Zaposleni');
        cy.get('.familyFix > tr:nth-child(2) > td > .buttonIconBlue > svg').click()
        cy.get('form').should('be.visible');
        cy.get('input[name="surname"]').should('be.visible').clear().type(chance.word());
        cy.get('body > #root > div > .form-custom > button').click({ multiple: true });
    })

    it('should be able to see user profile and update its data', () => {
        cy.get('ul').should('be.visible');
        cy.get('ul > li:nth-child(4)').should('be.visible').should('contain', 'Profil').click({ multiple: true });
        cy.get('h1').should('be.visible').should('contain', 'Profil');
        cy.get('form').should('be.visible');
        cy.get('#root > div > .form-custom:nth-child(2) > .form-section-heading > .buttonIconBlue').click({ multiple: true })
        cy.get('input[name="surname"]').should('be.visible').clear().type('adminić');
        cy.get('body > #root > div > .form-custom > button').click({ multiple: true })
    })

    it('should be able to logout', () => {
      cy.get('button').should('be.visible').last().click();
    })
})