// Linear Search
// 1. Look through every single item in an unsorted array
// ex: indexOf, includes, find, findIndex methods in JS

// Time Complexity: O(n)

const arr1 = ["John", "Becky", "Sally", "Jason", "Tim"];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

// Binary Search
// 1. Look through the midpoint of a sorted array and then move to left or right
// Divide and Conquer

// Time complexity: O(log n)

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let selected = Math.floor((left + right) / 2);

  while (arr[selected] !== target && left <= right) {
    if (target > arr[selected]) {
      left = selected + 1;
    } else {
      right = selected - 1;
    }

    selected = Math.floor((left + right) / 2);
  }

  if (arr[selected] === target) {
    return selected;
  }

  return -1;
};

// String search
// Count the number of times a smaller string appears in a longer string

// Time complexity: O(n2) quadratic

const strSearch = (long, pattern) => {
  let count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < pattern.length; j++) {
      console.log(`Comparing ${pattern[j]} to ${long[i + j]}`);
      if (pattern[j] !== long[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === pattern.length - 1) {
        console.log("MATCH FOUND");
        count++;
      }
    }
  }

  return count;
};

console.log(strSearch("lori loled", "lol"));
