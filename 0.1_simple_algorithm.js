// a simple algorithm

// Fibonacci Number
// The Fibonacci numbers are named after a 13th century mathematician known as Fibonacci.
// The two first Fibonacci numbers are 0 and 1, and the next Fibonacci number is always the sum of the
// two previous numbers, so we get 0,1,1,2,3,5,8,13,21, ...

// IMPLEMENTATION USING FOR LOOP
console.log("*****Fibonacci sequence using a for loop(First 20)*****")
console.log("1. Two variables to hold the previous tow Fibonacci numbers.")
console.log("2. A for loop that runs 18 times.")
console.log("3. Create new Fibonacci numbers by adding the two previous ones.")
console.log("4. Print the new Fibonacci number.")
console.log("5. Update the variables that hold the previous Fibonacci numbers.")


let prev2 = 0
let prev1 = 1

console.log(prev2)
console.log(prev1)

for (let i = 0; i < 18; i++) {
  let newFibo = prev1 + prev2
  console.log(newFibo)
  prev2 = prev1
  prev1 = newFibo
}


console.log("*****Fibonacci sequence using recursion*****")
console.log(0)
console.log(1)
var count = 2

function fibonacci(prev1, prev2) {
  if (count <= 19) {
    let newFibo = prev1 + prev2
    console.log(newFibo)
    prev2 = prev1
    prev1 = newFibo
    count += 1
    fibonacci(prev1, prev2)
  } else {
    return
  }
}

fibonacci(1, 0)


// Finding The nth Fibonacci Number Using Recursion
// F(n) = F(n-1) + F(n-2)
console.log("***** Finding the nth Fibonacci Number using Recursion*****")
function F(n) {
  if (n <= 1) {
    return n
  } else {
    return F(n - 1) + F(n - 2)
  }
}

console.log(F(19))
