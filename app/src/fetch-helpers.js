// const attackOnTitanFetch = fetch("https://api.attackontitanapi.com/characters");

// attackOnTitanFetch.then((response) => {
//   console.log(response);
// });

export const aotCharAsyncAwait = async () => {
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
// export const fetchEpisode = async (episodeNumber) => {
//   try {
//     const response = await fetch(
//       `https://api.attackontitanapi.com/episodes/${episodeNumber}`
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
