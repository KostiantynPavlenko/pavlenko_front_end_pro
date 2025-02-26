let number = +prompt('Enter a number');

if(!isNaN(number)){
  for(let i = 1; i <= 100; i++){
    if(i ** 2 < number){
      console.log(i);
    }
  }
}else {
  alert('You entered invalid number');
}
