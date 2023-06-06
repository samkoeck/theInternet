const checkbox = 'input[type="checkbox"]';
const deleteCheckboxButton = 'button[onclick="swapCheckbox()"]';
const inputField = 'input[type="text"]';
const enableButton = 'button[onclick="swapInput()"]';

export function clickEnableButton() {
    cy.get(enableButton).click();
}

export function checkboxIsNotVisible() {
    cy.get(checkbox).should('not.exist');
}

export function checkboxIsVisible() {
    cy.get(checkbox).should('be.visible');
}

export function inputFieldIsVisible() {
    cy.get(inputField).should('be.visible');
}

export function clickDeleteCheckboxButton() {
    cy.get(deleteCheckboxButton).click();
}

export function checkboxIsSelected(bool) {
    if (bool) {
        cy.get(checkbox).should('be.checked');
    } else {
        cy.get(checkbox).should('not.be.checked');
    }
}

export function inputText(text) {
    cy.get(inputField).type(text);
}

export function inputFieldIsEnabled(bool) {
    if (bool) {
        cy.get(inputField).should('be.enabled');
    } else {
        cy.get(inputField).should('not.be.enabled');
    }
}

export function checkCheckbox() {
    cy.get(checkbox).check();
}

export function unCheckCheckbox() {
    cy.get(checkbox).uncheck();
}