/*
Tasks to complete
Create a new empty array literal and assign it to the variable clothes.

Add 5 of your favorite items of clothing as strings using the push() method.

Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

Use the console to log the entire favCar object.*/

let clothes = [];
clothes.push("laptop");
clothes.push("Keyboard");
clothes.push("Book");
clothes.push("Car");
clothes.push("PassPort");

clothes.pop();
clothes.push("Gym");

console.log(clothes[2]);

let favCar = {};

favCar.color = "black";
favCar.covertible = false;

console.log(favCar);