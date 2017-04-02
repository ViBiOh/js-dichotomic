import test from 'ava';
import { checkSort } from '../src/dichotomic';

test('should check if an undefined array is sorted', (t) => {
  t.true(checkSort(undefined));
});

test('should check if a single post array is sorted', (t) => {
  t.true(checkSort([1]));
});

test('should check if an array is sorted', (t) => {
  const largeArray = [];
  for (let i = 0; i < 5000; i += 1) {
    largeArray.push(i);
  }

  t.true(checkSort(largeArray));
});

test('should check if an array is not sorted at end', (t) => {
  t.false(checkSort([1, 2, 3, 5, 4]));
});

test('should check if an array is not sorted at begginning', (t) => {
  t.false(checkSort([2, 1, 3, 4, 5]));
});

test('should check if an array is sorted with doublon', (t) => {
  t.true(checkSort([2, 2, 2, 2, 2, 2, 2, 3]));
});

test('should check if an array is sorted with improper function', (t) => {
  t.false(checkSort([{ id: 1 }, { id: 2 }]));
});

test('should check if an array is sorted with proper function', (t) => {
  t.is(checkSort([{ id: 1 }, { id: 2 }], (a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id === b.id) {
      return 0;
    }
    return 1;
  }), true);
});
