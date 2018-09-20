// This file handles the overall flow of the program

var setup = require('/Users/daniel/Project/Training/setupFunctions.js'); // getting the script file containing the functions to be used
var modify = require('/Users/daniel/Project/Training/modifyFunctions.js'); // getting the script file containing the functions to be used

// Firstly looking at numeric types:
console.log();
console.log();
console.log("Illustration of numeric type variables: ");
console.log()

console.log("Creating a variable in JavaScript is called 'declaring' a variable.You declare a JavaScript variable with the 'var' or 'let' keyword");
console.log("All numeric variables, integers and floats, are known as Numeric types and are declared the same ");

console.log()
var numericArray = setup.numericDeclaration(); //calling the funcion "numericDeclaration" from the setupFunctions file

console.log("Here are variables declared thus far: waterLevel, watertankId, averageUsage, monthlyWaterUsage ");
console.log(numericArray[0], numericArray[1], numericArray[2], numericArray[3], numericArray[4], numericArray[5]);

console.log("The first element is undefined since it wasn't assigned a value ");
console.log()

//Assigning it a value;

numericArray[0] = 25;

eg = numericArray[2];
console.log(typeof eg);

console.log();

console.log("After assigning the waterLevel a value we have: ")
console.log(numericArray[0], numericArray[1], numericArray[2], numericArray[3], numericArray[4]);
console.log()

// Numeric types can only take up to 15 digits, illustration:

console.log("For a variable having a 15 digits value the variables value stays the same ");
//
// //console.log("Total water usage: " + numericArray[4]);
// //console.log();
//
// //console.log("For a variable value having more than 15 digits its value is incremented by 1 : ");
// //console.log("Total water level of 999999999999999999 becomes: " + numericArray[5]);
//
// console.log();
// console.log();
//
// console.log("Illustration of String type varuables. ");
//
// console.log();
//
// var stringArray = setup.stringDeclaration(); // calling the "stringDeclaration" function from the setupFunctions file
//
// console.log("String variable, like numeric variables, are primitive variables that contains one value. A String is zero or more characters written inside quotes ");
// console.log("You can use single or double quotes to represent a String. You can use quotes inside a string, as long as they don't match the quotes surrounding the string. ")
//
// console.log("Examples of string variables cityName, waterSource and waterRestrictions: ");
// console.log("City: " + stringArray[0] + " Water source: " + stringArray[1] + " Water restrictions: " + stringArray[2] );
//
// // You can use quotes inside a string, as long as they don't match the quotes surrounding the string. Or one uses whitespace property
// console.log();
// console.log("Using quotes inside a string variable example: " + stringArray[3]);
//
// // String concatenation is used to join/merge two or more strings/string variables together
// console.log();
//
// console.log("String concatenation example: " + stringArray[4]);
// console.log();
// console.log();
//
// var arrayVariablesArray = setup.arrayDeclaration(); // calling the "arrayDeclaration" function from the setupFunctions file
//
// console.log("An illustration of Array types: ");
//
// console.log();
// console.log("Like Objects, Arrays are cnsidered complex data types. In JavaScript, all Arrays are untyped, so you can put everything you want in an Array and worry about that later.");
// console.log("Arrays are objects, they have methods and properties you can use to access, modify and learn about their properties, like the length os a given array.");
//
// console.log();
//
// console.log("Here is the length of our array: ");
// console.log(allWatertankId.length); // Retrieving the arrays length using built in array method 'length'
// console.log("The second element in the array is : " + allWatertankId[1]);
//
// console.log();
//
// console.log();
//
// console.log("Display all array elements ");
// console.log(waterInformationArray);
// console.log("Display specific array element using its position ");
// console.log(waterInformationArray[1]);
//
// console.log();
// // There are numerous methods and properties used to view, manipulate, insert and delete array elements, here's an illustration of one:
//
// // The slice() method returns the selected elements in an array, as a new array object.
// console.log("The slice method illustration ");
// console.log(slicedArray);
console.log();
//
// // Multidimensional Arrays
//
// console.log("Multidimensional arrays are basically arrays in which each element is also an array, example: ");
//
// console.log();
// console.log("An example of a multidimensional array: " + )
// console.log("The output of the first array element ")
// console.log(combineLocationWatertankId[0]); //The output here will be Sunnyside and water tank id 1. Since we are refering to the first array element in our multidimensional array
// console.log("The output of the first element in the second array element ")
// console.log(combineLocationWatertankId[1][0]); // The output here is Hatfield since we are reffering to the first element of the second array element in our multidimentional array.
//
// console.log("An illustration of Boolean types: ");
// console.log();
//
// setup.booleanDeclaration();
// console.log();
// console.log();
//
// console.log("An illustration of Object types: ");
// console.log();
//
// setup.objectDeclaration();
// console.log();
// console.log();
//
// console.log("An illustration of how we can modify variables using functions: ");
// console.log();
//
// console.log();
//
// var numericInput = 15555; // test variable
//
// console.log("The numeric input is: " + numericInput);
//
// console.log("After modification the input is: " + modify.multiplyByTwo(numericInput)); //calling the "multiplyByTwo" function from the modifyFunctions file
// console.log();
// console.log();
//
// var initialString = "For all that's worth "; // test string
//
// console.log("The initial string input is: " + initialString);
// console.log("After modification the resultant string is: " + modify.appendToEndString(initialString)); //calling the "appendToEndString" function from the modifyFunctions file
// console.log();

// For our array of objects array:
console.log("Here is how our array of objects looks like: ");

//for (i = 0; i < 3; i++)
//{
console.log(setup.arrayOfObjects);
//}

var cloneOfArrayObjects = JSON.parse(JSON.stringify(setup.arrayOfObjects));

console.log();

console.log(typeof cloneOfArrayObjects);

for (i = 0; i < 3; i++)
{
  setup.arrayOfObjects[i].reading = modify.multiplyByTwo(setup.arrayOfObjects[i].reading);

}
console.log();
console.log("After multiplying the reading values by two: ");
console.log();

//for (i = 0; i < 3; i++)
//{
console.log(setup.arrayOfObjects);
//}

console.log();

console.log("Here is my original array: ");

//for (i = 0; i < 3; i++)
//{
console.log(cloneOfArrayObjects);
//}

console.log();

// Appending the string "-this is a test " string to the "name" values

for (i = 0; i < 3; i++)
{
  cloneOfArrayObjects[i].name = modify.appendToEndString(cloneOfArrayObjects[i].name);
}

console.log("After appending the string: ");

console.log(cloneOfArrayObjects);
