/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
window.generateCard = generateCard;
