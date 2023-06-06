const firstDivOfPage = 'div[class="example"]';

export function goToBasicAuthPage(user, pass) {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        auth: {
            username: 'admin',
            password: 'admin',          
         },
    })
}

export function pageIsLoaded(text) {
    cy.get(firstDivOfPage).should('contain', text);
}