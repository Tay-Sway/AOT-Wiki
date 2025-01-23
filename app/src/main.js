// this is importing(retrieve the code) all of the function made in fetch-helpers.js
import {
  fullAotCharactersList,
  fetchEpisode,
  militaryImgs,
  mainCharactersImg,
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
  // hideModal,
} from "./dom-helpers";
//
// Event listeners for the modal
// import { testButton } from "./modal-render-helpers";

//
const main = () => {
  // fullList();
  mainCharactersImg();
  fullAotCharactersList();
  //aotCharAsyncAwait();
  fetchEpisode(1);
  trainingCadetImg();
  // organizationsImg();
  militaryImgs();
  scoutRegimentImg();
  garrisonRegimentImg();
  militaryPoliceImg();
  aaImg(0);
  maImg(1);
  eyImg(188);
  introBio();
  // testButton();
  hideModal();
};

main();
