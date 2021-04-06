const firstValue = process.argv[2].toLowerCase();
const secondValue = process.argv[3].toLowerCase();

let result = 0;

if (firstValue < secondValue) {
    result = -1;
}

if (firstValue > secondValue) {
    result = 1;
}

console.log(result);