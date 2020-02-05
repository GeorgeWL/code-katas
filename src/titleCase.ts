// https://www.codewars.com/kata/5202ef17a402dd033c000009
export function titleCase(title: string, minorWords?: string): string {
	const titleArr = title.split(' ');
	const minorWordsArr = minorWords && minorWords.split(' ').map(w => w.toLowerCase());
	return titleArr
		.map((word, index) => {
			const newWord = word.toLowerCase();
			return minorWordsArr && minorWordsArr?.includes(newWord)
				? index === 0
					? upperFirst(newWord)
					: newWord
				: upperFirst(newWord);
		})
		.join(' ');
}
const upperFirst = (word: string) => word.replace(/\w{1}/, match => match.toUpperCase());
