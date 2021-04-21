// simple so shouldn't need tests

export default function fizzBuzzer(maxCount = 100) {
    // add 1 to maxCount as javascript is zero-indexed
    for (let index = 1; index < maxCount+1; index++) {
        const isThreeMult = isMultipleOfX(index, 3);
        const isFiveMult = isMultipleOfX(index, 5);
        const message = isThreeMult || isFiveMult ? `${isThreeMult ? 'Fizz' : ''}${isFiveMult ? 'Buzz' : ''}` : index;
        console.log(message);
    }
}

function isMultipleOfX(int:number, multiple:number) {
    if(multiple<=0){
        throw new Error("multiple must be larger than 0, cannot divide by zero")
    }
    return int % multiple == 0;
}