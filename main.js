let numbers = +prompt('Enter a three-digit number');

let d1 = Math.floor(numbers / 100);
let d2 = Math.floor(numbers % 100 / 10);
let d3 = numbers % 10;

let answer = '';

if (numbers !== null && !isNaN(numbers) && numbers > 99){
    if(d1 === d2 && d1 === d3){
        answer += 'All numbers equal';
    }
    if (d1 === d2 || d1 === d3 || d2 === d3) {
        answer += '\nEqual numbers exist';
    }
    
    if(answer !== ''){
        alert(answer);
    }else{
        alert('it`s just a three-digit number');
    }
}else {
    alert('You didn\'t provide a three-digit number');
}

