function makeSum(){
  let sum = 0;

  return function(number){
    if(typeof number === 'number' && !Number.isNaN(number)){
      return sum += number;
    }
    return 'Entered not a number';
  }
}

const sum = makeSum();

console.log(sum(4));
console.log(sum(6));