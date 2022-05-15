/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('Nurse', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/nurse');
    })

})