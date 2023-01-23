Feature: Rent Car

  Scenario: User search for a car
    Given I go to search page
    When I search for car for rent
      | country | city  | model   | pickupDate | dropOffDate |
      | France  | Paris | Renault | 2023-02-12 |  2023-02-20 |
    Then I see results of search displayed

  Scenario: User see details of car for rent
    Given I go to search page
    When I search for car for rent
      | country | city    | model | pickupDate | dropOffDate |
      | Poland  | Wroclaw | BMW   | 2023-04-11 |  2023-04-19 |
    And I click Rent button on first car on list
    Then I see details of car for rent

  Scenario: User see details of car for rent
    Given I go to search page
    When I search for car for rent
      | country | city    | model | pickupDate | dropOffDate |
      | Poland  | Wroclaw | BMW   | 2023-04-11 |  2023-04-19 |
    And I click Rent button on first car on list
    And I click Rent! button
    And I type all needed information to rent a car
      | name  | lastName | card      | email                   |
      | Henry | Main     | 983635344 | Henry.Main@somemail.com |
    And I click Rent Button
    Then I see confirmation of my rental
