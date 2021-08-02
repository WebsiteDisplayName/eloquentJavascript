function divider(factor) {
    return (number) => {
        return number / factor;
    };
}

let divideTwice = divider(2);
console.log(divideTwice(4));





function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);
  console.log(twice(5));