Feature: Brand

  Scenario: User can navigate to a brand's page and the brand shows the correct number of followers

    Given I am on the start page
    When I navigate to the Brands page
    And I select the Børn & Baby category
    And I select the brand Plysdyr.dk
    Then the brand should have 13 followers



