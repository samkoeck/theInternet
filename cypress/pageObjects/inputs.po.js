const inputField = 'input';

export function inputFieldIsVisible() {
    cy.get(inputField).should('be.visible');
}

export function filInInputField(text) {
    cy.get(inputField).type(text);
}

export function inputFieldHasValue(text) {
    cy.get(inputField).should('have.value', text);
}