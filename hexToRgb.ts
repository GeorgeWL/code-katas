// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r: number, g: number, b: number): string {
	// complete this function
	const hexParts = [hexPartConvert(r), hexPartConvert(g), hexPartConvert(b)];
	return hexParts.map(part => (part.length !== 1 ? part : `0${part}`)).join('');
}

function hexPartConvert(colorInt: number = 0): string {
	if (colorInt > 255) {
		colorInt = 255;
	}
	if (colorInt < 0) {
		colorInt = 0;
	}
	return colorInt.toString(16).toUpperCase(); // honestly, I googled for int to Hex expecting a native fucntion to exist. didn't expect it to be that easy.
}
console.assert;
