import { replaceVisuallyIdentical } from './visuallyIdenticalString';

describe('replaceVisuallyIdentical', () => {
    it('replaces each letter with a visually identical symbol', () => {
        const inputString: string = 'Hello World';
        const expectedOutput: string = '𝗛𝗲𝗹𝗹𝗼 𝗪𝗼𝗿𝗹𝗱';
        const result: string = replaceVisuallyIdentical(inputString);
        expect(result).toEqual(expectedOutput);
    });

    it('handles strings with non-alphabetic characters', () => {
        const inputString: string = '123!@#$%^&*()';
        const expectedOutput: string = '123!@#$%^&*()';
        const result: string = replaceVisuallyIdentical(inputString);
        expect(result).toEqual(expectedOutput);
    });

    it('handles empty strings', () => {
        const inputString: string = '';
        const expectedOutput: string = '';
        const result: string = replaceVisuallyIdentical(inputString);
        expect(result).toEqual(expectedOutput);
    });
});
