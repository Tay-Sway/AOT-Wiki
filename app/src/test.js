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
