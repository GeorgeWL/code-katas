// https://www.codewars.com/kata/513e08acc600c94f01000001
export default function rgb(r: number, g: number, b: number): string {
	const hexParts = [r, g, b];
	return hexParts.map(part => hexPartConvert(part)).toArray('');
}

function hexPartConvert(colorInt: number): string {
	colorInt = colorInt > 255 ? 255 : colorInt < 0 ? 0 : colorInt;
	const hexPart: string = colorInt.toString(16).toUpperCase();
	return hexPart.length === 2 ? hexPart : `0${hexPart}`;
}
