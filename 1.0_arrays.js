// DSA Arrays

const array = "An array is a data structure used to store multiple elements"

// js Arrays
console.log("***** Arrays *****")
const my_array = [7, 12, 9, 4, 11]
console.log(my_array[0])


// Algorithm: Find The Lowest Value in an Array 
console.log("Algorithm: Find The Lowest Value in an Array.")
console.log("Array : [7, 12, 9, 4, 11]")
console.log("1. Go through the values in the array one by one.")
console.log("2. Check if the current value is lowest so far, and it it is, store it.")
console.log("3. After looking at all the values, the stored value will be the lowest of all values in the array.")

// Implementation
// Time complexity: Proportional or Linear
let minVal = my_array[0]
for (let i of my_array) {
  if (i < minVal) {
    minVal = i
  }
}

console.log("Lowest value: ", minVal)
