
const { I } = inject();

module.exports = {
    locators: {
        userNameInput: '#user-name',
        passwordInput: '#password',
        submitBtn: '#login-button',
        error: '[data-test=error]',
        userNameContainer: '.login_credentials',
        passwordContainer: '.login_password'
    },
    async login (id) {
        let usernames = await I.executeScript (function(el) {
            return document.querySelector(el).innerHTML
                   .toString().replace('<h4>Accepted usernames are:</h4>', '')
                   .split('<br>');
          }, this.locators.userNameContainer);

        I.fillField(this.locators.userNameInput, usernames[id]);

        let password = await I.executeScript (function(el) {
            return document.querySelector(el).innerHTML
                   .toString().replace('<h4>Password for all users:</h4>', '')
                   .split('<br>');
          }, this.locators.passwordContainer);
    
        I.fillField(this.locators.passwordInput, password[0]);
        I.forceClick(this.locators.submitBtn);
    }
}

