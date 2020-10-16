/*
  isAnagram check that a word or phrase formed by rearranging the letters of a different word or phrase, typically 
  using all the original letters exactly once.

  Excersice gets frome codewars : https://www.codewars.com/kata/529eef7a9194e0cbc1000255

  Parameters:

    original - string
    test - string
    
  Returns a boolean
*/
function isAnagram(original, test) {

  // Parameters must be strings
  if (typeof(original) !== 'string' || typeof(test) !== 'string') {
    return false;
  }
  // Words with different length doesn't are anagrams
  if (original.length !== test.length) {
    return false;
  }

  // Create a flag to validate the words are anagrams
  let flag = true;

  // These variables are to parse the parameters to lowercase and split it into an array
  let original_array = original.toLowerCase().split('');
  let test_array = test.toLowerCase().split('');

  let i = 0;

  // When flag is false, I don't need to check the rest of the letters
  while (i < original_array.length && flag) {

    if (!test_array.some(elem => elem === original_array[i])) {
      flag = false;
    }

    i++;

  }
  return flag;
};

// Some test cases
console.log('foefet', 'toffee', 'should be true', isAnagram('foefet', 'toffee'));
console.log('Buckethead', 'DeathCubeK', 'should be true', isAnagram('Buckethead', 'DeathCubeK'));
console.log('Twoo', 'WooT', 'should be true', isAnagram('Twoo', 'WooT'));
console.log('dumble', 'bumble', 'should be false', isAnagram('dumble', 'bumble'));
console.log('ound', 'round', 'should be false', isAnagram('ound', 'round'));
console.log('apple', 'pale', 'should be false', isAnagram('apple', 'pale'));
console.log('rome', null, 'should be false', isAnagram('rome', null));
console.log('love', 12, 'should be false', isAnagram('love', 12));