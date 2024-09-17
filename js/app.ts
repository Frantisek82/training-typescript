const square = (number: number) => {
  return number * number;
};

// console.log(square(2));
// Annotación de tipo primitivo

let user: string = "John";
let num: number = 11;
let isActive: boolean = true;

// Tipificación inferida
let hello = "world";

// Anotación de tipos de array
const heroes: string[] = ["Thor", "Hulk", "Iron Man", "Doctor Strange"];
const numbers: number[] = [1, 2, 3];

// Anotación de tipos de función
let sayHello: (greeting: string) => string;
sayHello = (greet) => `Hello ${greet}`;

// Anotación de tipo objeto
let hero: {
  character: string;
  powers: string[];
};
hero = {
  character: "Thor",
  powers: [
    "Uru-forged hammer Mjolnir",
    "superhuman strength",
    "speed",
    "endurance and resistance to injury",
  ],
};

// Interface

interface heroInterface {
  character: string;
  powers: string[];
}

const Hulk: heroInterface = {
  character: "Bruce Banner",
  powers: ["Incredible super human strength", "durability", "Healing factor"],
};

// Alias de tipo

type seriesType = {
  title: string;
  mainCharacter: string;
  seasons: number;
};

const series1: seriesType = {
  title: "Mr Robot",
  mainCharacter: "Elliot Alderson",
  seasons: 4,
};

const series2: seriesType = {
  title: "Invincible",
  mainCharacter: "Mark Gryson",
  seasons: 2,
};

// Interfaces como tipos

interface Login<U, P> {
  user: U;
  password: P;
}

let user1: Login<string, string> = {
  user: "Joe",
  password: "abcd",
};
let user2: Login<string, number> = {
  user: "Joe",
  password: 1234,
};

// Tipos enumerados

enum Sizes {
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
}
let pulloverSize = Sizes.MEDIUM;

// Tipado dinamico

let password: any = "abcd";
password = 1234;
password = [];

let password2: unknown = true;
password2 = 1234;
// let password3 = password2 + 123
let password3 = password2 + "true";

// console.log(typeof password3);
// // console.log(password3);

// Uniones, Intersections, Tipos Literales
interface Bear {
  weight: number;
  color: string;
}
interface Tiger {
  weight: number;
  speed: number;
}
interface Lion {
  strength: string;
  speed: number;
}

let word: number | string;
word = 1234;
word = "abcd";

let animal: Bear = {
  weight: 200,
  color: "white",
};

let animal2: Bear | Tiger;
animal2 = {
  weight: 250,
  speed: 50,
};
animal2 = {
  weight: 150,
  color: "pink",
  speed: 69,
};

let animal3: Bear | (Tiger & Lion);
animal3 = {
  weight: 300,
  color: "brown",
  speed: 150,
  strength: "max",
};

hello = undefined;
console.log(typeof hello);
hello = null;
console.log(typeof hello);

const sayHello2 = (greet: string = "Luis"): void => {
  console.log("Hello " + greet);
};

sayHello2();
sayHello2("Dani");

const retornoInalcanzable = (): never => {
  throw TypeError("Something went wrong");
};

const retornoInalcanzable2 = (number: number): never => {
  while (true) {
    console.log(number++);
  }
};
