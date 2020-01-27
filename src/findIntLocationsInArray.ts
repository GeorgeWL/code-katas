// www.codewars.com/kata/59a9919107157a45220000e1/train/python
export function findIntLocationsInArray(intArray: number[], int: number): number[] {
	const intLocations: number[] = [];
	intArray.map((arrInt, index) => {
		const isInArray = arrInt === int;
		isInArray && intLocations.push(index);
		return isInArray;
	});
	return intLocations;
}
