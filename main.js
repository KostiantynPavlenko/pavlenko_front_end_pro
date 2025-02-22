const age = prompt('Enter your age');
const city = prompt('Enter your city');
const sport = prompt('Enter your favorite sport');

let ageAnswer = `You are ${age} years old`;
let cityAnswer = 'You live in ';
let sportAnswer = `You favorite sport is ${sport}`;

switch(true){
    case city === 'Kyiv' || city === 'Київ':
        cityAnswer += 'Capital of Ukraine';
        break;
    case city === 'Washington' || city === 'Вашингтон':
        cityAnswer += 'Capital of USA';
        break;
    case city === 'Londone' || city === 'Лондон':
        cityAnswer += 'Capital of England';
        break;
    default:
        cityAnswer += city;
}

alert(ageAnswer + '\n' + cityAnswer + '\n' + sportAnswer);