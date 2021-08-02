let range = (startNum, endNum, increment = 1) => {
    let array = [];
    if (startNum > endNum && increment == 1) {
        increment = -1;
    };

    while ((increment > 0) ? startNum <= endNum : startNum >= endNum) {
        array.push(startNum);
        startNum += increment;
    }
    return array;
};

let sum = (array) => {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
};

let array = range(10,1);
let test = sum(array);

console.log(test);