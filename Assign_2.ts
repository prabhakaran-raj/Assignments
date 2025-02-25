
//Exercise -1

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = arr1.concat(arr2);
console.log(combined);  
console.log("----------------------------------------------------------")


//Exercise -2

let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];

let nameFinal =names1.concat(names2,names3)
console.log(nameFinal)
console.log("----------------------------------------------------------")


//Exercise -3
console.log("Exercise-3")
// let arr1_3 = [true, false];
// let arr2_3 = ["Yes", "No"];
// let arr3_3 = arr1_3.concat(arr2_3, [1, 2, 3]);
// console.log(arr3_3);
console.log("----------------------------------------------------------")

// let numbers_3 = [10, 20, 30, 40, 50];
// numbers.copyWithin(0, 3);  
// console.log(numbers);

console.log("----------------------------------------------------------")

//Exercise -4
console.log("Exercise-4")

// let numbers_4 = [10, 20, 30, 40, 50];

// numbers_4.copyWithin(0, 3);  
// console.log(numbers_4); 

console.log("----------------------------------------------------------")

//Exercise -5
console.log("Exercise-5")

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// fruits.copyWithin(1, 3, 5);
// console.log(fruits);

console.log("----------------------------------------------------------")

//Exercise -6
console.log("Exercise-6")

let arr_6 = [1, 2, 3, 4, 5, 6];

arr_6.copyWithin(0, 2);  
console.log(arr_6);

console.log("----------------------------------------------------------")

//Exercise -7
console.log("Exercise-7")

let numbers = [2, 4, 6, 8, 10];

let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); 

console.log("----------------------------------------------------------")

//Exercise -8
console.log("Exercise-8")

let words = ["apple", "banana", "avocado"];

let result = words.every(word => word.startsWith("a"));
console.log(result); 

console.log("----------------------------------------------------------")

//Exercise -9
console.log("Exercise-9")

function areAllPositive(nums: number[]): boolean {
    return nums.every(num => num > 0);
}

console.log(areAllPositive([1, 2, 3]));  
console.log(areAllPositive([1, -2, 3]))

console.log("----------------------------------------------------------")

//Exercise -10
console.log("Exercise-10")

// let arr_10 = [1, 2, 3, 4, 5];

// arr_10.fill(0);
// console.log(arr_10)
console.log("----------------------------------------------------------")


//Exercise -11

console.log("Exercise-11")

// let arr_11 = ["A", "B", "C", "D", "E"];

// arr_11.fill("X", 1, 4);
// console.log(arr_11);

console.log("----------------------------------------------------------")


//Exercise -12
console.log("Exercise-12")
// let status_12 = ["pending", "pending", "pending", "pending", "pending"];

// status_12.fill("done", 2);
// console.log(status_12);

console.log("----------------------------------------------------------")

