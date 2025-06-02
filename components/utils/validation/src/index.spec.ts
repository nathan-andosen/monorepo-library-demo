import {isString} from './index';

describe('isString()', () => {
  it('should validate string objects', () => {
    expect(isString("false")).toEqual(true);
    expect(isString(true)).toEqual(false);
  });
});
