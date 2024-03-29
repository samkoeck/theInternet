import * as homePage from "../pageObjects/home.po";
import * as abTestingPage from "../pageObjects/abTesting.po";
import * as addRemoveElementPage from "../pageObjects/addRemoveElement.po";
import * as basicAuthPage from "../pageObjects/basicAuth.po";
import * as brokenImagesPage from "../pageObjects/brokenImages.po";
import * as checkboxesPage from "../pageObjects/checkBoxes.po";
import * as contextMenuPage from "../pageObjects/contextMenu.po";
import * as dropdownPage from "../pageObjects/dropdown.po";
import * as dynamicControlsPage from "../pageObjects/dynamicControl.po";
import * as dynamicLoadingPage from "../pageObjects/dynamicLoading.po";
import * as forgotPasswordPage from "../pageObjects/forgotPassword.po";
import * as geoLocationPage from "../pageObjects/geoLocation.po";
import * as inputsPage from "../pageObjects/inputs.po";
import * as redirectorsPage from "../pageObjects/redirect.po";
import * as dynamicContentsPage from "../pageObjects/dynamicContent.po";

describe("the internet A/B testing", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToABTesting();
    });

    it('and checks if the text is oke on the page', () => {
        abTestingPage.textFieldContainsText('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    });
});

describe("the internet add remove element", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToAddRemoveTesting();
    });

    it('when clicking on add an extra element should appear', () => {
        addRemoveElementPage.clickAddButton();
        addRemoveElementPage.deleteButtonShouldBeVisible();
    });

    it('when clicking on delete the extra element should disappear', () => {
        addRemoveElementPage.clickAddButton();
        addRemoveElementPage.deleteButtonShouldBeVisible();
        addRemoveElementPage.clickDeleteButton();
        addRemoveElementPage.deleteButtonShouldNotBeVisible();
    });
});

describe("the internet basic auth", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        basicAuthPage.goToBasicAuthPage();
    });

    it('when clicking on add an extra element should appear', () => {
        basicAuthPage.pageIsLoaded('Congratulations! You must have the proper credentials.');
    });
});

describe("the internet broken images", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToBrokenImages();
    });

    it('the page has 2 broken images and 1 should be loaded', () => {
    brokenImagesPage.image1ShouldBeBroken();
        brokenImagesPage.image2ShouldBeBroken();
        brokenImagesPage.image3ShouldNotBeBroken();
    });
});

describe("the internet difficult DOM", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToCheckboxes();
    });

    it('after going to the page the first checkbox is checked', () => {
        checkboxesPage.checkbox2IsSelected(true);
    });

    it('after clicking checkbox 1 the checkbox is checked', () => {
        checkboxesPage.checkCheckbox1();
        checkboxesPage.checkbox1IsSelected(true);
    });

    it('after unchecking checkbox 2 it is no longer checked', () => {
        checkboxesPage.uncheckCheckbox2();
        checkboxesPage.checkbox2IsSelected(false);
    });

    it('after checking and unchecking checkbox 1 it is no longer checked', () => {
        checkboxesPage.checkCheckbox1();
        checkboxesPage.checkbox1IsSelected(true);
        checkboxesPage.uncheckCheckbox1();
        checkboxesPage.checkbox1IsSelected(false);
    });
});

describe("the internet context menu", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToContextMenu();
    });

    it('after right clicking the box a pop up appears', () => {
        contextMenuPage.contextMenuAppearsAfterBoxIsClicked();
    });
});

describe("the internet dropdown", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToDropdown();
    });

    it('when the page load the states, "please select an option"', () => {
        dropdownPage.pageIsLoaded('Please select an option');
    });

    it('when option 1 is chosen the dropdown has text, "option 1"', () => {
        dropdownPage.selectOptionInDropdown(1);
        dropdownPage.pageIsLoaded('Option 1');
    });

    it('when option 2 is chosen the dropdown has text, "option 2"', () => {
        dropdownPage.selectOptionInDropdown(2);
        dropdownPage.pageIsLoaded('Option 2');
    });
});

describe("the internet dynamic loading", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToDynamicLoading();
    });

    it('2 links are shown when opening the page', () => {
        dynamicLoadingPage.linksAreVisible();
    });

    it('start button is shown when navigating to the hidden element page', () => {
        dynamicLoadingPage.clickLinkHiddenElement();
        dynamicLoadingPage.startButtonIsVisible();
    });

    it('start button is shown when navigating to the rendered element page', () => {
        dynamicLoadingPage.clickLinkRenderedElement();
        dynamicLoadingPage.startButtonIsVisible();
    });

    it('on the hidden element page the hello world component is shown when start button is clicked', () => {
        dynamicLoadingPage.clickLinkHiddenElement();
        dynamicLoadingPage.clickStartButton();
        cy.wait(2000);
        dynamicLoadingPage.helloWorldFieldIsVisible();
    });

    it('on the rendered element page the hello world component is shown when start button is clicked', () => {
        dynamicLoadingPage.clickLinkRenderedElement();
        dynamicLoadingPage.clickStartButton();
        cy.wait(2000);
        dynamicLoadingPage.helloWorldFieldIsVisible();
    });
});

describe("the internet dynamic controls", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToDynamicControls();
    });

    it('checkbox is shown on the page', () => {
        dynamicControlsPage.checkboxIsVisible();
    });

    it('checkbox can be checked', () => {
        dynamicControlsPage.checkCheckbox();
        dynamicControlsPage.checkboxIsSelected(true);
    });

    it('checkbox can be unchecked after being selected', () => {
        dynamicControlsPage.checkCheckbox();
        dynamicControlsPage.checkboxIsSelected(true);
        dynamicControlsPage.unCheckCheckbox();
        dynamicControlsPage.checkboxIsSelected(false);
    });

    it('checkbox is removed after clicking the remove button', () => {
        dynamicControlsPage.clickDeleteCheckboxButton();
        cy.wait(2000);
        dynamicControlsPage.checkboxIsNotVisible();
    });

    it('checkbox is added again after clicking the add button when deleted', () => {
        dynamicControlsPage.clickDeleteCheckboxButton();
        cy.wait(2000);
        dynamicControlsPage.checkboxIsNotVisible();
        dynamicControlsPage.clickDeleteCheckboxButton();
        cy.wait(2000);
        dynamicControlsPage.checkboxIsVisible();
    });

    it('the inputfield is disabled on load', () => {
        dynamicControlsPage.inputFieldIsEnabled(false);
    });

    it('the inputfield is visible on load', () => {
        dynamicControlsPage.inputFieldIsEnabled();
    });

    it('the inputfield is enabled after clicking enable', () => {
        dynamicControlsPage.clickEnableButton();
        cy.wait(2000);
        dynamicControlsPage.inputFieldIsEnabled();
    });
});

describe("the internet forgot password", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToForgotPassword();
    });

    it('input and button is loaded when page is loaded', () => {
        forgotPasswordPage.pageIsLoaded();
    });

    it('the emailfield can be filled in', () => {
        forgotPasswordPage.typeInInputField('test@test.be');
        forgotPasswordPage.inPutFieldHasText('test@test.be');
    });

});

describe("the internet inputs", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToInputs();
    });

    it('input field is visible when loaded', () => {
        inputsPage.inputFieldIsVisible();
    });

    it('input field can be filled in', () => {
        inputsPage.filInInputField(10);
        inputsPage.inputFieldHasValue(10);
    });

});

describe("the internet dynamic content", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToDynamicContent();
    });

    it('the page is loaded when navigated to', () => {
        dynamicContentsPage.textFieldContainsText('To make some of the content static append');
    });

});

describe("the internet geolocation", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToGeoLocation();
    });

    it('where am i button is visible when loaded', () => {
        geoLocationPage.whereAmIButtonIsVisible();
    });
});

describe("the internet redirectors", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("https://the-internet.herokuapp.com/");
        homePage.goToRedirectors();
    });

    it('page is loaded after navigating to', () => {
        redirectorsPage.textFieldContainsText('This is separate from directly returning a redirection status code');
    });
    
    it('redirect page is loaded when redirect link is clicked', () => {
        redirectorsPage.clickRedirectLink();
        cy.contains('HTTP status codes are a standard set of numbers used to communicate from a web server to your browser to indicate the outcome of the request being made');
    });
});
