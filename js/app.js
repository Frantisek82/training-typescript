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
