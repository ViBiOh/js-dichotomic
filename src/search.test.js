import test from 'ava';
import { search } from './dichotomic';

const largeArray = [];
for (let i = 0; i < 5000; i += 1) {
  largeArray.push(i);
}

test('should search in an undefined array', (t) => {
  const result = search(undefined, undefined);
  t.is(result, -1);
});

test('should search in an empty array', (t) => {
  const result = search(undefined, []);
  t.is(result, -1);
});

test('should not found undefined in a single post array', (t) => {
  const result = search(undefined, [1]);
  t.is(result, -1);
});

test('should not found a value in a single post array', (t) => {
  const result = search(0, [1]);
  t.is(result, -1);
});

test('should found in a single post array', (t) => {
  const result = search(1, [1]);
  t.is(result, 1);
});

test('should found in bottom bound of a large array', (t) => {
  const result = search(0, largeArray);
  t.is(result, 0);
});

test('should found in up bound of a large array', (t) => {
  const result = search(4999, largeArray);
  t.is(result, 4999);
});

test('should found in one shot of a large array', (t) => {
  const result = search(2500, largeArray);
  t.is(result, 2500);
});
