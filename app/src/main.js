// this is importing(retrieve the code) all of the function made in fetch-helpers.js
import {
  fullAotCharactersList,
  fetchEpisode,
  militaryImgs,
  mainCharactersImg,
  characterListPage,
  // fullList,
} from "./fetch-helpers";
//
//
import {
  trainingCadetImg,
  scoutRegimentImg,
  garrisonRegimentImg,
  militaryPoliceImg,
  aaImg,
  maImg,
  eyImg,
  introBio,
  // openTabs,
  // pageOneList,
  // pageTwoList,
  // pageThreeList,
  renderPageList,
} from "./dom-helpers";
//
// Event listeners for the modal
// import { testButton } from "./modal-render-helpers";

//
const main = async () => {
  // fullList();
  mainCharactersImg();
  fullAotCharactersList();
  //aotCharAsyncAwait();
  fetchEpisode(1);
  // list fetch
  // characterListPage(2);
  // characterListPage(5);
  // characterListPage(10);

  // organizationsImg();
  trainingCadetImg();
  // organizationsImg();
  militaryImgs();
  const imageUrl = "path/to/your-image.jpg"; // Ensure the path is correct
  const imageElement = document.querySelector("#some-image-element");

  if (imageElement) {
    imageElement.src = imageUrl;
  } else {
    console.error("Image element not found");
  }

  scoutRegimentImg();
  garrisonRegimentImg();
  militaryPoliceImg();
  aaImg(0);
  maImg(1);
  eyImg(188);
  introBio();
  // testButton();
  // openTabs();

  const firstPage = await characterListPage(2);
  const secondPage = await characterListPage(5);
  const thirdPage = await characterListPage(10);
  renderPageList(firstPage, "pageOneListNames");
  renderPageList(secondPage, "pageTwoListNames");
  renderPageList(thirdPage, "pageThreeListNames");
};

main();
