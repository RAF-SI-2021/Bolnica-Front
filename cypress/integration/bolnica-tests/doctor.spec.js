/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Doctor', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

})