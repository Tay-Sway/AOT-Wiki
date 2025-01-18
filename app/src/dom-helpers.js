import {
  fullAotCharactersList,
  militaryImgs,
  mainCharactersImg,
  //   fullList,
} from "./fetch-helpers";

const organizations = await militaryImgs();
// these functions are being made to display the images of the main Military branches
export const trainingCadetImg = () => {
  const cadetImg = document.querySelector("#training-cadet-img");
  const url = organizations.results[2].img;
  let fixedUrl = url.split("/revision")[0];
  cadetImg.src = fixedUrl;
};

export const scoutRegimentImg = () => {
  const scoutImg = document.querySelector("#scout-img");
  const url = organizations.results[3].img;
  let fixedUrl = url.split("/revision")[0];
  scoutImg.src = fixedUrl;
};

export const garrisonRegimentImg = () => {
  const garrisonImg = document.querySelector("#garrison-img");
  const url = organizations.results[9].img;
  let fixedUrl = url.split("/revision")[0];
  garrisonImg.src = fixedUrl;
};

export const militaryPoliceImg = () => {
  const mpImg = document.querySelector("#police-img");
  const url = organizations.results[14].img;
  let fixedUrl = url.split("/revision")[0];
  mpImg.src = fixedUrl;
};
//
// these functions are going to be displaying the images of the main characters of aot , eren, armin, mikasa
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

export const introBio = () => {
  const page = document.querySelector("#bio");
  page.textContent =
    " Welcome to Attack on Titan Wiki. All of the most important facts you need to know about the show!";
};
