const square = (number: number) => {
  return number * number;
};

console.log(square(2));
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
