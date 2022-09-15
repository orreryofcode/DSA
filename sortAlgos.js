// Built-in JS Sorting: Array.sort()
// Accepts comparator function
const nums = [2, 6, 1, 15, 4];
const nums2 = [1, 2, 6, 4, 15];

// Comparator Function
function numCompare(num1, num2) {
  return num1 - num2;
}
// console.log(nums.sort(numCompare));

// Swap function
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

///////////////////////////////////////////////////////////////////////////
// 1. Bubble Sort -- Sinking Sort
// Idea is that the largest value will "bubble" to the top
// Time complexity: Unoptimized = O(n2); Optimized = O(n)
// Space complexity: O(1);

// Unoptimized
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        console.log("SWAPPING");
        swap(arr, j + 1, j);
      }
    }
  }
  return arr;
};

// bubbleSort(nums2);

// Optimized w/ noSwaps
const bubbleSortOpt = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        console.log("SWAPPING");
        swap(arr, j + 1, j);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
// bubbleSortOpt(nums2);

///////////////////////////////////////////////////////////////////////////
// 2. Selection Sort
// Sorts the smallest element with the beginning
// Does not work any better on data that is mostly sorted.

// Time Complexity: O(n2)
// Space complexity: O(1);

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    console.log(i, min);
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
};

// console.log(selectionSort(nums));

///////////////////////////////////////////////////////////////////////////
// 3. Insertion Sort
// Inserts one item at a time in it's correct place

// Time Complexity: O(n2)
// Space complexity: O(1);

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let selected = arr[i];
    for (var j = i - 1; i >= 0 && arr[j] > selected; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = selected;
  }
  return arr;
};

// console.log(insertionSort([2, 1, 9, 76, 4]));

///////////////////////////////////////////////////////////////////////////
// 4. Merge Sort
// Decomposes larger array into smaller arrays (0 or 1 elements) and then merges them back together

// Merging Function
const merge = (arr1, arr2) => {
  let mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
};

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
