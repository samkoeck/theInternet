const button1Left = 'large-2 + a';
const button2Left = 'large-2 + a + a';
const button3Left = 'large-2 + a + a + a';

export function clickFirstButtonOnTheLeft() {
    cy.get(button1Left).click();
}

export function clickSecondButtonOnTheLeft() {
    cy.get(button2Left).click();
}

export function clickThirdButtonOnTheLeft() {
    cy.get(button3Left).click();
}