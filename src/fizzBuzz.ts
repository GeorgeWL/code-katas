// simple so shouldn't need tests

export default function fizzBuzzer(maxCount = 100) {
    // add 1 to maxCount as javascript is zero-indexed
    for (let index = 1; index < maxCount+1; index++) {
        const isMultipleOfThree = isMultipleOfX(index, 3);
        const isMultipleOfFive = isMultipleOfX(index, 5);
        const response = isMultipleOfThree || isMultipleOfFive ? `${isMultipleOfThree ? 'Fizz':''}${isMultipleOfFive ? 'Buzz':''}` : index;
        console.log(response);
    }
}

function isMultipleOfX(int:number, multiple:number) {
    if(multiple<=0){
        throw new Error("multiple must be larger than 0, cannot divide by zero")
    }
    return int % multiple == 0;
}