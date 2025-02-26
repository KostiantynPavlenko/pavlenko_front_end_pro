let number = +prompt('Enter a number');

if (!isNaN(number)) {
  let isSimple = true;

  for(let i = 2; i < number; i++){
    if(number % i === 0){
      isSimple = false;
      break;
    }
  }

  if(isSimple){
    alert(`Number ${number} IS SIMPLE`);
  }else{
    alert(`Number ${number} is NOT simple`);
  }
} else {
  alert('You entered invalid number');
}
