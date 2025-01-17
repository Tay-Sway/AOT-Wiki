import { aotCharAsyncAwait, fetchEpisode, militaryImgs } from "./fetch-helpers";
import { trainingCadetImg } from "./dom-helpers";
const main = () => {
  aotCharAsyncAwait();
  fetchEpisode(1);
  trainingCadetImg();
  // organizationsImg();
  militaryImgs();
};
main();
