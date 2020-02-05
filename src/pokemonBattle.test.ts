import { calculateDamage } from './pokemonBattle';
describe('Pokemon Battle', () => {
	test('should be super effective', () => {
		expect(calculateDamage('grass', 'water', 40, 40)).toEqual(100);
		expect(calculateDamage('grass', 'water', 100, 100)).toEqual(100);
		expect(calculateDamage('grass', 'fire', 35, 5)).toEqual(175);
	});
	test('should be neutral', () => {
		expect(calculateDamage('grass', 'electric', 57, 19)).toEqual(150);
		expect(calculateDamage('fire', 'electric', 10, 2)).toEqual(250);
		expect(calculateDamage('electric', 'fire', 100, 100)).toEqual(50);
	});
	test('should be not very effective', () => {
		expect(calculateDamage('fire', 'water', 100, 100)).toEqual(25);
	});
});
