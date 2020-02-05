// https://www.codewars.com/kata/536e9a7973130a06eb000e9f
interface TypeMatchups {
	supereffective: string[];
	neutral: string[];
	noteffective: string[];
}

interface BattleTypes {
	[key: string]: TypeMatchups;
}
const battleMatchups: BattleTypes = {
	fire: {
		supereffective: ['grass'],
		neutral: ['electric', 'fire'],
		noteffective: ['water']
	},
	water: {
		supereffective: ['fire'],
		neutral: ['electric', 'water'],
		noteffective: ['grass']
	},
	grass: {
		supereffective: ['water'],
		neutral: ['grass', 'electric'],
		noteffective: ['fire']
	},
	electric: {
		supereffective: ['water'],
		neutral: ['electric', 'fire'],
		noteffective: []
	}
};

export function calculateDamage(yourType: string, opponentType: string, attack: number, defence: number): number {
	let multiplier: number = 1;
	if (battleMatchups[yourType].supereffective.includes(opponentType)) {
		multiplier = 2;
	} else if (battleMatchups[yourType].noteffective.includes(opponentType)) {
		multiplier = 0.5;
	}
	return 50 * (attack / defence) * multiplier;
}
