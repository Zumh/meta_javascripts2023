
## Functions in JavaScript:

### Arrays and Function combine
- Function Declaration:

Functions in JavaScript are declared using the function keyword.
A function can accept parameters (input values) that are specified in the function's declaration.
Example:

```javascript

function listArrayItems(arr) {
    // Function body
    // Code to be added here
}
```
- For Loop in Functions:

You can use a for loop within a function to iterate through an array.
The loop counter variable i is initialized to 0 and is used to access array elements.
The loop continues as long as i is less than arr.length.
Example:

```javascript

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Code to process array items
    }
}
```
- Accessing Array Elements:

Array elements can be accessed using the loop counter i to specify the index.
You can use console.log to display the array items.
Example:

```javascript

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]); // Display array items
    }
}
```
- Customizing Output:

You can customize the output by adding information to each item displayed.
For example, you can display item numbers alongside array items.
Example:

```javascript

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i]); // Display item numbers and array items
    }
}
```
- Control Flow within Functions:

Functions can incorporate control flow, such as conditional statements, based on array values.
You can conditionally modify the output based on the values in the array.
Example:

```javascript
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'red') {
            console.log(i * 100, 'tomato!');
        } else {
            console.log(i * 100, arr[i]);
        }
    }
}
```
By building and calling functions, you can create reusable code that processes arrays, displays array items, and incorporates conditional logic to modify the output as needed. Functions allow for organized and efficient code that can be used for various tasks.

## Objects
- Object Literals and the Dot Notation:

- Object Literal Syntax:

One common way to build objects in JavaScript is by using the object literal syntax, which involves curly braces {}.
Example:

```javascript

var user = {}; // Create an object using the object literal syntax
```
- Assigning to Variables:

It's common to assign an object literal to a variable for further manipulation and extension.
Variables provide a reference to the object, allowing you to work with it.
Example:

```javascript

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    // ...
};
```
- Key-Value Pairs:

Object literals can be immediately built by specifying properties and their values using key-value pairs inside the curly braces.
Example:

```javascript

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
};
```
- Accessing Properties:

You can access an object and its properties by console logging the object itself or specific properties using dot notation.
Example:

```javascript

console.log(table); // Display the entire object
console.log(table.color); // Access and display the 'color' property
```
- Building Objects Dynamically:

You can create objects by first saving an empty object literal to a variable and then using the dot notation to declare and assign properties on the fly.
Example:

```javascript

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```
- Combining Approaches:

You can combine both object literal and dot notation approaches to create and update properties of an object.
Example:

```javascript

console.log(house); // Display the object
house.windows = 10; // Add a new property
house.windows = 11; // Update an existing property
```
Object literals and the dot notation provide a flexible and readable way to create, manipulate, and extend objects in JavaScript. These tools are commonly used to represent and work with various entities and data structures in your code.

## Brack Notation
- Brackets Notation:

The brackets notation is an alternative syntax to the dot notation for working with objects in JavaScript.
It allows you to use square brackets to access or modify object properties.
Example:

```javascript

house2["rooms"] = 4;
house2['color'] = "pink";
```
- Property Keys as Strings:

In the brackets notation, property keys are treated as strings, so they are enclosed in either single or double quotes.
Property keys are essentially treated as string literals.
Example:

```javascript

car["number of doors"] = 4;
```
- Property Names with Spaces:

Brackets notation allows you to include space characters in property names, which is not possible with dot notation.
Example:

```javascript

car["number of doors"] = 4;
```
- Property Keys as Expressions:

One significant advantage of brackets notation is its ability to evaluate expressions as property keys.
This is useful for dynamically accessing properties based on variable values or iterating through object properties.
Example:

```javascript

var arrOfKeys = ['speed', 'altitude', 'color'];
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}
```

The brackets notation provides flexibility in handling object properties, enabling you to work with dynamic property names and include spaces within property keys. This makes it a valuable tool for various programming scenarios.

## Arrays and Objects:

- Arrays in JavaScript:

Arrays in JavaScript are a type of object. This means that arrays have built-in properties and methods, just like regular objects.
Example:

```javascript

var fruits = [];
```
- push() Method:

The push() method is a common array method used to add new items to the end of an array.
Example:

```javascript

fruits.push("apple"); // ['apple']
fruits.push("pear"); // ['apple', 'pear']
```
- pop() Method:

The pop() method is used to remove the last item from an array.
Example:

```javascript

fruits.pop(); // Removes 'pear' from the array
```
- Building Arrays with Functions:

You can create functions to build arrays by using methods like push() within the function.
Example:

```javascript

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
```
- Returning Arrays from Functions:

Functions can be designed to return the newly built array, which can then be assigned to a variable.
Example:

```javascript

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple', 'pear', 'plum']
```
Arrays in JavaScript are a versatile data structure, and understanding their built-in methods like push() and pop() allows you to manipulate and work with arrays effectively. These methods are useful for adding and removing elements from arrays, and you can use them to build more complex functions and scripts.

## Math object cheat sheet:
JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.
By the end of this reading, you'll be able to:
- Outline the built-in properties and methods of the Math object

### Number constants
Here are some of the built-in number constants that exist on the Math object: 
- The PI number: Math.PI which is approximately 3.14159
- The Euler's constant: Math.E which is approximately 2.718
- The natural logarithm of 2: Math.LN2 which is approximately 0.693

### Rounding methods
These include: 
- Math.ceil() - rounds up to the closest integer 
- Math.floor() - rounds down to the closest integer 
- Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
- Math.trunc() - trims the decimal, leaving only the integer
### Arithmetic and calculus methods
Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 
- Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
- Math.sqrt(16) - calculates the square root of 16, the result is 4 
- Math.cbrt(8) - finds the cube root of 8, the result is 2 
- Math.abs(-10) - returns the absolute value, the result is 10 
- Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
- Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
- Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.

### Math.random() Method:

The Math.random() method allows you to generate a random decimal number between 0 (inclusive) and 1 (exclusive).
To work with a wider range of random numbers, you can multiply the result by the desired range and then use other methods to manipulate it as needed.
Example:

```javascript

var decimal = Math.random(); // Generates a random decimal between 0 and 1
var multiplied = decimal * 10; // Generates a random decimal between 0 and 10
```
- Math.ceil() Method:

The Math.ceil() method is used to round up a decimal number to the nearest integer. It always rounds upwards.
Example:

```javascript

var rounded = Math.ceil(0.0001); // Returns 1
var rounded2 = Math.ceil(1.01); // Returns 2
```
- Combining Math.random() and Math.ceil():

You can combine these methods to generate a random integer within a specific range.
To do this, you first use Math.random() to generate a random decimal and then apply Math.ceil() to round it up.
Example:

```javascript

var randomInteger = Math.ceil(Math.random() * 10); // Generates a random integer between 0 and 10
```
These methods are useful for creating randomness in your JavaScript applications and for performing various calculations and data manipulations. The Math object provides a wide range of mathematical functions and constants, and these two methods are just a couple of examples of how you can use them in your code.

## String 
- Iterables in JavaScript:
An iterable is any data type that can be iterated over using a for...of loop in JavaScript.
-Iterating Over Arrays:
Arrays are common iterables that you can loop through using a for...of loop.

Example: Iterating over an array of vegetables.

Code Example:
```javascript

const veggies = ["onion", "parsley", "carrot"];
for (const veg of veggies) {
    console.log(veg);
}
```
Output: "onion", "parsley", "carrot"

- Strings as Iterables:

In JavaScript, strings behave like arrays, allowing you to iterate over their characters.
Example: Iterating over characters in a string.
Code Example:
```javascript

const greeting = "howdy";
for (const char of greeting) {
    console.log(char);
}
```
Output: "h", "o", "w", "d", "y"
Difference Between Strings and Arrays:

Despite the similar behavior, strings are not arrays, and you cannot use array-specific methods on them.
Example: Attempting to use pop on a string.
Code Example:
```javascript

const greet = "hello";
greet.pop(); // Results in a TypeError
```
Error: "TypeError: greet.pop is not a function"
- String Concatenation:

Strings can be concatenated using the + operator or the concat method.
Example: Concatenating strings using + and concat.
Code Example:
```javascript
const greet = "Hello";
const user = "Lisa";
console.log(greet + " " + user); // Using the + operator
console.log(greet.concat(" ", user)); // Using the concat method
```
Output: "Hello Lisa", "Hello Lisa"

### String cheat sheet
- length:

Returns the number of characters in a string.
Example:
```javascript

var greet = "Hello, ";
greet.length; // 7
```
- charAt(index):

Returns the character at the specified index in the string (zero-based index).
Example:
```javascript

greet.charAt(0); // 'H'
```
- concat(string):

Joins two or more strings together.
Example:
```javascript

"Wo".concat("rl").concat("d"); // 'World'
```
- indexOf(character):

Returns the first occurrence index of the specified character in the string.
Example:
```javascript

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
```
- lastIndexOf(character):

Returns the last occurrence index of the specified character in the string.
Example:
```javascript

"ho-ho-ho".lastIndexOf('o'); // 5
```
- split(separator):

Splits a string into an array of substrings based on the specified separator.
Example:
```javascript

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
```
- toUpperCase():

Converts all characters in the string to uppercase.
Example:
```javascript

greet.toUpperCase(); // "HELLO, "
```
- toLowerCase():

Converts all characters in the string to lowercase.
Example:
```javascript
greet.toLowerCase(); // "hello, "
```