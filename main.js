function removeSymbols(str, arrChars){
  let tempStr = str;

  for(let i = 0; i < arrChars.length; i++){
    tempStr = tempStr.replaceAll(arrChars[i], '');
  }

  return tempStr;
}

console.log(removeSymbols('hello world', ['l', 'd']));
console.log(removeSymbols('hello world', ['w', 'o']));