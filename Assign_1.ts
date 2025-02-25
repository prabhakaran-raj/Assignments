// Exercise 1: 
// Define Typed Arrays
// Define the following arrays with proper types and initialize them with values.

console.log("------------------------------------------------------")
console.log("Exercise 1")
const numbers: number[] = [1,2,3,4];
const strings: String[] =["One","Two","Three"];
const booleans: boolean[]=[true,false]
const mixed:(number|string)[]=[1,2,3,4,"one","two","three"]

console.log("------------------------------------------------------")

// Exercise 2: 
// Array Manipulation
// Perform the following operations on the given array:

// Add "grapes" at the end.
// Remove the first element.
// Insert "pineapple" at index 2.
// Reverse the array.

console.log("Exercise-2")
let fruits: string[] = ["apple", "banana", "mango"];
console.log(fruits)

fruits.push("grapes")
console.log(fruits);

fruits.shift();
console.log(fruits)

fruits.splice(2,0,"pineapple")
console.log(fruits)

fruits.reverse()
console.log(fruits)

console.log("------------------------------------------------------")

// Exercise 3: 
// Map, Filter, and Reduce
// Using the given array, perform the following:

// Create a new array that doubles each number.
// Filter out numbers greater than 50.
// Find the sum of all numbers.
console.log("Exercise-3")
 let data_3: number[] = [10, 20, 30, 40, 50, 60];
 let doubled:number[] =data_3.map(i=>i*2);
 let filtered:number[] =data_3.filter(i=> i>50);
 let sum:number =data_3.reduce((x,y)=>x+y,0);

console.log("Actual Array:",data_3)
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);

console.log("------------------------------------------------------")

// Exercise 4: 
// Find and FindIndex
// Using the given array:

// Find the first number greater than 25.
// Get the index of the number 40.

// let values: number[] = [10, 20, 30, 40, 50];
// let result:number|undefined =values.find(i=>i>25);
// console.log(result)
// let index:number =values.findIndex(i=>i === 40);
// console.log(index)
console.log("Exercise-4")

let values:number[] =[10,20,30,40,50]
let result:number[]=values.filter(i=>i>25)
console.log("Number Greater than 25",result)
let index:number=values.indexOf(40)
console.log("Index of the Number",index)


console.log("------------------------------------------------------")

// Exercise 5: 
// Sorting an Array
// Sort the following array in ascending and descending order.
console.log("Exercise-5")
let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending:number[] =scores.sort((a,b)=> a-b);
console.log("Ascending order:", ascending);
let descending:number[] =scores.sort((a,b)=>b-a)
console.log("Decending order:",descending)

console.log("------------------------------------------------------")

// Exercise 6: 
// Tuple Types
// Create a tuple that holds the following information about a student:

// Name (string)
// Age (number)
// Enrolled (boolean)
// Then, update the age of the student.
console.log("Exercise-6")

let student: [string, number, boolean] = ["John", 21, true];
console.log("Before Update:",student[1]);
student[1] =23
console.log("After Update:",student[1]);
console.log("------------------------------------------------------")

// Exercise 7: 
// Working with includes() and some()
// Given an array of roles, check:

// If "Admin" exists in the array.
// If at least one role starts with "Super".
console.log("Exercise-7")
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin:boolean =roles.indexOf("Admin")!==-1;
let hasSuper: boolean = roles.some(role => role.indexOf("Super") === 0);


console.log("Contains Admin:", hasAdmin);
console.log("Has Super role:", hasSuper);
console.log("------------------------------------------------------")


// Exercise 8: 
// Flattening an Array
// Flatten the following nested array using the flat() method.
// console.log("Exercise-8")
// let nestedArray: (number | number[])[] = [1, [2, 3], 4, [5, 6]];
// let flattenedArray =nestedArray.flat(2);


 //console.log(flattenedArray);
console.log("------------------------------------------------------")

 console.log("Exercise-9")
 
//  Exercise 9:
//  Merging and Removing Duplicates
// Merge the two arrays and remove duplicates.

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let uniqueArray: number[] = [...new Set([...arr1, ...arr2])];

console.log(uniqueArray);

console.log("------------------------------------------------------")

// Exercise 10:
//  Interface with Arrays
// Define an interface Employee with the following properties:

// name (string)
// age (number)
// position (string)
// Then, create an array of employees and filter those older than 30.

interface Employee {
    name: string;
    age: number;
    position: string;
}

// Create an array of employees
let employees: Employee[] = [
    { name: "Alice", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 32, position: "Designer" },
    { name: "David", age: 25, position: "Intern" }
];

// Filter employees older than 30
let filteredEmployees: Employee[] = employees.filter(emp => emp.age > 30);
console.log(filteredEmployees);
// Create an array of employees and filter employees older than 30
console.log("------------------------------------------------------")

