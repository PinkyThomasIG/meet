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

- **Scenario 1:** Event details are hidden by default.
  **Given** the user is viewing the event list;
  **When** the app loads;
  **Then** each event should display only the title, date, and location.

- **Scenario 2:** Expand event details on user interaction.
  **Given** the user is viewing an event in the list;
  **When** the user clicks/show on the event;
  **Then** the event should expand to show additional details.

- **Scenario 3:** Collapse expanded event details.
  **Given** an event is expanded;
  **When** the user clicks/taps on the event again;
  **Then** the details should collapse.

- **Scenario 4:** Only one event should expand at a time.
  **Given** an event is already expanded;
  **When** the user expands a different event;
  **Then** the previously expanded event should collapse.

### 3. Specify Number of Events

- **Scenario 1:** Default number of events is displayed when app loads.
  **Given** the user opens the app for the first time;
  **When** the event list is displayed;
  **Then** the default number of events (e.g., 20) should be shown.

- **Scenario 2:** User can change the number of displayed events.
  **Given** the user is viewing the event list;
  **When** the user selects a number (e.g., 10) from a dropdown or input field;
  **Then** the event list should update to show only the selected number of events.

- **Scenario 3:** The number of events updates dynamically.
  **Given** the user has selected 10 events;
  **When** the user changes the selection to 20;
  **Then** the event list should immediately update.

### 4. Use the App When Offline

- **Scenario 1:** Display cached events when offline.
  **Given** the user is offline;
  **When** the user opens the app;
  **Then** the app should display previously fetched events from cache.

- **Scenario 2:** Show an offline indicator..
  **Given** the user has lost internet connectivity;
  **When** the app attempts to fetch new data;
  **Then** an "Offline Mode" message should appear.

### 5. Add an App Shortcut to the Home Screen

- **Scenario 1:** Prompt user to install the app.
  **Given** the user is visiting the PWA in a compatible browser;
  **When** the app detects installation is possible;
  **Then** the user should see an "Add to Home Screen" prompt.

- **Scenario 2**: Install the PWA successfully.
  **Given** the user clicks "Add to Home Screen";
  **When** the installation process is completed;
  **Then** the app should be available as an icon on the user's home screen.

- **Scenario 3:** Open the app from the home screen.
  **Given** the app is installed on the home screen;
  **When** the user taps the app icon;
  **Then** the app should open in fullscreen mode without the browser UI.

### 6. Display Charts Visualizing Event Details

- **Scenario 1:** Show a loading state before charts appear.
  **Given** the user is viewing the statistics page;
  **When** the app fetches data;
  **Then** a loading indicator should be displayed until the charts are ready.

- **Scenario 2:** Display a chart of event categories.
  **Given** the user is viewing events;
  **When** the app processes event data;
  **Then** a chart should show the distribution of event categories

- **Scenario 2:** Display a chart of event categories.
  **Given** the user is viewing events;
  **When** the app processes event data;
  **Then** a chart should show the distribution of event categories

- **Scenario 4:** Update charts when event filters change.
  **Given** the user has selected a new city or changed the number of events;
  **When** the event list updates;
  **Then** the chart should also update accordingly.
