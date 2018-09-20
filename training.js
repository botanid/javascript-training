// This script is to introduce the core javascript concepts...
// namely js variables, arrays and objects

// Javascript variables:

/*

JavaScript variables are containers to store data values.
The values stored are of different types. For example:

Boolean type
Numeric types
String types
Array type
Object types
Global scope
Local scope
/*
Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the var keyword
*/

// Declaration example

var waterLevel;
//console.log(waterLevel);
// After the declaration the variable has no value, to assign a value to the variable:

waterLevel = 200;

//console.log(waterLevel);

// You can also assign a value to the variable upon Declaration

var watertankId = 1;

// You can declare more than one variable on one line of code by separating each variable with a comma:

var cityName = "Pretoria", waterSource = "The Fountains",waterUsage = 50000, waterRestrictions = "none";

// Boolean types
console.log('Illustrate string inside &{cityName} now');
/* Brief Description
A JavaScript Boolean represents one of two values: true or false. You can use a Boolean() function to findout if an expression or variable is true:
Example:
*/

var booleanResult = Boolean (watertankId == 1) // This returns true
//console.log(booleanResult);

Boolean (waterLevel > 250) // This returns false



// Numeric Types

/* Brief Description
JavaScript has only one type of number. Numbers can be written with or without decimals.
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
Examples:
*/

var totalWaterUsage = 999999999999999; // The total water level will be 999999999999999
console.log(totalWaterUsage);


console.log(Infinity);

// String Types

/* Brief Description
A JavaScript string is zero or more characters written inside quotes. You can use single or double quotes to represent a string.
You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
The variables cityName, waterSourceand waterRestrictions declared in line 40 are examples of strings.
Examples:
*/

var differentQuotesExample = "He is called 'Morney'";

//string concatenation

var waterInformation = "Water source of " + cityName + " is " + waterSource;

//console.log(waterInformation);



// JavaScript Arrays

/* Brief Description
Like Objects, Arrays are cnsidered complex data types. n JavaScript, all Arrays are untyped, so you can put everything you want in an Array and worry about that later.
Arrays are objects, they have methods and properties you can use to access, modify and learn about their properties, like the length os a given array.
Examples:
*/

// Declaration

var allWatertankId = new Array(1, 2, 3, 4, 5); // Array with all posible water tank IDs

console.log(allWatertankId.length); // Retrieving the arrays length using built in array method 'length'

//Arrays can also be created using square brackets and variable names instead of values

var waterInformationArray = ['Water source of ', cityName, 'is', waterSource]; // array of strings
console.log(waterInformationArray);

console.log(waterInformation.trim());
// You can access specific array elements using their position within the arrays, the first position being 0 and the last being (arraySize - 1)

//console.log(allWatertankId[1]); // the output is 2 in this case since it's the value at position 1.

// Thus far we were dealing with single dimensional arrays, it is also possible to create and work with multidimensional arrays.
// Multidimensional arrays are basically arrays in which each element is also an array, example:

combineLocationWatertankId = [['Sunnyside'],['Hatfield',3],['Arcadia',1],['Hillcrest',2]]; // an array mapping a location to the water tank used.

console.log(combineLocationWatertankId[0][1]); //The output here will be Sunnyside and water tank id 1. Since we are refering to the first array element in our multidimensional array

console.log(combineLocationWatertankId[1][0]); // The output here is Hatfield since we are reffering to the first element of the second array element in our multidimentional array.


// JavaScript Objects

/* Brief Description

As mentioned above, Objects are considered as complex data types. Objects are variables too. But objects can contain many values.
Objects are used to store keyed collections of various data and more complex entities.
An object can be created with figure brackets {…} with an optional list of properties.
A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
Examples:
*/

//You define (and create) a JavaScript object with an object literal:
let user = new Object(); // "object constructor" syntax
let locationWatertank = {location: " Sunnyside", // by key "location" and value " Sunnyside"
                         watertankId: 1  // by key "watertankId" and value "1"
                       };

// get fields of the object:
console.log( locationWatertank.location.trim() ); // Sunnyside
console.log( locationWatertank.watertankId ); //1


//adding another key_value pair to the objects

locationWatertank.averageWaterUsage = 1000; //by key "averageWaterUsage" and value "1000"

// get the newly added field
console.log(locationWatertank.averageWaterUsage);
