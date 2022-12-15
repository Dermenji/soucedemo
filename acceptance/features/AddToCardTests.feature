Feature: Add to card Tests

    Background: 
        Given I open app
        And  I set credentials 'standard_user' and 'secret_sauce'
        Then I am logged in

    Scenario: add to cart functionality
        When I sort by 'lohi'
        And I add to cart product 'Sauce Labs Bike Light' from products list
        And I add to cart product 'Sauce Labs Onesie' from products list
        And I open product 'Test.allTheThings() T-Shirt (Red)'
        And I add to cart from PDP
        When I open cart
        Then I see 'Sauce Labs Bike Light' in cart
        Then I see 'Sauce Labs Onesie' in cart
        Then I see 'Test.allTheThings() T-Shirt (Red)' in cart
        And I remove 'Test.allTheThings() T-Shirt (Red)' from cart
        And I press chechout
        When I set firstName 'Alex' lastName '' and zip ''
        Then I see error message 'Error: Last Name is required'
        When I set firstName 'Alex' lastName 'Dermenji' and zip '9020'
        Then I see total '19.42'
        When I press finish
        Then I see current url 'https://www.saucedemo.com/checkout-complete.html'


