let size = 20;

for (let y = 1; y <= size; y += 1) {
    let rowString = '';
    for (let x = 1; x <= size; x += 1) {
        // Both x & y are odd
        if (((y % 2 == 1) && (x % 2 == 1)) || ((y % 2 == 0) && (x % 2 == 0))) {
            rowString += ' ';
        } else {
            rowString += '#';
        }
    }
    console.log(rowString);
}