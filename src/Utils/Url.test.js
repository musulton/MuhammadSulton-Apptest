import {validURL} from './Url';

describe('Url utils', () => {
  it('should return false when uri is not valid', () => {
    const url = 'N/A';
    expect(validURL(url)).toBeFalsy();
  });

  it('should return true when uri is valid', () => {
    const url = 'https://google.com';
    expect(validURL(url)).toBeTruthy();
  });
});
