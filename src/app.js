/* eslint-disable */
/* Estas líneas importan las dependencias necesarias, 
incluyendo Bootstrap para estilos, un archivo CSS personalizado y algunas imágenes. */
import "bootstrap"; 
import "./style.css"; 

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* Aquí se definen dos arreglos: 
suits que contiene los palos de las cartas con su color e ícono,
 y values que contiene los valores de las cartas. */

const suits = [    
  { color: "black", icon: "♠" },  
  { color: "red", icon: "♥" },
  { color: "red", icon: "♦" },
  { color: "black", icon: "♣" }
];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
// Esta función genera una carta aleatoria:

//Selecciona un palo y un valor aleatorios.

//Actualiza el contenido de los elementos HTML con los IDs top-left, center y bottom-right para mostrar el valor y el ícono del palo.

//Ajusta las clases CSS de los elementos para aplicar el color correspondiente al palo.
function generateCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  const topleft = document.getElementById("top-left");
  const center = document.getElementById("center");
  const bottonright = document.getElementById("bottom-right");
  topleft.textContent = `${value} ${suit.icon}`;
  center.textContent = suit.icon;
  bottonright.textContent = `${value} ${suit.icon}`;
  topleft.classList.remove("red", "black");
  center.classList.remove("red", "black");
  bottonright.classList.remove("red", "black");
  topleft.classList.add(suit.color);
  center.classList.add(suit.color);
  bottonright.classList.add(suit.color);
}
/* Esto permite que la función generateCard 
sea accesible globalmente, 
por lo que se puede llamar desde cualquier parte del código
 o desde la consola del navegador. */

window.generateCard = generateCard;
