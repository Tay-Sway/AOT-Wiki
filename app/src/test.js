// import { fullList } from "./fetch-helpers.js";
// console.log(fullList);
// <!-- modal test  -->
//       <button id="mybtn">modal</button>

//       <!-- <dialog id="mcPics">
//         <form id="close-modal" aria-label="Close modal" method="dialog">
//           <button>X</button>
//         </form>
//         <div id="testMc">
//           <h2>LEVI</h2>
//           <img
//             src="https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20230309145235"
//             alt="LEVI"
//           />
//         </div>
//         <div id="testMc-Info">
//           <p>L</p>
//           <p>E</p>
//           <p>V</p>
//           <p>I</p>
//         </div>
//       </dialog> -->

//       <!-- modal test ^ -->

// <!-- <section id="walls-of-paradis-island">
//         <h2>Walls of</h2>
//         <div id="wall-maria">maria</div>
//         <div id="wall-rose">rose</div>
//         <div id="wall-sina">sina</div>
//       </section> -->

/* <dialog>
    <button></button>
  </dialog>
  <button></button>
  <body></body> */

// <!-- <section id="walls-of-paradis-island">
//         <h2>Walls of</h2>
//         <div id="wall-maria">maria</div>
//         <div id="wall-rose">rose</div>
//         <div id="wall-sina">sina</div>
//       </section> -->
//       <!-- <section id="Titans"></section> -->
// data-toggle="modal" data-target="#modalOpen"

//xport const eyButton = () => {
//     let btn = document.querySelector("#ey-button");
//     let flag = false;

//     btn.addEventListener("click", () => {
//       let modal = document.querySelector("#selected-character-modal");
//       modal.showModal();

//       let modalInfo = document.querySelector("#selected-character-modal-info");
//       modalInfo.textContent = "eren Y";

//       flag = !flag;
//       console.log(flag);
//       let info = document.querySelector("#ey-info");
//       if (flag === true) {
//         info.style.display = "block";
//       } else {
//         info.style.display = "none";
//       }
//     });
//   };

// export const testModal = document.querySelector("dialog");
// export const showButton = document.querySelector("dialog + button");
// export const closeButton = document.querySelector("dialog button");

// //
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

// event listeners for buttons
//button for eren button

// export const eyButton = () => {
//   let btn = document.querySelector("#ey-button");

//   btn.addEventListener("click", () => {

//     let modalInfo = document.querySelector("#selected-character-modal-info");
//     modalInfo.textContent = "eren Y";
//   });
// };
// // button for mikasa
// export const maButton = () => {
//   let btn = document.querySelector("#ma-button");
//   let flag = false;

//   btn.addEventListener("click", () => {
//     flag = !flag;
//     console.log(flag);
//     let info = document.querySelector("#ma-info");
//     if (flag === true) {
//       info.style.display = "block";
//     } else {
//       info.style.display = "none";
//     }
//   });
// };
// // button for armin
// export const aaButton = () => {
//   let btn = document.querySelector("#aa-button");
//   let flag = false;

//   btn.addEventListener("click", () => {
//     flag = !flag;
//     console.log(flag);
//     let info = document.querySelector("#aa-info");
//     if (flag === true) {
//       info.style.display = "block";
//     } else {
//       info.style.display = "none";
//     }
//   });
// };

// let pageOneData,
//   pageTwoData,
//   pageThreeData,
//   pageFourData,
//   pageFiveData,
//   pageSixData,
//   pageSevenData,
//   pageEightData,
//   pageNineData,
//   pageTenData,
//   pageElevenData;

// let allChars = [];
// Page 1

// const pageOne = async () => {
//   try {
//     const response = await fetch("https://api.attackontitanapi.com/characters");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     // console.log("Fetched Data:", data);
//     allChars.push(...data.results);
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 2

// export const pageTwo = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=2"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 3

// const pageThree = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=3"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageThreeData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 4

// const pageFour = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=4"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageFourData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 5
// const pageFive = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=5"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageFiveData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 6
// const pageSix = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=6"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageSixData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };
// // Page 7
// const pageSeven = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=7"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageSevenData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };
// // Page 8
// const pageEight = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=8"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageEightData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };
// // Page 9
// const pageNine = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=9"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageNineData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 10
// const pageTen = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=10"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageTenData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// // Page 11
// const pageEleven = async () => {
//   try {
//     const response = await fetch(
//       "https://api.attackontitanapi.com/characters?page=11"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//     pageElevenData = data;
//     return data;
//   } catch (error) {
//     console.error("There was an error fetching the data:", error.message);
//   }
// };

// export const fullList = pageOne["result"].concat(
//   pageTwo["result"],
//   pageThree["result"],
//   pageFour["result"],
//   pageFive["result"],
//   pageSix["result"],
//   pageSeven["result"],
//   pageEight["result"],
//   pageNine["result"],
//   pageTen["result"],
//   pageEleven["result"]
// );

//pageOne(); // because async function, we need to call to have function happen,
//pageTwo(); // the fetch will then update our variables "PageXXXData"
// pageThree(); // then we concat all of the results
// pageFour();
// pageFive();
// pageSix();
// pageSeven();
// pageEight();
// pageNine();
// pageTen();
// pageEleven();
