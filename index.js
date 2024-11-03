// Function 1: Calculate the product of all elements in an array
function product(arr) {
    return arr.reduce((acc, current) => acc * current, 1);
  }
  
  // Function 2: Remove elements from an array that match a specific value
  function removeElements(arr, value) {
    return arr.filter(item => item !== value);
  }
  
  // Function 3: Filter out numbers greater than a specified threshold from an array
  function filterGreaterThan(arr, threshold) {
    return arr.filter(num => num <= threshold);
  }
  
  // Function 4: Check if all elements in the array are unique
  function allUnique(arr) {
    return arr.length === new Set(arr).size;
  }
  
  // Function 5: Find the average of numbers in an array
  function average(arr) {
    const sum = arr.reduce((acc, current) => acc + current, 0);
    return sum / arr.length;
  }
  
  // Function 6: Convert array elements to title case
  function toTitleCase(arr) {
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
  }
  
  // Function 7: Zip two arrays together into pairs
  function zipArrays(arr1, arr2) {
    return arr1.map((item, index) => [item, arr2[index]]);
  }
  
  // Function 8: Reverse elements of an array in place
  function reverseInPlace(arr) {
    return arr.reverse();
  }
  
  // Function 9: Get intersection of elements from multiple arrays
  function intersection(...arrays) {
    return arrays.reduce((acc, curr) => acc.filter(item => curr.includes(item)));
  }
  
  // Function 10: Remove falsy values from an array (false, null, 0, "", undefined, NaN)
  function removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }
  
  module.exports = {
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
  };
  