
## Functions in JavaScript:

Functions in JavaScript are like sets of stored instructions that can be executed repeatedly.
They help avoid repetition in code, following the DRY (Don't Repeat Yourself) principle.

- Function Declaration:

A function is declared using the function keyword, followed by a name for the function.
You can name functions almost anything.
The function is defined within curly braces, and this is known as the function's body.
Example:

```javascript

function addTwoNums() {
    // Function body
    // Code to add two numbers goes here
}
```
- Calling or Invoking a Function:

To execute the code inside a function, you need to call or invoke the function by using its name followed by parentheses.
Example:

```javascript

addTwoNums(); // Calls the function addTwoNums and executes its code
```
- Function Parameters:

Functions can accept parameters, which act like variable names that can be assigned values when the function is called.
Parameters make functions more flexible and reusable because you can pass different values to them.
Example:

```javascript

function addNumbers(a, b) {
    // a and b are parameters, and you can pass values to them
    return a + b;
}
```
- Function Arguments:

The values you pass to a function's parameters are called arguments.
Arguments are used to provide specific values to a function when it's called.
Example:

```javascript

let result = addNumbers(10, 20); // 10 and 20 are arguments passed to the function
```

- Benefits of Functions:

Functions help you write more efficient, reusable, and organized code.
They allow you to group related actions together and call them whenever needed with different arguments.
Example:

```javascript
Copy code
let result1 = addNumbers(10, 20);
let result2 = addNumbers(5, 7);
// You can call the same function with different arguments to perform different calculations.
```
- Functions in JavaScript provide a way to structure your code, make it more efficient, and avoid repeating the same logic. By using parameters and arguments, you can create versatile functions that can work with various values, making your code more flexible and adaptable.