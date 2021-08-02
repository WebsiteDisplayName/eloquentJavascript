let countBs = (inputString) => {
    let counter = 0;
    for (let num = 0; num < inputString.length; num += 1) {
        if (inputString[num] == "B") {
            counter += 1;
        }
    }
    return counter;
};

let countChar = (inputString, char) => {
    let counter = 0;
    for (let num = 0; num < inputString.length; num += 1) {
        if (inputString[num] == char) {
            counter += 1
        }
    }
    return counter;
};