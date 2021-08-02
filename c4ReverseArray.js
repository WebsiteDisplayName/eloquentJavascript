let reverseArray = (array) => {
    let newArray = [];
    for (let item of array) {
        newArray.unshift(item);
    };
    return newArray;
};

let reverseArrayInPlace = (array) => {
    for (let counter = 0; counter < Math.floor(array.length / 2); counter += 1) {
       let tempVal = array[array.length - 1 - counter];
       array[array.length - 1 - counter] = array[counter];
       array[counter] = tempVal;
    };
    return array;
};

let test = reverseArray([1,2,3]);
let test2 = reverseArrayInPlace([1,2,3,4,5,6]);
// console.log(test);
console.log(test2);





