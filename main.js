let number = 10369;

let d1 = Math.round((number / 10000) - Number((number / 10000 % 1).toFixed(4)));
let d2 = (number / 1000 % 10).toFixed(3) - Number((number / 1000 % 1).toFixed(3));
let d3 = number % 1000 / 100 - number % 1000 / 100 % 1;
let d4 = number % 100 / 10 - Number((number % 100 / 10 % 1).toFixed(1));
let d5 = number % 10;

console.log(`${d1} ${d2} ${d3} ${d4} ${d5}`);

