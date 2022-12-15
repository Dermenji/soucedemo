
const { I, LoginPage } = inject();

Given('I set credentials {string} and {string}',  (username, password) => {
    I.fillField(LoginPage.locators.userNameInput, username);
    I.fillField(LoginPage.locators.passwordInput, password);
    I.click(LoginPage.locators.submitBtn);
 });

 Given('I see error message',  () => {
    I.seeElement(LoginPage.locators.error)
 });

 Given('I set correct credentials from list {int} and login', async (id) => {
    await LoginPage.login(id);
 });