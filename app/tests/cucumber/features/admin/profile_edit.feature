Feature: Edit profile

  As a user
  I want to edit my profile information
  So that it is displayed in the business card of my page

  Background:
    Given I sign up
    And I navigate to "/"
    And I log in
    Then take screenshot

  Scenario: Create profile
    When I navigate to "/admin"
    Then I should see "Create a new profile"
    And I should see "Choose your URL:"
    When I select the url "carlosbaraza"
    And I click on "Start the magic"

  Scenario: Edit profile
    When I navigate to "/admin"
    And I update my name with "Juan Baraza"
    And I navigate to "/"
    Then I should see the card name "JUAN BARAZA"
