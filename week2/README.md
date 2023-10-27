
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