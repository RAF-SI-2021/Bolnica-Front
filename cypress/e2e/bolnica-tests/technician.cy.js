/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();
const dayjs = require('dayjs');

describe('Technician', () => {

    const lbp = '99999';

    beforeEach(() => {
        cy.loginAdmin();//cy.loginTechnician();
        cy.visit('http://localhost:3000/technician');
    })

    it('should be able to schedule patient for labaratory visit', () => {//meni ne radi nzm
        cy.get('.flex:nth-child(1)').click();
        cy.url({ timeout: 5000 }).should('contain', '/technician/visits');
        cy.get('.nav-item > .active').should('contain', "Zakazivanje")
        cy.get('form').should('be.visible');
        cy.get('input[name="lbp"]').should('be.visible').type(lbp);//chance.integer({ min: 100, max: 999 })
        cy.get('.form-group-custom:nth-child(1)').should('not.be.disabled').click();

        cy.get('.form-group-custom:nth-child(3) > .margin-right:nth-child(1)').click();
        cy.get('.form-group-custom:nth-child(3) > .margin-right:nth-child(1)').type('2023-07-01');
        //cy.get('.form-group-custom:nth-child(3) > .buttonForm').click(); //Request failed with status code 400 get
        
        cy.get('textarea[name="description"]').should('be.visible').type('Test napomena...');
        
        cy.get('.form-group-custom:nth-child(8) > .buttonForm').click(); //Request failed with status code 403 post

    })

    it('should be able to see schedueled patients by their LBP, date or both', () => {
        cy.get('.flex:nth-child(1)').click();
        cy.url({ timeout: 5000 }).should('contain', '/technician/visits');
        cy.get('.nav-item > .disabled').should('contain', "Pregled zakazanih poseta").click({ multiple: true });
        cy.get('form').should('be.visible');
        cy.get('input[name="lbp"]').should('be.visible').type(lbp);
        cy.get('.form-group-custom > .form-group-custom > .margin-right').click({ multiple: true } );
        cy.get('.form-group-custom > .form-group-custom > .margin-right').type('2023-07-01');
        cy.get('.buttonForm').click();

        cy.get('.nav-item > .disabled').click({ multiple: true } );
        cy.get('.form-group-custom:nth-child(3) > .margin-right:nth-child(1)').click();
        cy.get('.form-group-custom:nth-child(3) > .margin-right:nth-child(1)').type('2023-07-01');
        cy.get('.form-group-custom:nth-child(3) > .buttonForm').click({ multiple: true } );
    })

    it('should be able to find schedueled patients by their LBP and create their work order', () => {
        cy.get('.flex:nth-child(2)').click();
        cy.url({ timeout: 5000 }).should('contain', '/technician/patient-admission');
        cy.get('.nav-item > .isActive').should('contain', "Zakazani pacijenti");  
        cy.get('form').should('be.visible');
        cy.get('input[name="lbpForm"]').should('be.visible').type(lbp);
        cy.get('.responsivnes > .myTable > .familyFix > tr:nth-child(1) > td:nth-child(2)').should('contain', lbp);
        cy.get('.myTable > .familyFix > tr:nth-child(1) > td > .d-flex > .buttonKreirajNalog').should('not.be.disabled').click();

        cy.get('form').should('be.visible');
        cy.get('input[name="lbp"]').should('be.visible').should('contain', lbp);
        cy.get('.form-group-custom > button').click();

        cy.get('input[name="lbp"]').clear().type(1234);
    })

    it('should be able to see results of laboratory analyzes performed on specified patient', () => {
        cy.get('.flex:nth-child(3)').click();
        cy.url({ timeout: 5000 }).should('contain', '/technician/issuing-results');
        cy.get('.user-name').should('be.visible')
                .should('contain', 'Dr. Paun');//localStorage.getItem('name'));
        cy.get('.user-title').should('be.visible')
                .should('contain', 'Lab Tehnicar');//localStorage.getItem('title'));  
        cy.get('.date-span').should('be.visible')
                .should('contain', dayjs().format('D MMMM, YYYY'));

        cy.get('select[name="lbp"]').should('be.visible').select(1);//.select("test");
        cy.get('.form-group-custom > .margin-right').click().type('2022-01-01');
        cy.get('.form-group-custom > .margin-left').click().type('2023-01-01');
        cy.get('form > button').click();
        cy.get('.responsivnes > .myTable > .familyFix > tr:nth-child(1) > td:nth-child(2)').should('contain', lbp).click();
    })

    it('should be able to see user profile and update its data', () => {//vraca na admina 
        cy.get('ul').should('be.visible');
        cy.get('ul > li:nth-child(5)').should('be.visible').should('contain', 'Profil').click({ multiple: true });
        cy.get('h1').should('be.visible').should('contain', 'Profil');
        cy.get('form').should('be.visible');
        cy.get('.buttonIconBlue').click({ multiple: true })
        cy.get('input[name="surname"]').should('be.visible').clear().type(chance.word());
        cy.get('body > #root > div > .form-custom > button').click({ multiple: true })
    })

    it('should be able to logout', () => {
      cy.get('button').should('be.visible').last().click();
    })
})