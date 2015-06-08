import {expect} from './test.common.js';
import {checkSort} from '../src/dichotomic.js';

describe('checkSort', function() {
  const largeArray = [];
  for (let i = 0; i < 5000; i += 1) {
    largeArray.push(i);
  }

  it('should check if an undefined array is sorted', function() {
    expect(checkSort(undefined)).to.be.undefined;
  });

  it('should check if a single post array is sorted', function() {
    expect(checkSort([1])).to.be.true;
  });

  it('should check if an array is sorted', function() {
    expect(checkSort(largeArray)).to.be.true;
  });

  it('should check if an array is not sorted at end', function() {
    expect(checkSort([1, 2, 3, 5, 4])).to.be.false;
  });

  it('should check if an array is not sorted at begginning', function() {
    expect(checkSort([2, 1, 3, 4, 5])).to.be.false;
  });

  it('should check if an array is sorted with doublon', function() {
    expect(checkSort([2, 2, 2, 2, 2, 2, 2, 3])).to.be.true;
  });

  it('should check if an array is sorted with improper function', function() {
    expect(checkSort([{
      id: 1
    }, {
      id: 2
    }])).to.be.false;
  });

  it('should check if an array is sorted with proper function', function() {
    expect(checkSort([{
      id: 1
    }, {
      id: 2
    }], function(a, b) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id === b.id) {
        return 0;
      }
      return 1;
    })).to.be.true;
  });
});