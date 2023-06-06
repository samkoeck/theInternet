const input = 'input[name="email"]';
const retrievePasswordButton = 'button[id="form_submit"]';

export function clickRetrievePassword() {
    cy.get(retrievePasswordButton).click();
}

export function pageIsLoaded() {
    cy.get(input).should('be.visible');
    cy.get(retrievePasswordButton).should('be.visible');
}

export function typeInInputField(text) {
    cy.get(input).type(text);
}

export function inPutFieldHasText(text) {
    cy.get(input).should('have.value', text);
}
