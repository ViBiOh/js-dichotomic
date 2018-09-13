/**
 * Default compare function between two items.
 * @param  {Any} a  Left side of comparison
 * @param  {Any} b  Right side of comparison
 * @return {Number} Negative if a lower then b, 0 if equal and Positive if a greater than b
 */
function defaultCompareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
  return 1;
}

/**
 * Dichotomically find insertion index of an element, or matching one if already present.
 * @param  {Any}      element   Searched element
 * @param  {Array}    array     Sorted array to search in
 * @param  {Function} compareFn Function used to compare two items of the array
 * @return {Object}             Object describing if research was successful and best matching index
 */
function findIndex(element, array, compareFn = defaultCompareFn) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (!array.length) {
    return {
      found: false,
      index: 0,
    };
  }

  let max = array.length - 1;
  let min = 0;

  while (min <= max) {
    const current = Math.floor((min + max) / 2);
    const compareResult = compareFn(element, array[current]);

    if (compareResult === 0) {
      return {
        found: true,
        index: current,
      };
    }

    if (compareResult < 0) {
      max = current - 1;
    } else {
      min = current + 1;
    }
  }

  return {
    found: false,
    index: min,
  };
}

/**
 * Check if given array is properly sorted according to compareFn
 * @param  {Array}    array     Array to check
 * @param  {Function} compareFn Compare function between two items of array
 * @return {Boolean}            True is array is properly sorted, false otherwise
 */
export function checkSort(array, compareFn = defaultCompareFn) {
  if (!Array.isArray(array) || !array.length) {
    return true;
  }

  for (let i = array.length - 2; i >= 0; i -= 1) {
    if (compareFn(array[i], array[i + 1]) > 0) {
      return false;
    }
  }

  return true;
}

/**
 * Insert element in array.
 * @param  {Any}      element   Element to insert
 * @param  {Array}    array     Array to insert
 * @param  {Function} compareFn Compare function between two items of array
 * @return {Number}             Index of insertion, or undefined if not an array
 */
export function insert(element, array, compareFn) {
  const result = findIndex(element, array, compareFn);

  if (result) {
    array.splice(result.index, 0, element);
    return result.index;
  }

  return undefined;
}

/**
 * Search item in an array
 * @param  {Any}      element   Element search
 * @param  {Array}    array     Array to search
 * @param  {Function} compareFn Compare function between two items of array
 * @return {Number}             Found index or -1
 */
export function search(element, array, compareFn) {
  const result = findIndex(element, array, compareFn);

  if (result && result.found) {
    return array[result.index];
  }

  return -1;
}
