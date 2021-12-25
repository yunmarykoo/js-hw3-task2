var askYear = +prompt('Введите год, чтобы узнать дату дня Программиста');
var visYear = '12.09.'
var nonVisYear = '13.09.'

if (askYear % 100 !== 0 && askYear % 4 === 0 ){
    alert('День программиста: ' + visYear + askYear);
} else if (askYear % 100 === 0 && askYear % 400 === 0){
    alert('День программиста: ' + visYear + askYear);
} else {
    alert('День программиста: ' + nonVisYear + askYear);
}