## Nested Loops:

Used when you need your code to perform more than one task at the same time, or when multiple tasks need to be executed simultaneously.
In JavaScript, loops can be nested within each other to achieve this.
Multiple levels of nesting are possible, but too many nested loops can lead to performance issues.
- Practical Example of Nested Loops:

Demonstrates a use case of nested loops to create a two-week plan with days and weeks.
The outer loop iterates over weeks (1 and 2), while the inner loop iterates over days (1-5 for each week).
The console.log method is used to output the day and week values.
- Performance Consideration:

Nested loops can be resource-intensive, and the more nested loops there are, the slower the code may run.
Efficient coding is important to maximize resources.
- Displaying Summer Months Example:

Illustrates a nested loop scenario to display summer months (June, July, August) over two years (2023 and 2024).
An outer loop iterates through the years, and an inner loop iterates through the summer months (months 6-8).
console.log is used to output the year and the month.
- Simplifying For Loops:

Suggests using shorter variable names like i and j for loop counters instead of longer, more descriptive names.
Points out that using i and j is a standard practice in the development community for brevity and clarity.
- Efficient Coding:

Emphasizes the importance of writing code efficiently to maximize resources.
Nested loops are useful for automating repetitive tasks, such as sorting numbers from highest to lowest.

## Nested Loops tut
- Nested Loops for Custom Multiplication Table:

Demonstrates the use of nested loops to create a custom multiplication table.
The outer loop's counter variable (firstNum) acts as the first number to be multiplied.
The inner loop's counter variable (secondNum) acts as the second number to be multiplied.
- Output for Single Loop:

Shows the output of a single loop where firstNum ranges from 0 to 1.
Output: 0, 1
- Output for Second Single Loop:

Displays the output of a single loop where secondNum ranges from 0 to 9.
Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Combining Nested Loops:

Combines the first and second loops into nested loops.
Demonstrates how to print the values of both counter variables as the loops progress.
Output: Pairs of values (firstNum, secondNum) ranging from (0, 0) to (1, 9)
Output for Nested Loops with Multiplication:

Updates console.log() to calculate and print the result of multiplication.
Output: Multiplication table showing results for each combination of firstNum and secondNum.
- Custom Division Table:

Shows an example of a custom division table created using nested loops.
Demonstrates nested loops with counter variables i and j.
Output: Division table showing results for various combinations of i and j.
- Encouragement to Experiment:

Encourages experimentation with different combinations of nested loop iterations to explore various outputs.

## Nested Loops:

Used for performing multiple tasks simultaneously or for combinations of tasks.
In JavaScript, loops can be nested within one another.
Example:
```javascript
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```
- Custom Multiplication Table:

Nested loops can create a custom multiplication table.
The outer loop handles the first number, and the inner loop handles the second number.
Example:
```javascript

for (var firstNum = 1; firstNum <= 3; firstNum++) {
    for (var secondNum = 1; secondNum <= 3; secondNum++) {
        console.log(firstNum * secondNum);
    }
}
```
- Output for Single Loop:

Shows the output of a single loop where a variable ranges within a given range.
Example:
```javascript

for (var i = 0; i < 5; i++) {
    console.log(i);
}
```
- Combining Nested Loops:

Demonstrates combining two loops to create a sequence of values.
Example:
```javascript

for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
```
- Output with Multiplication:

Demonstrates updating console.log() to show multiplication results.
Example:
```javascript

for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}
```

- Custom Division Table:

Illustrates the creation of a custom division table using nested loops.
Example:
```javascript

for (var i = 10; i >= 5; i -= 5) {
    for (var j = 2; j <= 5; j++) {
        console.log(i + " / " + j + " = " + i / j);
    }
}
```
- Encouragement to Experiment:

Encourages experimenting with different nested loop combinations for varying outputs.
