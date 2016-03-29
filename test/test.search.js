import {expect} from './test.common.js';
import {search} from '../src/dichotomic.js';

describe('search', () => {
  const largeArray = [];
  for (let i = 0; i < 5000; i += 1) {
    largeArray.push(i);
  }

  it('should search in an undefined array', () => {
    const result = search(undefined, undefined);
    expect(result).to.be.undefined;
  });

  it('should search in an empty array', () => {
    const result = search(undefined, []);
    expect(result).to.be.undefined;
  });

  it('should not found undefined in a single post array', () => {
    const result = search(undefined, [1]);
    expect(result).to.be.undefined;
  });

  it('should not found a value in a single post array', () => {
    const result = search(0, [1]);
    expect(result).to.be.undefined;
  });

  it('should found in a single post array', () => {
    const result = search(1, [1]);
    expect(result).to.be.equal(1);
  });

  it('should found in bottom bound of a large array', () => {
    const result = search(0, largeArray);
    expect(result).to.be.equal(0);
  });

  it('should found in up bound of a large array', () => {
    const result = search(4999, largeArray);
    expect(result).to.be.equal(4999);
  });

  it('should found in one shot of a large array', () => {
    const result = search(2500, largeArray);
    expect(result).to.be.equal(2500);
  });
});
