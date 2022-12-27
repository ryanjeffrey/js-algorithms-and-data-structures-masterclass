// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
    const stringNum1 = num1.toString();
    const stringNum2 = num2.toString();

    if (stringNum1.length !== stringNum2.length) {
        return false;
    } else {
        const sortedNum1 = stringNum1.split('').sort().join('');
        const sortedNum2 = stringNum2.split('').sort().join('');
    
        let numCount1 = {}
        let numCount2 = {}
        for (let value of sortedNum1) {
            numCount1[value] = (numCount1[value] || 0) + 1
        }
        for (let value of sortedNum2) {
            numCount2[value] = (numCount2[value] || 0) + 1
        }
        // console.log(numCount1, numCount2)
        return JSON.stringify(numCount1) === JSON.stringify(numCount2)
    }
}

console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22,222));