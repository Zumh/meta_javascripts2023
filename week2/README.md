
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