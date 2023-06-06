const dropdown = 'select[id="dropdown"]';

export function selectOptionInDropdown(n) {
    cy.get(dropdown).select(n);
}

export function pageIsLoaded(text) {
    cy.get(`${dropdown} option:selected`).should('have.text',text);
}