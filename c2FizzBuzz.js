



// for (let num = 1; num <= 100; num += 1) {
//     if (num % 15 == 0) {
//         console.log('FizzBuzz', num);
//     } else if (num % 3 == 0) {
//         console.log('Fizz', num);
//     } else if (num % 5 == 0) {
//         console.log('Buzz', num);
//     } else {
//         console.log(num);
//     }
// }


for (let num = 1; num <= 100; num += 1) {
    let printString = '';
    if (num % 3 == 0) {
        printString += 'Fizz';
    }

    if (num % 5 == 0) {
        printString += 'Buzz';
    }

    console.log(printString, num);
}