import {
  fullAotCharactersList,
  militaryImgs,
  mainCharactersImg,
  fetchCharacter,
} from "./fetch-helpers";

const organizations = await militaryImgs();

// Functions to display images of main military branches
export const trainingCadetImg = () => {
  const cadetImg = document.querySelector("#training-cadet-img");
  const url = organizations.results[2].img;
  let fixedUrl = url.split("/revision")[0];
  cadetImg.src = fixedUrl;
};

export const scoutRegimentImg = () => {
  const scoutImg = document.querySelector("#scout-img");
  const url = organizations.results[14].img;
  let fixedUrl = url.split("/revision")[0];
  scoutImg.src = fixedUrl;
};

export const garrisonRegimentImg = () => {
  const garrisonImg = document.querySelector("#garrison-img");
  const url = organizations.results[3].img;
  let fixedUrl = url.split("/revision")[0];
  garrisonImg.src = fixedUrl;
};

export const militaryPoliceImg = () => {
  const mpImg = document.querySelector("#police-img");
  const url = organizations.results[9].img;
  let fixedUrl = url.split("/revision")[0];
  mpImg.src = fixedUrl;
};

// Functions to display images of main characters (Eren, Mikasa, Armin)
const mainCharacters = await fullAotCharactersList();
const lastMain = await mainCharactersImg();

export const aaImg = () => {
  const Img = document.querySelector("#armin-arlert-img");
  const url = mainCharacters.results[0].img;
  let fixedUrl = url.split("/revision")[0];
  Img.src = fixedUrl;
};

export const maImg = () => {
  const Img = document.querySelector("#mikasa-ackermann-img");
  const url = mainCharacters.results[1].img;
  let fixedUrl = url.split("/revision")[0];
  Img.src = fixedUrl;
};

export const eyImg = () => {
  const Img = document.querySelector("#eren-yeager-img");
  const url = lastMain.results[7].img;
  let fixedUrl = url.split("/revision")[0];
  Img.src = fixedUrl;
};

// Placeholder function for intro bio (currently inactive)
export const introBio = () => {
  const page = document.querySelector("#bio");
};

// Event listener for Main Characters button
document
  .querySelector("#main-characters")
  .addEventListener("click", async (event) => {
    console.log(event);

    if (!event.target.matches(".more-info-btn")) {
      return;
    }

    console.log(event.target.dataset.characterId);

    const characterData = await fetchCharacter(
      event.target.dataset.characterId
    );
    console.log(characterData);

    let charInfo = document.querySelector("#selected-character-modal-info");
    charInfo.textContent = `${characterData.name}, ${characterData.alias},${characterData.age},${characterData.status},${characterData.occupation},${characterData.roles}, ${characterData.episodes[0]} `;

    let modal = document.querySelector("#selected-character-modal");
    modal.showModal();
  });

// Event listener for Military Branches button
document
  .querySelector("#militaryDivisons")
  .addEventListener("click", async (event) => {
    console.log(event);
    if (!event.target.matches(".more-info-btn-military")) {
      return;
    }
    console.log(event.target.dataset.organizationsId);

    const characterData = await militaryImgs();
    console.log(characterData);
    for (let i = 0; i < characterData.results.length; i++) {
      if (event.target.dataset.organizationsId == characterData.results[i].id) {
        let charInfo = document.querySelector("#selected-character-modal-info");
        charInfo.textContent = `${characterData.results[i].name},${characterData.results[i].occupations},${characterData.results[i].affiliation},${characterData.results[i].debut}`;
        break;
      }
    }

    let modal = document.querySelector("#selected-character-modal");
    modal.showModal();
  });

// Search event listener
export const handleSearch = () => {
  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const searchInput = document
      .querySelector("#search-bar")
      .value.toLowerCase();
    const charactersContainer = document.querySelectorAll(".main-character");

    let found = false;

    for (const character of charactersContainer) {
      const charName = character
        .querySelector(".mc-Name")
        .textContent.toLowerCase();

      if (charName.includes(searchInput)) {
        const button = character.querySelector(".more-info-btn");
        const characterId = button.dataset.characterId;

        try {
          const characterData = await fetchCharacter(characterId);
          console.log(characterData);

          // Populate modal with character data
          const charInfo = document.querySelector(
            "#selected-character-modal-info"
          );
          charInfo.textContent = `${characterData.name}, ${characterData.alias}, ${characterData.age}, ${characterData.status}, ${characterData.occupation}, ${characterData.roles}, ${characterData.episodes[0]}`;

          // Show modal
          const modal = document.querySelector("#selected-character-modal");
          modal.showModal(); // Ensure the modal is displayed

          found = true;
          break;
        } catch (error) {
          console.error("Error fetching character data:", error);
          alert("Failed to load character data. Please try again.");
        }
      }
    }

    if (!found) {
      alert("Character not found!");
    }
  });
};

const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // This prevents the page from refreshing
  handleSearch();
});

// document.addEventListener("DOMContentLoaded", () => {
//   // existing functions like handleSearch, etc.

//   // Modal close functionality
const closeModalButton = document.querySelector("#close-modal-button");
closeModalButton.addEventListener("click", () => {
  const modal = document.querySelector("dialog");
  console.log("I was clicked");
  modal.close(); // Close the modal
});

// document.querySelector;

// export const hideModal = (e) => {
//   // console.log("test");
//   document.querySelector("dialog").close();
// };
