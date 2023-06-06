const checkboxes = 'input[type="checkbox"]';

export function checkbox1IsSelected(bool) {
    if (bool) {
        cy.get(checkboxes).first().should('be.checked');
    } else {
        cy.get(checkboxes).first().should('not.be.checked');
    }
}

export function checkbox2IsSelected(bool) {
    if (bool) {
        cy.get(checkboxes).eq(1).should('be.checked');
    } else {
        cy.get(checkboxes).eq(1).should('not.be.checked');
    }
}

export function checkCheckbox1() {
    cy.get(checkboxes).first().check();
}

export function checkCheckbox2() {
    cy.get(checkboxes).last().check();
}

export function uncheckCheckbox1() {
    cy.get(checkboxes).first().uncheck();
}

export function uncheckCheckbox2() {
    cy.get(checkboxes).last().uncheck();
}