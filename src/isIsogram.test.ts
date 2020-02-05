import isIsogram from './isIsogram';

describe('IsIsoGram tests', () => {
	test('should return false on not Isogram string', () => {
		expect(isIsogram('abade')).toBe(false);
		expect(isIsogram('moOse')).toBe(false);
	});
	test('should return true on Isogram string', () => {
		expect(isIsogram('isogram')).toBe(true);
		expect(isIsogram('Dermatoglyphics')).toBe(true);
	});
	test('should return true on empty string', () => {
		expect(isIsogram('')).toBe(true);
	});
});
