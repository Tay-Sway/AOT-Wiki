import { aotCharAsyncAwait, fetchEpisode } from "./fetch-helpers";

const main = () => {
  aotCharAsyncAwait();
  fetchEpisode(1);
};
main();
