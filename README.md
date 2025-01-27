# Attack on Titan Wiki Project

This project displays information from the Attack on Titan API, including character data, episode info, and military regiments. It’s built with HTML, CSS, and JavaScript, with data fetched using API calls.

## Files Overview

### `fetch-helpers.js`

- Fetches data from the Attack on Titan API using functions like:
  - `fullAotCharactersList()`: Gets all characters.
  - `fetchEpisode()`: Gets episode info.
  - `militaryImgs()`: Gets military organization images.
  - `mainCharactersImg()`: Gets main characters' images.
  - `characterListPage()`: Handles pagination for character lists.

### `dom-helpers.js`

- Manages DOM manipulation to display the fetched data:
  - `trainingCadetImg()`, `scoutRegimentImg()`, etc., display military images.
  - `introBio()`: Renders character bios.
  - `renderPageList()`: Renders character lists from different pages.

### `style.css`

- Provides mobile-first styling for the project:
  - Responsive design for different screen sizes.
  - Sections for main characters, military divisions, and tabs.
  - Basic styling for background, spacing, and layout.

### `main.js`

- Imports functions from the other files and coordinates the data fetching and display:
  - Fetches character, episode, and military data.
  - Calls rendering functions to display the data on the page.

## How it works:

1. **Fetching Data**: API calls fetch data for characters, episodes, and images.
2. **Displaying Data**: Data is displayed on the page using DOM manipulation.
3. **Styling**: The page is styled to be mobile-first and responsive.
4. **Main Script**: `main.js` controls the flow, ensuring everything is fetched and displayed correctly.
