
const { I } = inject();

module.exports = {
    locators: {
        firstNameInput: '#first-name',
        lastNameInput: '#last-name',
        zipInput: '#postal-code',
        continueBtn: '#continue',
        errorMessage: "[data-test='error']"
    },
    setinfo (first, last, zip) {
        I.fillField(this.locators.firstNameInput, first);
        I.fillField(this.locators.lastNameInput, last);
        I.fillField(this.locators.zipInput, zip);
        I.click(this.locators.continueBtn);
    }
}

