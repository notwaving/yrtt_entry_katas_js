// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice.
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr) {
  if (arr === undefined) throw new Error('array is required');
  const newArray = arr
    // Sort first, so we can compare values that are next to each other in the filter method
    .sort()
    // Filter the array for numbers that appear only once
    .filter((number, i) => !(arr[i] == arr[i + 1] || arr[i - 1] == arr[i]));
  // Reduce the result of the filter to find the sum of the results
  let answer = newArray.reduce(function (a, b) {
    return a + b;
  }, 0);
  return answer;
}

module.exports = {
  singles,
};
