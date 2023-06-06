const firstDivOfPage = 'div[class="example"]';

export function goToDigestAuthPage(user, pass) {
    cy.visit('admin:admin@https://the-internet.herokuapp.com/digest_auth')
}

export function pageIsLoaded(text) {
    cy.get(firstDivOfPage).should('contain', text);
}