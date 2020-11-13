import { findIntLocationsInArray } from './findIntLocationsInArray';

test('findIntLocationsIntArray', () => {
	describe('Empty Array', () => {
		expect(findIntLocationsInArray([6, 9, 3, 4, 3, 82, 11], 5)).toEqual([]);
		expect(findIntLocationsInArray([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 7)).toEqual([]);
		expect(
			findIntLocationsInArray([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 8)
		).toEqual([]);
	});
	describe('Int Positions in Array', () => {
		expect(findIntLocationsInArray([6, 9, 3, 4, 3, 82, 11], 3)).toEqual([2, 4]);
		expect(findIntLocationsInArray([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)).toEqual([1, 9]);
		expect(
			findIntLocationsInArray([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20)
		).toEqual([0, 1, 8]);
	});
});
// test
