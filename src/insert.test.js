import test from 'ava';
import { insert, checkSort } from './dichotomic';

test('should not insert in an undefined array', (t) => {
  t.is(insert(), undefined);
});

test('should insert in an empty array', (t) => {
  t.is(insert(8000, [], undefined), 0);
});

test('should insert after in a single array', (t) => {
  t.is(insert(2, [1], undefined), 1);
});

test('should insert before in a single array', (t) => {
  t.is(insert(0, [1], undefined), 0);
});

test('should insert in an already defined array', (t) => {
  const arrayInsert = [0, 2, 3, 4, 5, 6, 7, 8, 9];
  t.is(insert(1, arrayInsert, undefined), 1);
  t.true(checkSort(arrayInsert));
  t.is(arrayInsert.length, 10);
});

test('should insert in an already defined array with doublon', (t) => {
  const arrayInsert = [0, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
  const insertIndex = insert(2, arrayInsert, undefined);
  t.true(insertIndex > 1);
  t.true(insertIndex < 5);
  t.true(checkSort(arrayInsert));
  t.is(arrayInsert.length, 13);
});

test('should insert at a beginning of an array', (t) => {
  const arrayInsert = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  t.is(insert(0, arrayInsert, undefined), 0);
  t.true(checkSort(arrayInsert));
  t.is(arrayInsert.length, 10);
});

test('should insert at a ending of an array', (t) => {
  const arrayInsert = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  t.is(insert(9, arrayInsert, undefined), 9);
  t.true(checkSort(arrayInsert));
  t.is(arrayInsert.length, 10);
});
