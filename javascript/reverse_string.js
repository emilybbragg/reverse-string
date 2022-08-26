function reverseString(str) {
  let reverse = "";
    for (let i = str.length -1; i> -1; --i) {
      reverse = reverse + stri[i];
    };
    return reverse;
}



//function receives argument of a string
//split each string into individual letters = empty array
//loop through each letter to reverse order
//display each reversed string

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
