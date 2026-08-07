// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// Function to calculate the sum
function getSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// Function to calculate the average
function getAverage(numbers) {
    return getSum(numbers) / numbers.length;
}

// Function to find the minimum value
function getMinimum(numbers) {
    return Math.min(...numbers);
}

// Function to find the maximum value
function getMaximum(numbers) {
    return Math.max(...numbers);
}

// Read numbers from the user
let input = prompt("Enter numbers separated by commas:");
let numbers = input.split(",").map(Number);

// Display the statistical values
console.log("Numbers:", numbers);
console.log("Sum:", getSum(numbers));
console.log("Average:", getAverage(numbers));
console.log("Minimum:", getMinimum(numbers));
console.log("Maximum:", getMaximum(numbers));
// and computes key statistical values using separate functions

// =============================================================================


