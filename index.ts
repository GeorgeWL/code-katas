import rgb from './hexToRgb';
import isIsogram from './isogram_check';
console.log('will add proper jest tests here later');
console.assert(rgb(0, 0, 0) === '000000', 'FAIL on 0,0,0');
console.assert(rgb(0, 0, -20) === '000000', 'FAIL');
console.assert(rgb(300, 255, 255) === 'FFFFFF', 'FAIL');
console.assert(rgb(173, 255, 47) === 'ADFF2F', 'FAIL');
// console.assert(
// 	isIsogram('Dermatoglyphics') === true,
// 	'definitely an isogram word'
// );
// console.assert(isIsogram('isogram') === true);
// console.assert(isIsogram('aba') === false, 'same chars may not be adjacent');
// console.assert(isIsogram('moOse') === false, 'same chars may not be same case');
// console.assert(isIsogram('isIsogram') === false);
// console.assert(isIsogram('') === true, 'an empty string is a valid isogram');
