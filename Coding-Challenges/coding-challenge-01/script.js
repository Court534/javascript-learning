// Coding challenge 1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// ยง Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// ยง Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// GOOD LUCK ๐

// Test 1

// let markWeight = 78;
// let markHeight = 1.69;
// let markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);

// let johnWeight = 92;
// let johnHeight = 1.95;
// let johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// // Test 2

// markWeight = 95;
// markHeight = 1.88;
// markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);

// johnWeight = 85;
// johnHeight = 1.76;
// johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// Coding challenge 2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement ๐ GOOD LUCK ๐

let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight / markHeight ** 2;
console.log(markBMI);

let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

if(markBMI > johnBMI) {
   console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`)
} else {
  console.log(`Johns BMi of ${johnBMI} is higher than Marks BMI of ${markBMI}`)
};