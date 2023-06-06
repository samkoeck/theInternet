const textField = 'div[id="content"]';

const redirectLink = 'a[href="redirect"]';

export function textFieldContainsText(text) {
    cy.get(textField).should('contain', text);
}

export function clickRedirectLink() {
    cy.get(redirectLink).click();
}