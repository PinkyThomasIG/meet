## Project Overview

This project aims to build a **serverless, progressive web application (PWA)** using **React**.  
The development follows a **test-driven development (TDD)** approach, and the application integrates with the **Google Calendar API** to fetch upcoming events.

---

## Key Features:

- **Filter Events by City**
- **Show/Hide Event Details**
- **Specify Number of Events**
- **Use the App When Offline**
- **Add an App Shortcut to the Home Screen**
- **Display Charts Visualizing Event Details**

---

## Technical Requirements:

- The app must be a **React** application.
- The app must be built using the **TDD technique**.
- The app must use the **Google Calendar API** and **OAuth2 authentication flow**.
- The app must use **serverless functions** (**AWS Lambda is preferred**) for the authorization server instead of using a traditional server.
- The app’s code must be hosted in a **Git repository on GitHub**.
- The app must work on the latest versions of **Chrome, Firefox, Safari, Edge, and Opera**, as well as on **IE11**.
- The app must display well on all screen sizes, including **mobile and tablet**, with widths ranging from **320px to 1920px**.
- The app must pass **Lighthouse’s PWA checklist**.
- The app must work **offline** or in slow network conditions using a **service worker**.
- Users must be able to **install the app on desktop** and **add the app to their home screen** on mobile.
- The app must be **deployed on GitHub Pages**.
- The app must implement an **alert system using an OOP approach** to show information to the user.
- The app must include **data visualization**.
- The app must have **test coverage of at least 90%**.
- The app must be **monitored using an online performance monitoring tool**.

---

## User Stories and Scenarios

### 1. Filter Events by City

- **Scenario 1:** When user hasn’t searched for a specific city, show upcoming events from all cities.
  **Given** user hasn’t searched for any city;
  **When** the user opens the app;  
   **Then** Then the user should see a list of upcoming events.

- **Scenario 2:** User should see a list of suggestions when they search for a city.
  **Given** the main page is open;
  **When** When user starts typing in the city textbox;
  **Then** Then the user should receive a list of cities (suggestions) that match what they’ve typed.

- **Scenario 3:** User can select a city from the suggested list.
  **Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
  **When** the user selects a city (e.g., “Berlin, Germany”) from the list;
  **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### 2. Show/Hide Event Details

- **Scenario 1:** An event element is collapsed by default
  **Given** An event element is collapsed by default
  **When** the event list is displayed
  **Then** each event should have its details collapsed by default

- **Scenario 2:**User can expand an event to see details
  **Given** User can expand an event to see details
  **When** the user clicks on an event
  **Then** the event details should expand and become visible

### 3. Specify Number of Events

- **Scenario 1:** When user hasn’t specified a number, 32 events are shown by default
  **Given** the user has not set a specific number of events to display
  **When** the event list is displayed;
  **Then** 32 events should be displayed by default

- **Scenario 2:** User can change the number of events displayed
  **Given** the user is viewing the event list
  **When** the user specifies a different number of events (e.g., 10)
  **Then** the event list should update to show the specified number of events

### 4. Use the App When Offline

- **Scenario 1:** Show cached data when there’s no internet connection
  **Given** the user has previously loaded events while online
  **When** the user opens the app without an internet connection
  **Then** the app should display the last cached events

- **Scenario 2:** Show error when user changes search settings (city, number of events)
  **Given** the user is offline
  **When** the user tries to change the search settings (e.g., city or number of events)
  **Then** the app should display an error message indicating that changes cannot be made while offline

### 5. Add an App Shortcut to the Home Screen

- **Scenario 1:** User can install the meet app as a shortcut on their device home screen
  **Given** the user is using a compatible browser or device
  **When** the user selects the option to add the app shortcut to the home screen
  **Then**the app should be added as a shortcut on the user's home screen

### 6. Display Charts Visualizing Event Details

- **Scenario 1:** Show a chart with the number of upcoming events in each city
  **Given** the user is viewing the event list
  **When** the app loads the event data
  **Then** a chart should be displayed showing the number of upcoming events for each city
