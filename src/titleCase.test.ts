import { titleCase } from './titleCase';

describe('Name of the group', () => {
	test('should be okay with empty string', () => {
		expect(titleCase('')).toEqual('');
	});
	test('should format string without minorWords param', () => {
		expect(titleCase('the quick brown fox')).toEqual('The Quick Brown Fox');
		expect(titleCase('THE QUICK BROWN FOX')).toEqual('The Quick Brown Fox');
	});
	test('should format string with minorWords param', () => {
		expect(titleCase('THE WIND IN THE WILLOWS', 'in')).toBe('The Wind in The Willows');
		expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings');
		expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe('The Wind in the Willows');
	});
});
