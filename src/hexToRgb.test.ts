import rgb from './hexToRgb';

describe('rgb tests', () => {
	test('should succeed rgb out of range', () => {
		expect(rgb(-10, -10, -10)).toEqual('000000');
		expect(rgb(2000, 2000, 2000)).toEqual('FFFFFF');
	});
	test('should succeed rgb in range', () => {
		expect(rgb(0, 0, 0)).toEqual('000000');
		expect(rgb(255, 255, 255)).toEqual('FFFFFF');
	});
});
