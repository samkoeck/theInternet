const textField = 'div[id="content"]';

export function textFieldContainsText(text) {
    cy.get(textField).should('contain', text);
}