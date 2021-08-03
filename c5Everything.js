let every = (array,test) => {

    for (let item of array) {
        if (!test(item)) {
            return false;
        }
    };
    return true;
};

let every2 = (array,test) => {

    return !array.some(element => !test(element));
};

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
