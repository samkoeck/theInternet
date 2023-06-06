const abTestingLink = 'a[href="/abtest"]';
const addRemoveElementLink = 'a[href="/add_remove_elements/"]';
const brokenImagesLink = 'a[href="/broken_images"]';
const difficultDOMLink = 'a[href="/challenging_dom"]';
const checkboxLink = 'a[href="/checkboxes"]';
const contextMenuPage = 'a[href="/context_menu"]';
const dropdown = 'a[href="/dropdown"]';
const dynamicControls = 'a[href="/dynamic_controls"]';
const dynamicLoading = 'a[href="/dynamic_loading"]';
const forgotPassword = 'a[href="/forgot_password"]';
const geolocation = 'a[href="/geolocation"]';
const inputs = 'a[href="/inputs"]';

export function goToABTesting() {
    cy.get(abTestingLink).click();
}

export function goToAddRemoveTesting() {
    cy.get(addRemoveElementLink).click();
}

export function goToBrokenImages() {
    cy.get(brokenImagesLink).click();
}

export function goToDifficultDOM() {
    cy.get(difficultDOMLink).click();
}

export function goToCheckboxes() {
    cy.get(checkboxLink).click();
}

export function goToContextMenu() {
    cy.get(contextMenuPage).click();
}

export function goToDropdown() {
    cy.get(dropdown).click();
}

export function goToDynamicControls() {
    cy.get(dynamicControls).click();
}

export function goToDynamicLoading() {
    cy.get(dynamicLoading).click();
}

export function goToForgotPassword() {
    cy.get(forgotPassword).click();
}

export function goToGeoLocation() {
    cy.get(geolocation).click();
}

export function goToInputs() {
    cy.get(inputs).click();
}