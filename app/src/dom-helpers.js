import { militaryImgs } from "./fetch-helpers";

const organizations = await militaryImgs();

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
