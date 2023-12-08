/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    for(let i=0; i<str.length; i++) {
      switch(str[i]) {
        case 'a' : count++; break;
        case 'e' : count++; break;
        case 'i' : count++; break;
        case 'o' : count++; break;
        case 'u' : count++; break;
        case 'A' : count++; break;
        case 'E' : count++; break;
        case 'I' : count++; break;
        case 'O' : count++; break;
        case 'U' : count++; break;
      }
    }
    return count;
}

module.exports = countVowels;