Feature: Efbet Home Page

  Scenario: Navigate to Sport Tab
    Given I navigate to the "Sport" tab on the home page
    Then I should see "Today's Program"

  Scenario: Select a Sport and Euro 2024 tab
    Given I navigate to the "Sport" tab on the home page
    When I click on "Euro 2024"
    Then I should see "Euro 2024"

  Scenario: Check presence of element with text "More..."
    Given I navigate to the "Sport" tab on the home page
    Then I should see "More..."

  Scenario: Select a Sport and Football tab
    Given I navigate to the "Sport" tab on the home page
    When I click on "Football"
    Then I should see "Football"