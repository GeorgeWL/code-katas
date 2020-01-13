// https://www.codewars.com/kata/54ba84be607a92aa900000f1
function wordIsIsogram(word: string): boolean {
	const lettersArr: string[] = word
		.toLowerCase()
		.split('')
		.sort();
	let prevLetter: string;
	return lettersArr
		.map((letter, index) => {
			const res = letter === prevLetter && index !== lettersArr.length;
			prevLetter = letter;
			return res;
		})
		.every(bool => bool === true);
}
