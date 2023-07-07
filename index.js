function hasTargetSum(array, target) {
  // Write your algorithm here

  // Pseudocode:
  // 1. Create an empty object to store seen numbers
  // 2. Iterate through the array
  //    - For each number, calculate the complement (target - current number)
  //    - Check if the complement exists in the seen numbers
  //    - If it exists, return true
  //    - If it doesn't exist, add the current number to the seen numbers
  // 3. If the loop completes without finding a pair, return false

  const seen = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seen[complement]) {
      return true;
    }
    seen[array[i]] = true;
  }

  return false;
}

/* 
  Time complexity: O(n), where n is the length of the array.
  The function iterates through the array once, performing constant-time operations for each element.

  Explanation:
  The `hasTargetSum` function uses a hash table (object) to keep track of seen numbers. It iterates through the array, calculating the complement for each number and checking if the complement exists in the hash table. If the complement is found, it means there is a pair of numbers that sums up to the target. If the loop completes without finding a pair, it means there is no such pair in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
