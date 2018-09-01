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

export function insert(element, array, compareFn) {
  const result = findIndex(element, array, compareFn);

  if (result) {
    array.splice(result.index, 0, element);
    return result.index;
  }

  return undefined;
}

export function search(element, array, compareFn) {
  const result = findIndex(element, array, compareFn);

  if (result && result.found) {
    return array[result.index];
  }

  return undefined;
}
