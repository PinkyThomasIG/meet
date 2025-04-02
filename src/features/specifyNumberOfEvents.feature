Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given the user has not set a specific number of events to display
    When the event list is displayed
    Then 32 events should be displayed by default

  Scenario: User can change the number of events displayed
    Given the user is viewing the event list
    When the user specifies a different number of events (e.g., 10)
    Then the event list should update to show the specified number of events