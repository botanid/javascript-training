function numericDeclaration()
{

  //This function declares then returns numeric type variables

  // Declaration example

  var waterLevel; // If you output the variable's value you'll get 'undefined' since it does not contain a value.

  // You can also assign a value to the variable upon Declaration

  var watertankId = 1;

  var averageUsage = 250.45;

  var monthlyWaterUsage = 50000;

  var totalWaterUsage = 999999999999999;

  // For more than 17 digits:
  var totalWaterLevel = 999999999999999999;

  return [waterLevel, watertankId, averageUsage, monthlyWaterUsage, totalWaterUsage, totalWaterLevel];

}

function stringDeclaration()
{

  // This function declares then returns string data type variables

  var cityName = "Pretoria";

  var waterSource = "The Fountains";

  var waterRestrictions = 'none level 1';

  var differentQuotesExample = "He is called 'Daniel'";

  var waterInformation = "Water source of " + cityName + " is " + waterSource;

  return [cityName, waterSource, waterRestrictions, differentQuotesExample, waterInformation];

}

function arrayDeclaration()
{

  // This function declares then returns array type variables.

  var allWatertankId = new Array(1, 2, 3, 4, 5); // Array with 5 posible water tank IDs
  //Arrays can also be created using square brackets and variable names instead of values
  var waterInformationArray = ['Water source of ', 'Pretoria ', 'is ', 'The Fountains ']; // array of strings


  var slicedArray = waterInformationArray.slice(1, 4);
  //


  // Multidimensional Arrays

  // Multidimensional arrays are basically arrays in which each element is also an array, example:

  combineLocationWatertankId = [['Sunnyside', 1], ['Hatfield', 3], ['Arcadia', 1], ['Hillcrest', 2]]; // an array mapping a location to the water tank used.

  return
}

function booleanDeclaration()
{
  // Boolean types

  /* Brief Description
  A JavaScript Boolean represents one of two values: true or false. You can use a Boolean() function to findout if an expression or variable is true:
  Example:
  */


  var waterLevel = 150;
  var watertankId = 2;
  console.log();
  var booleanResult = Boolean(watertankId == 1) // This returns true
  console.log("The result is: " + booleanResult);

  //This shadows the previous value inside of "booleanResult"

  var booleanResult = Boolean(waterLevel > 250) // This returns false

  console.log("The result is: ");

  //Boolean expressions/variables are commonly used in loops to evaluate if the loop condition is true/false:

  if (watertankId < 3 || waterLevel > 100)
  {
    console.log("There's no possibility of a draught.");
  }

  //In a while loop we have:

  while (watertankId < 5)
  { // shows 2, then 3, then 4
    console.log("The water tank Id is: " + watertankId);
    watertankId++;
  }
}

function objectDeclaration()
{

  /* Brief Description
  Objects are complex data types used to store keyed collections of various data and more complex entities.
  An object can be created with figure brackets {…} with an optional list of properties.
  A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
  */

  // Objects declaration: can be done in one of two always. These are just empty objects declarations

  var ourObject = new Object(); // "object constructor" syntax
  //Or
  var ourObject = {}; // "object literal" syntax

  //console.log(ourObject);

  // Let's then put some values into our object:

  var ourObject = {
    watertankId: 1,
    cityName: 'Pretoria',
    waterLevel: 200111,
    waterRestrictions: 'None',

  }

  console.log(ourObject);

  console.log();
  console.log("Get fields of the object: ");

  console.log("City: " + ourObject.cityName);
  console.log("Water tank Id: " + ourObject.watertankId);
  console.log("Water restrictions: " + ourObject.waterRestrictions);

}

var arrayOfObjects = [
{
  name: 'Pretoria',
  reading: 2000
},
{
  name: 'Johannesburg',
  reading: 2255
},
{
  name: 'Cape Town',
  reading: 1000
}];

module.exports = { //first one is what'll be seen in the calling function
  numericDeclaration: numericDeclaration,
  stringDeclaration: stringDeclaration,
  arrayDeclaration: arrayDeclaration,
  booleanDeclaration: booleanDeclaration,
  objectDeclaration: objectDeclaration,
  arrayOfObjects: arrayOfObjects,

}
