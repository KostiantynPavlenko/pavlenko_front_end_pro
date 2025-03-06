function guessNumber() {
  const attempts = 10;

  for (let i = 1; i <= attempts; i++) {
    const enteredValue = +prompt('Enter number greater than 100');
    const isEnteredValueNaN = Number.isNaN(enteredValue);

    if (!isEnteredValueNaN) {
      if (enteredValue < 100) {
        if(i === attempts){
          alert('You entered less than 100.\nIt was your last attempt');
        } else {
          alert('You entered less than 100.\nPlease try again');
        }
        
        continue;
      }else {
        alert('You entered valid number');
        
        return enteredValue;
      }
    } else {
      if(i === attempts){
        alert('You entered not a number.\nIt was your last attempt');
      } else {
        alert('You entered not a number.\nPlease try again');
      }
    }
  }
}

console.log(guessNumber());