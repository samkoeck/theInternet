const linkHiddenElement = 'a[href="/dynamic_loading/1"]';
const linkRenderedElement = 'a[href="/dynamic_loading/2"]';
const startButton = 'button';
const helloWorldField = 'div[id="finish"]';

export function linksAreVisible() {
    cy.get(linkHiddenElement).should('be.visible');
    cy.get(linkRenderedElement).should('be.visible');
}

export function helloWorldFieldIsVisible() {
    cy.get(helloWorldField).should('be.visible');
}

export function clickLinkHiddenElement() {
    cy.get(linkHiddenElement).click();
}

export function clickLinkRenderedElement() {
    cy.get(linkRenderedElement).click();
}

export function clickStartButton() {
    cy.get(startButton).click();
}

export function startButtonIsVisible() {
    cy.get(startButton).should('be.visible');
}