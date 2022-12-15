
const { I, CheckoutInfo} = inject();

Given('I set firstName {string} lastName {string} and zip {string}', (first, last, zip) => {
   CheckoutInfo.setinfo(first, last, zip);
});

Then('I see error message {string}', (message) => {
   I.see(message, CheckoutInfo.locators.errorMessage);
});
