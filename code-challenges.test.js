// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  // it("returns a string that says hi", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi")
//   })
// })

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

describe("div3", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    expect(div3(num1)).toEqual("15 is divisible by three")
    expect(div3(num2)).toEqual("0 is divisible by three")
    expect(div3(num3)).toEqual("-7 is not divisible by three")
  })
})
//RED ACQUIRED

// b) Create the function that makes the test pass.

//PSEUDOCODE
//Create a function named div3 with the parameter of iCantBelieveItsNotArgument
//div3 should have a conditional statement where the if the value modulo three has an output that strictly equals zero, it should return the statement with the original variable being interpolated into a string
//A simple else as a catchall should suffice for all other cases where  the modulo operator returns something other than zero.
//Log each variable as an argument of the function.

const div3 = (iCantBelieveItsNotArgument) => {
  if (iCantBelieveItsNotArgument % 3 === 0) {
    return `${iCantBelieveItsNotArgument} is divisible by three`
  } else {
    return `${iCantBelieveItsNotArgument} is not divisible by three`
  }
}
//GREEN ACQUIRED

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capFirst", () => {
  it("takes in an array of word strings and returns an array with the first letter of each word capitalized", () => {
    expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
//RED ACQUIRED

// b) Create the function that makes the test pass.

//PSEUDOCODE
//So, after hearing of my peers reaching out to the instructors, I've discovered that the desired output isn't ALL CAPS like it may seem, but the actual expected outputs listed where the first letter of each string is capitalized.
//I'll start with a function called "capFirst" that passes a parameter of (array)
//I'll use .map to iterate through the array using value as the only argument
//The I'll perform a function on that value that uses charAt to operate on the first index of every string.
//I'll concatenate the uppercase first letter back onto an appropriately sliced version of its original word.

const capFirst = (array) => {
  return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}
//GREEN ACQUIRED

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelSniper", () => {
  it("creates a function that takes in a string and logs the index of the first vowel", () => {
    expect(vowelSniper(vowelTester1)).toEqual(1)
    expect(vowelSniper(vowelTester2)).toEqual(0)
    expect(vowelSniper(vowelTester3)).toEqual(2)
  })
})
//RED ACQUIRED

// b) Create the function that makes the test pass.

//PSEUDOCODE
//Create a function called vowelSniper that passes a parameter of string
//Create a for loop to iterate through the length of the string
//Make a conditional occur at every letter that uses the logical OR operator for every a, e, i, o, and u.
//If the value returns true for any of the vowels, return the current index

const vowelSniper = (string) => {
  for(let i=0; i<string.length; i++){
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
      return i
    }
  }
}
//GREEN ACQUIRED
