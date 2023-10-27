## Conditionals and Loops
- Daily decisions are based on conditions, whether something is true or false, ranging from simple choices like clothing to more complex ones.
- JavaScript uses conditional statements like if and else to execute code conditionally based on whether a condition is true or false.
- The if statement checks a condition and executes a code block if the condition is true.
- Comparison operators like equal to, greater than, less than, and not equal to are used to evaluate conditions.
- The if-else statement is used to handle two possible outcomes based on the condition. If it's true, one code block is executed; if it's false, another code block is executed.
- A practical example of if-else is presented with a driving test scenario where passing or failing is determined by a score greater or less than 40.
- To handle more complex conditions or scenarios, you can use the else-if statement.
- Conditional statements are fundamental tools in JavaScript programming and are essential to master.

### If and switch
Conditional Statements:

Used to run code based on whether a condition is true or false.
Example: Using an if statement to check if a number is greater than 40.
```javascript
let result = 50;

if (result > 40) {
  console.log("You passed the test");
} else {
  console.log("You did not pass the test");
}
```
- Else If Statements:

Used when you have multiple conditions to check.
Example: Checking different values of a variable using else if.
```javascript
Copy code
let place = "first";

if (place === "first") {
  console.log("Gold");
} else if (place === "second") {
  console.log("Silver");
} else if (place === "third") {
  console.log("Bronze");
} else {
  console.log("No medal");
}
```
- Switch Statements:

Used to streamline multiple conditions.
Example: Using a switch statement to check values of a variable.
```javascript
let place = "first";

switch (place) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No medal");
}
```
The switch statement is more concise and efficient when you have multiple conditions to check.