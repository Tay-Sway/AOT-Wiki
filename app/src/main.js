import { aotCharAsyncAwait, fetchEpisode, militaryImgs } from "./fetch-helpers";
import {
  trainingCadetImg,
  scoutRegimentImg,
  garrisonRegimentImg,
  militaryPoliceImg,
} from "./dom-helpers";
const main = () => {
  aotCharAsyncAwait();
  fetchEpisode(1);
  trainingCadetImg();
  // organizationsImg();
  militaryImgs();
  scoutRegimentImg();
  garrisonRegimentImg();
  militaryPoliceImg();
};
main();
