// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable
var firstName = prompt("What is your First Name?");

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable
var lastName = prompt("What is your Last Name?");

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"
var completeName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 
var characterCount = completeName.length

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."
alert("The String \"" + completeName + "\"  is " + characterCount + " characters long.");










