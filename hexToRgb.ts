// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b) {
	const hexParts = [r, g, b];
	return hexParts.map(part => hexPartConvert(part)).join('');
}

function hexPartConvert(colorInt) {
	colorInt = colorInt > 255 ? 255 : colorInt < 0 ? 0 : colorInt;
	const hexPart = colorInt.toString(16).toUpperCase();
	return hexPart.length === 2 ? hexPart : `0${hexPart}`;
}
console.assert(rgb(0, 0, 0) === '000000', 'FAIL');
console.assert(rgb(0, 0, -20) === '000000', 'FAIL');
console.assert(rgb(300, 255, 255) === 'FFFFFF', 'FAIL');
console.assert(rgb(173, 255, 47) === 'ADFF2F', 'FAIL');
