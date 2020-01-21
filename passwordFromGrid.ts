const pass1: string[][] = [
	['p', 'x', 'm'],
	['a', '$', '$'],
	['k', 'i', 't']
]; // expect `pa$$` as result
const pass2: string[][] = [
	['a', 'x', 'c'],
	['g', 'l', 't'],
	['o', 'v', 'e']
]; // expect `lovet` as result
const directions1: string[] = ['lefT', 'downT', 'rightT', 'rightT'];
const directions2: string[] = ['downT', 'down', 'leftT', 'rightT', 'rightT', 'upT'];
function getPassword(grid: string[][], directions: string[]): string {
	console.log(grid, directions);

	return 'yep';
}
getPassword(pass1, directions1);
getPassword(pass2, directions2);
