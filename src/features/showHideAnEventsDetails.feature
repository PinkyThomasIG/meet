Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default
        Given an event element is collapsed by default
        When the event list is displayed
        Then each event should have its details collapsed by default
    
    Scenario: User can expand an event to see details
        Given the user is viewing a list of events
        When the user clicks on an event
        Then the event details should expand and become visible

    Scenario: User can collapse an event to hide details
        Given the user has expanded an event to view its details
        When the user clicks on the event again to collapse it
        Then the event details should be hidden, and only the summary should be visible