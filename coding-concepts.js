// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.





// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer:
//This will split the string by every individual character, including assigning the space between the two words as its own character.

// b) Verify and explain: From what I've learned by playing around with the split method previously, it splits a string by removing what is stated between the quotation marks and grouping what is on either side. For example, a simple argument wouldbe "" because I see it as removing the tiny space between the letters and defining that as where to split everything, leading to each individual letter being a string. Similarly, putting a space between the quotes in the argument removes the space and would call "Alpha" and "2022" different strings. Even stranger would be if I put "a" in the argument because .split would remove "a" from the string and return "Alph" " 2022" because it was split at the occurrence at the lower case "a".





// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:
// I think it will return an error due to the end of the function not having the necessary return.

// b) Verify and explain:
// So, there isn't an error but it did return undefined because the function ran, but the reason is the same.





// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:
//I don't SEE an error, so I'm hoping that the .map higher-order method will just manipulate the data in the array. Although I don't remember if the value*2 needs to be in a code block outside of the argument. I'm going to assume it isn't. I do remember that .map can take up to three arguments which are value, index, and array in that order, which means the "value" here could be named anything and it will still represent the value at each index.

// b) Verify and explain: So I was right and I received the same sized array with each value being multiplied by two as the higher-order function increments through the indexes of the array.





// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:
// I'm expecting onlyOdds to be modified here but I THINK the date needs to be stored in another variable if it is to be retrieved. I'll say that the output will be the original array and not the filtered items due to not being assigned a value in a new variable.

// b) Verify and explain:
// Unfortunately for me, my second guess was correct, var is mutable and the new filtered data was reassigned to the declaration of onlyOdds and the assignment operator at the beginning.





// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:
// Using dot notation here, the object myCodingSkills is being accessed, followed by the languages key. The 0th index in the array assigned to languages is JavaScript, which will be the returned string.

// b) Verify and explain:
// I was right in the same way I explained. I was worried at first that there might be a missing comma between one of the keys because that mistake has caught me several times before, but I was sure to double check them.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// So, I'm pretty sure "this" isn't used like this, but in case it is, I'd like to hope that in a perfect world  the string George is going to be passed through as an argument to replace the parameter (name) and its occurrence as a value of the first key to the object "constructor". Unfortunately, I think name has to be a method stored within the object for this to happen. Actually, I'm going to change my answer one last time and say the output will be an array of each of the three values of the keys because the dot annotated "this" is using the assignment operator.

// b) Verify and explain:
// So I was partly right. In my final answer, I expected an array, but I was only expecting the values stored in each key, not the keys themselves.
