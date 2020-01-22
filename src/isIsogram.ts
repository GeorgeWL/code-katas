// https://www.codewars.com/kata/54ba84be607a92aa900000f1
export default function isIsogram(word: string): boolean {
	const lettersArr: string[] = word
		.toLowerCase()
		.split('')
		.sort();
	let prevLetter: string;
	return lettersArr
		.map((letter: string) => {
			const res = letter !== prevLetter;
			prevLetter = letter;
			return res;
		})
		.every(bool => bool === true);
}
