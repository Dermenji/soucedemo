Feature: Login Tests

    Background: 
        Given I open app

    Scenario Outline: login with incorrect credentials
        And  I set credentials <username> and <password>
        Then I see error message
    
    Examples: 
        |  username       | password                    |
        | 'standard_user' | ''                          |
        | 'standard_user' | ' '                         |
        | 'standard_user' | 'null'                      |
        | 'standard_user' | 'NaN'                       |
        | 'standard_user' | 'undefined'                 | 
        | 'standard_user' | 'secret_sauce_not_correct'  |
        | ''              | 'secret_sauce'              |


    Scenario: can not login with locked user
        And I set correct credentials from list 1 and login
        Then I see error message


    Scenario Outline: login with correct credentials
        And I set correct credentials from list <username> and login
        Then I am logged in

        Examples: 
        |  username  |
        |  0         |
        |  2         |
        |  3         |
