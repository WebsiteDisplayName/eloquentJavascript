let flatten = (arrays) => {
    return arrays.reduce((currentArray,nextArray) => currentArray.concat(nextArray));
};

         
let arrayOfArrays = [[1, 2, 3], [4, 5], [6]];
let result = flatten(arrayOfArrays);
console.log(result);