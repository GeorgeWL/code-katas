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
console.assert(rgb(0, 0, 0) === '000000', 'FAIL');
console.assert(rgb(0, 0, -20) === '000000', 'FAIL');
console.assert(rgb(300, 255, 255) === 'FFFFFF', 'FAIL');
console.assert(rgb(173, 255, 47) === 'ADFF2F', 'FAIL');
