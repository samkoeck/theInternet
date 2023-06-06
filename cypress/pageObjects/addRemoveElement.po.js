const addButton = 'button[onclick="addElement()"]';
const deleteButton = 'button[onclick="deleteElement()"]';

export function clickAddButton() {
    cy.get(addButton).click();
}

export function clickDeleteButton() {
    cy.get(deleteButton).click();
}

export function deleteButtonShouldBeVisible() {
    cy.get(deleteButton).should('be.visible');
}

export function deleteButtonShouldNotBeVisible() {
    cy.get(deleteButton).should('not.exist');
}