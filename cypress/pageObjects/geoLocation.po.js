const whereAmIButton = 'button[onclick="getLocation()"]';

export function whereAmIButtonIsVisible() {
    cy.get(whereAmIButton).should('be.visible');
}