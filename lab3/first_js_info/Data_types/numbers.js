//1
let a = +prompt("A:", 0);
let b = +prompt("B:", 0);
alert(a + b);


//2
alert(Math.round(6.35*10)/10);

//3
function readNumber() {
    let num;
    
    do {
    num = prompt("Number:", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

//4
let i = 0;
// while (i != 10) {
//   i += 0.2;
// //   alert(i);
// }//infinite because by adding 0.2 loses precision

//5
function random(min, max){
    return min + Math.random() * (max - min);
}
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


//6
function random(min, max){
    return (min + Math.random() * (max - min)).toFixed(0);
}
alert( random(1, 5) ); 
alert( random(1, 5) ); 
alert( random(1, 5) ); 