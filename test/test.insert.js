import {expect} from './test.common.js';
import {insert, checkSort} from '../src/dichotomic.js';

describe('search', () => {
  it('should not insert in an undefined array', () => {
    expect(insert()).to.be.undefined;
  });

  it('should insert in an empty array', () => {
    expect(insert(8000, [], undefined)).to.be.equal(0);
  });

  it('should insert after in a single array', () => {
    expect(insert(2, [1], undefined)).to.be.equal(1);
  });

  it('should insert before in a single array', () => {
    expect(insert(0, [1], undefined)).to.be.equal(0);
  });

  it('should insert in an already defined array', () => {
    var arrayInsert = [0, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(insert(1, arrayInsert, undefined)).to.be.equal(1);
    expect(checkSort(arrayInsert)).to.be.true;
    expect(arrayInsert.length).to.be.equal(10);
  });

  it('should insert in an already defined array with doublon', () => {
    var arrayInsert = [0, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
    var insertIndex = insert(2, arrayInsert, undefined);
    expect(insertIndex).to.be.above(1);
    expect(insertIndex).to.be.below(5);
    expect(checkSort(arrayInsert)).to.be.true;
    expect(arrayInsert.length).to.be.equal(13);
  });

  it('should insert at a beginning of an array', () => {
    var arrayInsert = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(insert(0, arrayInsert, undefined)).to.be.equal(0);
    expect(checkSort(arrayInsert)).to.be.true;
    expect(arrayInsert.length).to.be.equal(10);
  });

  it('should insert at a ending of an array', () => {
    var arrayInsert = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(insert(9, arrayInsert, undefined)).to.be.equal(9);
    expect(checkSort(arrayInsert)).to.be.true;
    expect(arrayInsert.length).to.be.equal(10);
  });
});