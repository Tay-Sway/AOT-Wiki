import {
  fullAotCharactersList,
  militaryImgs,
  mainCharactersImg,
  fetchCharacter,
  characterListPage,
  fetchEpisode,
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

// Functions to display images of main characters
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
document
  .querySelector("#main-characters")
  .addEventListener("click", async (event) => {
    if (!event.target.matches(".more-info-btn")) return;

    try {
      const characterData = await fetchCharacter(
        event.target.dataset.characterId
      );

      console.log("Character Data:", characterData);

      // Clean up the image URL
      let imgUrl = characterData.img || "https://via.placeholder.com/150";
      imgUrl = imgUrl.split("/revision")[0];

      const charInfo = document.querySelector("#selected-character-modal-info");

      // Function to format the field by replacing commas with spaces
      const formatField = (field) => {
        if (typeof field === "string") {
          return field
            .split(",")
            .map((item) => item.trim())
            .join(", "); // Add spaces after commas
        } else if (Array.isArray(field)) {
          return field.length > 0 ? field.join(", ") : "N/A"; // Ensure spaces after commas
        }
        return "N/A"; // Return "N/A" if field is undefined or null
      };

      // Ensure characterData is not null or undefined
      if (characterData) {
        // Fetch episode name based on the first episode link
        const episodeUrl = characterData.episodes[0]; // Assuming this is a full URL
        let episodeName = "N/A"; // Default value if no episode data is found

        console.log("Episode URL:", episodeUrl);

        if (episodeUrl) {
          const episodeData = await fetchEpisode(episodeUrl); // Use the full URL directly
          console.log("Fetched Episode Data:", episodeData); // Log the fetched episode data
          episodeName =
            episodeData && episodeData.name ? episodeData.name : "N/A"; // Set the episode name if available
        }

        charInfo.innerHTML = `
          <img src="${imgUrl}" alt="${characterData.name} Image" 
          style="width: 350px; height: 350px; object-fit: cover; border-radius: 8px;">
          <p>Name: ${characterData.name}</p>
          <p>Alias: ${formatField(characterData.alias) || "N/A"}</p>
          <p>Age: ${characterData.age || "N/A"}</p>
          <p>Status: ${characterData.status || "N/A"}</p>
          <p>Occupation: ${characterData.occupation || "N/A"}</p>
          <p>Roles: ${formatField(characterData.roles) || "N/A"}</p>
          <p>First Episode: ${episodeName}</p>
        `;
      } else {
        console.error("No character data available.");
      }

      const modal = document.querySelector("#selected-character-modal");
      modal.showModal();
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  });

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

const tabButtons = document.querySelectorAll("button.tabLinks");
tabButtons.forEach((button) => {
  button.addEventListener("click", openTabs);
});

// Event listeners for each military division button
document
  .querySelector("#militaryDivisons")
  .addEventListener("click", (event) => {
    if (!event.target.classList.contains("more-info-btn-military")) return;

    // Get the organization ID from the clicked button
    const organizationId = event.target.dataset.organizationsId;

    // Define organization info based on the ID
    let orgInfo = {};

    switch (organizationId) {
      case "3":
        orgInfo = {
          name: "Training Corps",
          image:
            "https://doctorjhwatson.wordpress.com/wp-content/uploads/2015/02/aot-1-intro.jpg?w=660",
          occupation: "Trainee Soldier",
          affiliation: "Training Corps",
          debut: "Season 1 Episode 3",
          notableMembers: [
            "Eren Yeager",
            "Mikasa Ackermann",
            "Armin Arlert",
            "Reiner Braun",
            "Bertholdt Hoover",
          ],
        };
        break;
      case "15":
        orgInfo = {
          name: "Survey Corps",
          image:
            "https://i.ytimg.com/vi/CRo_dh0yOJ8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBkFaSxwYGDSVFC7nxmVKr96uOzDw",
          occupation: "Surveyor",
          affiliation: "Survey Corps",
          debut: "Season 1 Episode 5",
          notableMembers: [
            "Levi Ackerman",
            "Erwin Smith",
            "Mikasa Ackermann",
            "Jean Kirstein",
            "Erwin Smith",
          ],
        };
        break;
      case "4":
        orgInfo = {
          name: "Garrison Regiment",
          image:
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/1000087522.jpg",
          occupation: "Defender",
          affiliation: "Garrison Regiment",
          debut: "Season 1 Episode 1",
          notableMembers: [
            "Dot Pixis",
            "Kitz Weilman",
            "Keith Shadis",
            "Rico Brzenska",
            "Mitabi Jarnach",
          ],
        };
        break;
      case "10":
        orgInfo = {
          name: "Military Police Brigade",
          image:
            "https://paninigames.com/wp-content/uploads/2019/04/feat-6.png?w=520&h=350&crop=1",
          occupation: "Policeman",
          affiliation: "Military Police",
          debut: "Season 1 Episode 23",
          notableMembers: [
            "Nile Dock",
            "Marlo Freudenberg",
            "Kenny Ackerman",
            "Traute Caven ",
            "Djel Sannes",
          ],
        };
        break;
      default:
        console.error("Unknown organization ID");
        return; // Exit if the ID is not recognized
    }

    const modalContent = document.querySelector(
      "#selected-character-modal-info"
    );
    modalContent.innerHTML = `
      <h2>${orgInfo.name}</h2>
      <img src="${orgInfo.image}" alt="${orgInfo.name}" id="modal-image">
      <p><strong>Occupation:</strong> ${orgInfo.occupation}</p>
      <p><strong>Affiliation:</strong> ${orgInfo.affiliation}</p>
      <p><strong>Debut:</strong> ${orgInfo.debut}</p>
      <p><strong>Notable Members:</strong> ${orgInfo.notableMembers.join(
        ", "
      )}</p>
    `;

    const modal = document.querySelector("#selected-character-modal");
    modal.showModal();
  });

// Close modal functionality
document.querySelector("#close-modal-button").addEventListener("click", () => {
  const modal = document.querySelector("#selected-character-modal");
  modal.close(); // Close the modal
});
