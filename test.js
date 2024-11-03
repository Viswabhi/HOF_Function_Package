// testArrayExtensions.js
const {
    product,
    removeElements,
    filterGreaterThan,
    allUnique,
    average,
    toTitleCase,
    zipArrays,
    reverseInPlace,
    intersection,
    removeFalsyValues
  } = require('./index');
  
  // Test cases
  
  // Test 1: Calculate the product of all elements in an array
  console.log("Product of [2, 3, 4]:", product([2, 3, 4])); // Expected: 24
  
  // Test 2: Remove elements from an array that match a specific value
  console.log("Remove 3 from [1, 3, 5, 3, 7]:", removeElements([1, 3, 5, 3, 7], 3)); // Expected: [1, 5, 7]
  
  // Test 3: Filter out numbers greater than a specified threshold from an array
  console.log("Filter numbers <= 4 from [1, 2, 5, 4, 6]:", filterGreaterThan([1, 2, 5, 4, 6], 4)); // Expected: [1, 2, 4]
  
  // Test 4: Check if all elements in the array are unique
  console.log("Are all elements unique in [1, 2, 3, 4]?:", allUnique([1, 2, 3, 4])); // Expected: true
  console.log("Are all elements unique in [1, 2, 2, 4]?:", allUnique([1, 2, 2, 4])); // Expected: false
  
  // Test 5: Find the average of numbers in an array
  console.log("Average of [2, 4, 6, 8]:", average([2, 4, 6, 8])); // Expected: 5
  
  // Test 6: Convert array elements to title case
  console.log("Title case for ['hello', 'world']:", toTitleCase(['hello', 'world'])); // Expected: ['Hello', 'World']
  
  // Test 7: Zip two arrays together into pairs
  console.log("Zip [1, 2, 3] and ['a', 'b', 'c']:", zipArrays([1, 2, 3], ['a', 'b', 'c'])); // Expected: [[1, 'a'], [2, 'b'], [3, 'c']]
  
  // Test 8: Reverse elements of an array in place
  let arrToReverse = [1, 2, 3, 4];
  console.log("Reverse [1, 2, 3, 4]:", reverseInPlace(arrToReverse)); // Expected: [4, 3, 2, 1]
  
  // Test 9: Get intersection of elements from multiple arrays
  console.log("Intersection of [1, 2, 3] and [2, 3, 4]:", intersection([1, 2, 3], [2, 3, 4])); // Expected: [2, 3]
  
  // Test 10: Remove falsy values from an array
  console.log("Remove falsy values from [0, 1, false, 2, '', 3]:", removeFalsyValues([0, 1, false, 2, '', 3])); // Expected: [1, 2, 3]
  
  // You can add more test cases as needed to cover edge cases.
  