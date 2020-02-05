// https://www.codewars.com/kata/5202ef17a402dd033c000009
export function titleCase(title: string, minorWords?: string): string {
	const titleArr = title.split(' ');
	// const minorWordsArr = minorWords && minorWords.split(' ');
	return titleArr
		.map(word => word.split('').map((letter, index) => (index === 0 ? letter.toUpperCase() : letter.toLowerCase())))
		.join(' ');
}
