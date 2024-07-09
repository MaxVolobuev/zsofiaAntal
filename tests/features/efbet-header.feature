Feature: Efbet Header Navigation

  Scenario: Check left navigation tabs
    Given I navigate to the "Sport" tab on the header page
    Then I should see the following left navigation tabs:
      | Program           |
      | My Favourites     |
      | Top Events        |
      | Euro 2024         |
      | Copa America 2024 |
      | Wimbledon         |
      | Tennis            |
      | Basketball        |
      | Volleyball        |
      | Handball          |
      | Darts             |
      | Snooker           |
      | Boxing/MMA        |
      | American football |
      | Aussie rules      |
      | Baseball          |
      | Rugby             |
      | ESport            |
      