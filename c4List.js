
let arrayToList = (array) => {
    let list = null;
    for (let num = array.length - 1; num >= 0; num -= 1) {
        list = {value: array[num], rest: list};
    };
    return list;
};


let listToArray = (list) => {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
};

let prepend = (element, list) => {
    return {value: element, rest: list};
};


let nth = (list, number) => {
    if (number == 0) {
        return list.value;
    };
    return nth(list.rest, number - 1);
};


console.log(nth(arrayToList([10, 20, 30]), 1));