// Fetches all characters from the API
export const fullAotCharactersList = async () => {
  try {
    // Fetch data for all characters
    const response = await fetch("https://api.attackontitanapi.com/characters");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the fetched data
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetches details of a single character based on character number
export const fetchCharacter = async (characterNumber) => {
  try {
    // Fetch data for a specific character
    const response = await fetch(
      `https://api.attackontitanapi.com/characters/${characterNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the character data
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetches characters from a specific page (pagination)
export async function fetchCharactersFromPage(pageNumber) {
  try {
    // Fetch data for characters from a given page number
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=${pageNumber}`
    );
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the characters data
  } catch (error) {
    console.error("Error fetching the next page:", error);
  }
}

// Fetches a specific episode by its episode number
export const fetchEpisode = async (episodeNumber) => {
  try {
    // Fetch data for a specific episode
    const response = await fetch(
      `https://api.attackontitanapi.com/episodes/${episodeNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the episode data
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetches all military organizations from the API, including their images
export const militaryImgs = async () => {
  try {
    // Fetch data for military organizations
    const response = await fetch(
      "https://api.attackontitanapi.com/organizations"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the military organization data
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetches images for main characters (for example, Eren, Mikasa, Armin)
export const mainCharactersImg = async () => {
  try {
    // Fetch data for main characters' images (from page 10 in this case)
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=10`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the main character image data
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetches all characters from all pages (pages 1-11 combined into one large dataset)
export const fetchAllCharacters = async () => {
  let allCharacters = [];
  try {
    // Loop through all 11 pages of characters
    for (let page = 1; page <= 11; page++) {
      const data = await fetchCharactersFromPage(page); // Fetch data for each page
      allCharacters = allCharacters.concat(data.results); // Combine results into one array
    }
    console.log("All Characters:", allCharacters); // Logs all characters data
    return allCharacters; // Returns all characters combined
  } catch (error) {
    console.error("Error fetching all characters:", error.message);
  }
};

// The search function to find characters by name
export const searchCharacterName = async (name) => {
  try {
    // Fetch all characters to search through
    const allCharacters = await fetchAllCharacters();
    // Filter characters by name
    const filteredCharacters = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filteredCharacters.length > 0) {
      console.log("Filtered Characters:", filteredCharacters); // Logs matching characters
      return filteredCharacters; // Returns filtered list of characters
    } else {
      console.log("No characters found with the name:", name);
      return []; // Return an empty array if no characters are found
    }
  } catch (error) {
    console.error(
      "There was an error searching for the character:",
      error.message
    );
  }
};

// Fetches characters for a specific page for listing purposes
export const characterListPage = async (pageNumber) => {
  try {
    // Fetch data for a specific page of characters
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=${pageNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); // Logs data to console for debugging
    return data; // Returns the character list for the specified page
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};
