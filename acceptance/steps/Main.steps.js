
const { I } = inject();
const assert = require('assert');

Given('I open app', () => {
   I.amOnPage('');
});

Then('I am logged in',  async () => {
    await I.waitForElement('#react-burger-menu-btn', 10);
 });

 Then('I sort by {string}', (sort) => {
    I.selectOption('.product_sort_container', sort);
});

Then('I add to cart product {string} from products list', (product) => {
   I.click("//*[text()='" + product + "']/../../..//*[text()='Add to cart']");
});

Then('I open product {string}', (product) => {
   I.click(product);
});

Then('I add to cart from PDP', (product) => {
   I.click("[data-test^='add-to-cart']");
});

Then('I open cart', () => {
   I.click('.shopping_cart_container');
});

Then('I see {string} in cart', (product) => {
   I.see(product, '.cart_item');
});

Then('I see {string} in cart', (product) => {
   I.see(product, '.cart_item');
});

Then('I remove {string} from cart', (product) => {
   I.click("//*[text()='" + product + "']/../..//*[text()='Remove']");
});

Then('I press chechout', () => {
   I.click('#checkout');
});

Then('I see total {string}', (price) => {
   I.see(price, '.summary_total_label');
});

When('I press finish', () => {
   I.click('#finish');
});

Then('I see current url {string}', async (current) => {
   let url = await I.grabCurrentUrl();
   assert.equal(url, current);
});

