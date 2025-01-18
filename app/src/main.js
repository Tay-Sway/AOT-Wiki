// this is importing(retrieve the code) all of the function made in fetch-helpers.js
import {
  fullAotCharactersList,
  fetchEpisode,
  militaryImgs,
  mainCharactersImg,
  // fullList,
} from "./fetch-helpers";
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
} from "./dom-helpers";
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
};
main();
