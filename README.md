https://www.coursera.org/professional-certificates/meta-front-end-developer

## Java scripts Basic notes
### History
- JavaScript's origins: Created in 1995 by Brendan Eich in just 10 days for Netscape browser version 2.
- Initial name: Originally called LiveScript, but later renamed to JavaScript for marketing purposes, despite no relation to Java.
- Early use: Initially used for simple interactivity on webpages, such as mouseover effects.
- Scripting in HTML: JavaScript code was added within <script> HTML elements on webpages.
- Growth of JavaScript: Evolved into a powerful language and is now one of the top three commonly used languages.
- ECMA's involvement: In 1996, Netscape partnered with ECMA to draft the JavaScript language specification, leading to the first edition of ECMAScript in 1997 (ECMA-262 standard).
- JavaScript as an implementation: It only exists as an implementation and requires a JavaScript engine to run.
- Traditional browser environment: JavaScript engines were primarily used within browsers to enhance internet usage.
- Interaction with JavaScript engine: Developers write JavaScript code to communicate with a JavaScript engine.
- Browser APIs: JavaScript engines offer ways to interact with other parts of the browser, known as Browser APIs.
- Node.js introduction (2009): Ryan Dahl created Node.js, allowing JavaScript to be used outside of the browser as a standalone program, on the command line, or as a server-side environment.
- JavaScript's ubiquity: JavaScript now runs in browsers, servers, and on various devices with JavaScript engine support.

### Comments in JavaScript

Two types: Single-line comments and Multi-line comments.
Syntax for single-line comments: // this is a comment!
Syntax for multi-line comments:
arduino
Copy code
/*
this
is
a
multi-line
comment
*/
Why Writing Comments is Empowering

Allows you to express ideas about code.
Can be added to existing code for future reference.
Facilitates communication with team members.
Can be used for explanations, questions, marking code as "to do" or "to improve," or for debugging.

### The Semi-colon in JavaScript
Similar to a period in English, used to delimit parts of the code.
Automatic Semi-Colon Insertion (ASI) can fill in missing semi-colons, making them somewhat optional.

### Using the Console in Developer Tools
JavaScript can be executed in the browser's Developer Tools.
Use Google Chrome for this course.
Pressing SHIFT + ENTER allows typing multiple lines of code before running.
Outputting a Greeting in the Console

Use console.log("Hello, World"); to output "Hello, World" in the console.
Can style the output using CSS with %c.
Outputting Multiple Words in the Console

### Join multiple words (+)
Join multiple words using + or use , to separate them in console.log().
These points cover the main concepts discussed in the text. Remember to practice these concepts to solidify your understanding.

## VARIABLES
Efficient Moving Process Analogy:

Sorting items
Packing into boxes
Labeling boxes
Placing boxes in respective rooms
Programming and Data Types Analogy:

Efficient coding = Knowing when/where to use data types
7 Primitive Data Types in JavaScript:
String
Number
Boolean
Null
Undefined
BigInt
Symbol
Strings and Numbers:

Example: E-commerce app for guitars
Name, Description -> String
Price -> Number
Understanding Data:

All values collectively referred to as data
Values need to be stored differently based on their nature
String vs. Number:

Building a number is straightforward
Building a string requires enclosing characters in quotes
Data Storage Capabilities:

Number: Wide range, but limited by JavaScript's calculations
String: Practically unlimited combinations of characters
App Example Data Types:

Price -> Number
Name, Description -> Strings (in double quotes)
Choosing Data Types:

Strings for titles and descriptions
Numbers for values to be calculated
Additional Data Types:

Boolean: True or False (for decisions)
Null: Represents absence of value
Undefined: Refers to unassigned variable
ES6 Introduces New Data Types:

BigInt: Accommodates a greater range of numbers than Number
Symbol: Unique identifier (like serial numbers on boxes)
Final Note:

Understanding when to use each data type is crucial for efficient coding. Knowing the specific use cases of each data type will improve your coding skills.

## Operators
Operators are used to perform operations on variables and values.
They manipulate individual data items and return a result.
Assignment operators are used for simple and complex calculations.
They include addition (+), subtraction (-), division (/), and multiplication (*).
Comparison operators compare values and return a logical value based on the comparison.
Examples include greater than (>), less than (<), equal to (==), and not equal to (!=).
Logical operators determine if something is true or false.
Examples include AND (&&), OR (||), and NOT (!).
Comments in JavaScript are used to specify which lines to ignore.
They are crucial for code readability and documentation.
True and false are special values used in JavaScript for logical comparisons.
Double equals (==) is used for comparison, while a single equal (=) is used for assignment.
Understanding operators is essential for programming in JavaScript.

### Number Operators
No brackets mean following standard mathematical operations.
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Modulus (%)

### String literal
""
''
### Boolean data type
<,>, ==, ===, !=
true || false
only compare value > 100 == "100" > true
strict equal compare type and value > 100 === "100" > false
concatenation operato > +=

### Operator assciatives
There are two kinds: 
    left-to-right associativity

    right-to-left associativity
var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`