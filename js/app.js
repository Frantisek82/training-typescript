const square = (number) => {
  return number * number;
};
console.log(square(2));

// Annotación de tipo primitivo
let user = "John";
let num = 11;
let isActive = true;

// Tipificación inferida
let hello = "world";

// Anotación de tipos de array
const heroes = ["Thor", "Hulk", "Iron Man", "Doctor Strange"];
const numbers = [1, 2, 3];

// Anotación de tipos de función
let sayHello;
sayHello = (greet) => `Hello ${greet}`;

// Anotación de tipo objeto
let hero;
hero = {
  character: "Thor",
  powers: [
    "Uru-forged hammer Mjolnir",
    "superhuman strength",
    "speed",
    "endurance and resistance to injury",
  ],
};
const Hulk = {
  character: "Bruce Banner",
  powers: ["Incredible super human strength", "durability", "Healing factor"],
};
const series1 = {
  title: "Mr Robot",
  mainCharacter: "Elliot Alderson",
  seasons: 4,
};
const series2 = {
  title: "Invincible",
  mainCharacter: "Mark Gryson",
  seasons: 2,
};
let user1 = {
  user: "Joe",
  password: "abcd",
};
let user2 = {
  user: "Joe",
  password: 1234,
};

// Tipos enumerados
var Sizes;
(function (Sizes) {
  Sizes[(Sizes["SMALL"] = 0)] = "SMALL";
  Sizes[(Sizes["MEDIUM"] = 1)] = "MEDIUM";
  Sizes[(Sizes["LARGE"] = 2)] = "LARGE";
  Sizes[(Sizes["X_LARGE"] = 3)] = "X_LARGE";
})(Sizes || (Sizes = {}));
let pulloverSize = Sizes.MEDIUM;

// Tipado dinamico
let password = "abcd";
password = 1234;
password = [];
let password2 = true;
password2 = 1234;
// let password3 = password2 + 123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);
