import {
  fullAotCharactersList,
  militaryImgs,
  mainCharactersImg,
  fetchCharacter,
  characterListPage,
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
// const mainCharacters = await fullAotCharactersList();
// const lastMain = await mainCharactersImg();

export const aaImg = () => {
  const Img = document.querySelector("#armin-arlert-img");
  Img.src =
    "https://static.myfigurecollection.net/upload/entries/1/48285-0e750.jpg"; // Replace with actual static URL
};

export const maImg = () => {
  const Img = document.querySelector("#mikasa-ackermann-img");
  Img.src =
    "https://i.pinimg.com/736x/11/09/f1/1109f10cd6a866a8116a432056c7cb48.jpg"; // Replace with actual static URL
};

export const eyImg = () => {
  const Img = document.querySelector("#eren-yeager-img");
  Img.src =
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/06/eren-smiles-in-attack-on-titan.jpg"; // Replace with actual static URL
};

// Placeholder function for intro bio (currently inactive)
export const introBio = () => {
  const page = document.querySelector("#bio");
};

// Event listener for Main Characters button
// Event listener for Main Characters button
document
  .querySelector("#main-characters")
  .addEventListener("click", async (event) => {
    if (!event.target.matches(".more-info-btn")) return;

    const characterData = await fetchCharacter(
      event.target.dataset.characterId
    );

    // Log the character data to check if img URL is present
    console.log(characterData);

    // Clean up the image URL
    let imgUrl = characterData.img || "https://via.placeholder.com/150"; // Use a placeholder if img is not found
    imgUrl = imgUrl.split("/revision")[0]; // Removing the revision part from the URL

    const charInfo = document.querySelector("#selected-character-modal-info");
    charInfo.innerHTML = `
    <p>Name: ${characterData.name}</p>
    <p>Alias: ${characterData.alias}</p>
    <p>Age: ${characterData.age}</p>
    <p>Status: ${characterData.status}</p>
    <p>Occupation: ${characterData.occupation}</p>
    <p>Roles: ${characterData.roles}</p>
    <p>First Episode: ${characterData.episodes[0]}</p>
    <img src="${imgUrl}" alt="${characterData.name} Image" style="width: 100%; height: auto; border-radius: 8px;">
  `;

    let modal = document.querySelector("#selected-character-modal");
    modal.showModal();
  });

// Event listener for Military Branches button
document
  .querySelector("#militaryDivisons")
  .addEventListener("click", async (event) => {
    if (!event.target.matches(".more-info-btn-military")) return;

    const characterData = await militaryImgs();
    for (let i = 0; i < characterData.results.length; i++) {
      if (event.target.dataset.organizationsId == characterData.results[i].id) {
        let charInfo = document.querySelector("#selected-character-modal-info");
        charInfo.textContent = `${characterData.results[i].name}, ${characterData.results[i].occupations}, ${characterData.results[i].affiliation}, ${characterData.results[i].debut}`;
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
          const charInfo = document.querySelector(
            "#selected-character-modal-info"
          );
          charInfo.textContent = `${characterData.name}, ${characterData.alias}, ${characterData.age}, ${characterData.status}, ${characterData.occupation}, ${characterData.roles}, ${characterData.episodes[0]}`;

          const modal = document.querySelector("#selected-character-modal");
          modal.showModal();

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

// Modal close functionality
const closeModalButton = document.querySelector("#close-modal-button");
closeModalButton.addEventListener("click", () => {
  const modal = document.querySelector("dialog");
  modal.close(); // Close the modal
});

// Function to render character list pages
export const renderPageList = (pageData, pageListElementId) => {
  const pageList = document.getElementById(pageListElementId);
  for (let i = 0; i < pageData.results.length; i++) {
    let createLi = document.createElement("li");
    createLi.textContent = pageData.results[i].name;

    pageList.append(createLi);
  }
};

// Tab navigation functionality
export const openTabs = (event) => {
  const tabName = event.target.id;
  const pageName = `page${tabName.slice(3)}`;
  let tabContent = document.getElementsByClassName("tabContent");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  let tabLinks = document.getElementsByClassName("tabLinks");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "block";
  event.currentTarget.className += " active";
};

// Event listeners for opening the tabs
const tabButtons = document.querySelectorAll("button.tabLinks");
tabButtons.forEach((button) => {
  button.addEventListener("click", openTabs);
});
