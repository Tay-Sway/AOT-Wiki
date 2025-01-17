import { militaryImgs } from "./fetch-helpers";

const organizations = await militaryImgs();

export const trainingCadetImg = () => {
  const cadetImg = document.querySelector("#training-cadet");
  const url = organizations.results[2].img;
  let fixedUrl = url.split("/revision")[0];
  cadetImg.src = fixedUrl;
};

// const scoutRegimentImg = () => {
//   const scoutImg = document.querySelector("");
// };
