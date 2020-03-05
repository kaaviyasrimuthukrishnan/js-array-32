//Array methods
//For each

//maps
//creates a new array which is  a result of the given condition
//multiplies each value into 10
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newarray);
//output:[650,440,120,40]

//filter
//creates an array filled with all array elements that passes the condition
var ages = [32, 33, 16, 40];
var newarray = ages.filter(checkAdult)
function checkAdult(age) {
  return age >= 18;
}
console.log(newarray)
//output:32,33,40

//include
//determines whether an array contains a specified array
var num = [2,4,6,3,8];
var n = num.includes(8);
console.log(n)
//output:true

//Indexof
//determines whether an array contains a specified array and return its Index
var num = [2,4,6,3,8];
var n = num.indexOf(8);
console.log(n)
//output:4

//findIndex
//creates an array filled with all array elements that passes the condition and returns its index
var ages = [3, 10, 18, 20];
var newarray = ages.findIndex(checkAdult)
function checkAdult(age) {
  return age >= 18;
}
console.log(newarray)
//output:2

//find
//eturns the value of the first element in an array that pass a condition
var ages = [3, 10, 18, 20];
var newarray = ages.find(checkAdult)
function checkAdult(age) {
  return age >= 18;
}
console.log(newarray)
//output:18

//reduce



//slice
//slices the given part of the array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus);
//output:["orange","lemon"]

//splice
//adds/removes items to/from an array, and returns the removed item
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.splice(1, 3);
console.log(citrus);
//output:["orange","lemon","apple"]

//sort
//sorts the items of an array.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.sort();
console.log(citrus);
//output:["Apple", "Banana", "Lemon", "Mango", "Orange"]

//reverse
//reverse the array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.reverse();
console.log(citrus);
//output:["Mango", "Apple", "Lemon", "Orange", "Banana"]

//concat
//merges two array
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);
//output:["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

//pop
//removes last element in Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);
//output:console.log(children);

//push
//adds a new element to the Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)
//output:["Banana", "Orange", "Apple", "Mango", "Kiwi"]

