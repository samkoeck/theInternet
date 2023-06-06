const image1 = 'img[src="asdf.jpg"]';
const image2 = 'img[src="hjkl.jpg"]';
const image3 = 'img[src="img/avatar-blank.jpg"]';
const canvas = 'canvas[id="canvas"]';

export function image1ShouldBeBroken() {
    cy.get(image1).should('be.visible').and($img => expect($img[0].naturalWidth).to.be.lessThan(1));
}

export function image2ShouldBeBroken() {
    cy.get(image2).should('be.visible').and($img => expect($img[0].naturalWidth).to.be.lessThan(1));
}

export function image3ShouldNotBeBroken() {
    cy.get(image3).should('be.visible').and($img => expect($img[0].naturalWidth).to.be.gt(0));
}
