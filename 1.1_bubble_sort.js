// Bubble Sort

const bubble_sort = "Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value."

console.log("***** Bubble Sort *****")
console.log("Array: [64, 34, 25, 12, 22, 11, 90, 5]")
console.log("1. Go through the array, one value at a time.")
console.log("2. For each value, compare the value with the next value.")
console.log("3. If the value is higher than the next one, swap the values so that the highest value comes last.")
console.log("4. Go through the array as many times as there are values in the array.")

// Implementation
// Time Complexity: Quadratic O(n^2)
const my_array = [64, 34, 25, 12, 22, 11, 90, 5]

let n = my_array.length
for (let i = 1; i <= (n - 1); i++) {
  for (let j = 0; j <= (n - i - 1); j++) {
    if (my_array[j] > my_array[j + 1]) {
      [my_array[j], my_array[j + 1]] = [my_array[j + 1], my_array[j]]
    }
  }
}

console.log("Sorted array: ", my_array)


// Bubble Sort Improvement
// If the algorithm goes through the array one time without swapping any values,
// the array must be finished sorted, and we can stop it like this
console.log("***** Bubble sort improvement *****")
console.log("This is done by breaking the loop if sorting is complete before iteration.")
console.log("Array: [7, 3, 9, 12, 11]")

const my_array2 = [7, 3, 9, 12, 11]
let n2 = my_array2.length

for (let i = 1; i <= (n2 - 1); i++) {
  let swapped = false
  for (let j = 0; j <= (n2 - i - 1); j++) {
    if (my_array2[j] > my_array2[j + 1]) {
      [my_array2[j], my_array2[j + 1]] = [my_array2[j + 1], my_array2[j]]
      swapped = true
    }
  }
  if (!swapped) {
    break
  }
}

console.log("Sorted array:improved ", my_array2)
