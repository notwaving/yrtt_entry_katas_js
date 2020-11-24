// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str) {
  // split the given phrase into an array of words
  let wordArray = str.split(' ');
  return (
    wordArray
      // For each word in the array...
      .map(function (word) {
        // Identify the first letter
        let firstLetter = word.charAt(0);

        // Identify punctuation, remove it from the word and store in a variable
        // let punctuation = punctuation.replace(//[\s|\.]+$/i, ''/)

        // Return each word, starting at the 2nd letter, then add the first letter, plus 'ay'
        return word.slice(1) + firstLetter + 'ay';
      })
      // Convert this back into a string
      .join(' ')
  );
}

module.exports = {
  pigLatin,
};
