function defaultCompareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
  return 1;
}

function getCompareFn(compareFn) {
  if (typeof compareFn === 'function') {
    return compareFn;
  }
  return defaultCompareFn;
}

function findIndex(element, array, compareFn) {
  let min = 0;

  if (array) {
    const compare = getCompareFn(compareFn);
    let max = array.length - 1;

    if (max >= 0) {
      while (min <= max) {
        const current = Math.floor((min + max) / 2);
        const compareResult = compare(element, array[current]);

        if (compareResult === 0) {
          return {
            found: true,
            index: current,
          };
        } else if (compareResult < 0) {
          max = current - 1;
        } else {
          min = current + 1;
        }
      }
    }
  }

  return {
    found: false,
    index: min,
  };
}

export function checkSort(array, compareFn) {
  if (array) {
    const compare = getCompareFn(compareFn);

    for (let i = array.length - 2; i >= 0; i -= 1) {
      if (compare(array[i], array[i + 1]) > 0) {
        return false;
      }
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
