/**
Darle funcionalidad al boton
@param {Number} 
@returns {null}
@throws {}
 */

const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}