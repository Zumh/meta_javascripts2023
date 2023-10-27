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
- Conditional Statements:

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

### Constructing Loops
- Loops:
Used to perform repetitive tasks in JavaScript code.
Loops execute a block of code until a certain condition is satisfied.

- Counter Variable:

A variable that keeps track of the number of iterations in a loop.
- For Loop:

Used to loop a block of code a specific number of times.
Requires a counter variable, a condition, and an increment or decrement step.
Example: Counting from 1 to 3 using a for loop.
```javascript

for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```
- While Loop:

Runs as long as a condition returns true.
Counter variable is set outside the loop, and incrementing is done inside.
Example: Counting from 1 to 3 using a while loop.
```javascript

let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}
```
- Both for and while loops are essential for performing repetitive tasks efficiently in JavaScript.
- The choice between for and while loops depends on your preference and the specific requirements of your code.
- Remember to update the counter value in a loop, or you might create an infinite loop that runs indefinitely.

### For Loop:

Used to automate repetition in JavaScript.
- Counter Variable (i):

Represents the current iteration.
Typically named 'i' for iterator but can have any variable name.

- For-Loop Structure:

Declaration using the for keyword.
Requires the initialization of the counter, an end condition, and an increment or decrement step.
Example: Count from 1 to 3 and say "go" using a for-loop:

```javascript

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("go");
```
- Explanation:

The for loop starts with the declaration, where 'i' is the counter variable, initialized to 1.
The end condition is specified as 'i' being less than or equal to 3, which means the loop will run while 'i' is 1, 2, or 3.
The increment step, i++, increases 'i' by 1 in each iteration.
Result:

The loop iterates three times, printing values 1, 2, and 3 to the console.
After the loop, "go" is printed to indicate the completion of the count.
- Customization:

You can modify the loop for different counting ranges, such as from 10 to 1 or any other range you desire.
By adjusting the counter initialization, end condition, and the increment or decrement step, you can achieve different counting patterns.
- Important Note:

Ensure that the loop has an exit condition to prevent it from running indefinitely, and specify when the loop should terminate. In the example, the loop terminates when 'i' is greater than 3, meaning after the count from 1 to 3, the loop exits.
