export const fullAotCharactersList = async () => {
  try {
    const response = await fetch("https://api.attackontitanapi.com/characters");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetch for single character info
export const fetchCharacter = async (characterNumber) => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters/${characterNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetch all characters from a specific page
export async function fetchCharactersFromPage(pageNumber) {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=${pageNumber}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching the next page:", error);
  }
}

// Fetch specific episode info
export const fetchEpisode = async (episodeNumber) => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/episodes/${episodeNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetch military organization images
export const militaryImgs = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/organizations"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Fetch main characters image (page 10)
export const mainCharactersImg = async () => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=10`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// the original fetch only has only get the first 20 characters,
//  going to make a fetch for all 11 pages and make one big function at the end to access all the pages and characters.

// this is a fetch for the search bar

// export const searchCharacterName = async (name) => {
//   try {
//     const response = await fetch(
//       `https://api.attackontitanapi.com/characters?name${name}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };
// fetch for the list
export const characterListPageOne = async () => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=2`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

export const characterListPageTwo = async () => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=5`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

export const characterListPageThree = async () => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=10`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};
