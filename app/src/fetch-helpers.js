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
// this is the fetch for the search bar
// export const searchCharacter = async (name) => {
//   try {
//     const response = await fetch(`https://api.attackontitanapi.com/characters${}`);
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

//
// this fetch is used to access all of the eps in aot
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
// to fetch all the char
// export async function fetchCharactersFromPage(pageNumber) {
//   try {
//     const response = await fetch(
//       `https://api.attackontitanapi.com/characters?page=${pageNumber}`
//     );
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching the next page:", error);
//   }
// }
// this fetch is used to access all of the eps in aot
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
// this a fetch of the api organizations that hold the imgs that will be used for military branches
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
// this fetch is for a pic of eren page 11, = [7]
// find out how u can add fetch that will access all the pages an not just the the first one
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
export const characterListPage = async (pageNumber) => {
  try {
    const response = await fetch(
      `https://api.attackontitanapi.com/characters?page=${pageNumber}`
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
