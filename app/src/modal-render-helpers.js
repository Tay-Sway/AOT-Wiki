// export const testButton = () => {
//   document
//     .querySelector("#main-characters")
//     .addEventListener("click", async (event) => {
//       console.log(event);

//       if (!event.target.matches(".more-info-btn")) {
//         return;
//       }

//       console.log(event.target.dataset.characterId);

//       const characterData = await fetchCharacter(
//         event.target.dataset.characterId
//       );

//       let charInfo = document.querySelector("#selected-character-modal-info");
//       charInfo.textContent = `${characterData.name}, ${characterData.alias},${characterData.age},${characterData.status},${characterData.occupation},${characterData.roles}, ${characterData.episodes[0]} `;

//       let modal = document.querySelector("#selected-character-modal");
//       modal.showModal();
//     });
// };
