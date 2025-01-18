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
// the original fetch only has only get the first 20 characters,
//  going to make a fetch for all 11 pages and make one big function at the end to access all the pages and characters.

// Page 1
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
//
let pageOneData,
  pageTwoData,
  pageThreeData,
  pageFourData,
  pageFiveData,
  pageSixData,
  pageSevenData,
  pageEightData,
  pageNineData,
  pageTenData,
  pageElevenData;

let allChars = [];

const pageOne = async () => {
  try {
    const response = await fetch("https://api.attackontitanapi.com/characters");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Fetched Data:", data);
    allChars.push(...data.results);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 2

const pageTwo = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=2"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Fetched Data:", data);
    allChars.push(...data.results);
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 3

const pageThree = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=3"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageThreeData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 4

const pageFour = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=4"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageFourData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 5
const pageFive = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=5"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageFiveData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 6
const pageSix = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=6"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageSixData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};
// Page 7
const pageSeven = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=7"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageSevenData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};
// Page 8
const pageEight = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=8"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageEightData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};
// Page 9
const pageNine = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=9"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageNineData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 10
const pageTen = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=10"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageTenData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// Page 11
const pageEleven = async () => {
  try {
    const response = await fetch(
      "https://api.attackontitanapi.com/characters?page=11"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
    pageElevenData = data;
    return data;
  } catch (error) {
    console.error("There was an error fetching the data:", error.message);
  }
};

// export const fullList = pageOne["result"].concat(
//   pageTwo["result"],
//   pageThree["result"],
//   pageFour["result"],
//   pageFive["result"],
//   pageSix["result"],
//   pageSeven["result"],
//   pageEight["result"],
//   pageNine["result"],
//   pageTen["result"],
//   pageEleven["result"]
// );

//pageOne(); // because async function, we need to call to have function happen,
//pageTwo(); // the fetch will then update our variables "PageXXXData"
// pageThree(); // then we concat all of the results
// pageFour();
// pageFive();
// pageSix();
// pageSeven();
// pageEight();
// pageNine();
// pageTen();
// pageEleven();
