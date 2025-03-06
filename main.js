function multiply(fisrtValue){
  return function (secondValue){
    return fisrtValue * secondValue;
  }
}

console.log(multiply(5)(2));