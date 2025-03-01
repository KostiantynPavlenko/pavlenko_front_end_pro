const arr = [true, 6, '3', '7', false, NaN, undefined, [], {}, 'text', 4];

function getAverage(arr){
  let countOfNumbers = 0;
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number' && !Number.isNaN(arr[i])){
      sum += arr[i];
      countOfNumbers++;
    }
  }

  if(countOfNumbers && sum){
    return sum / countOfNumbers;
  }

  return 0;
}

console.log(getAverage(arr));