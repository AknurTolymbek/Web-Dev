//1
if("0"){
    alert('Hello');
} //Yes it be shown because "0" is true

//2
let message = prompt("What is the 'official' name of JavaScript?", "");
if (message == "ECMAScript"){
    alert("Right!")
}else{
    alert("You don't know? ECMAScript!")
}

//3
let num = prompt('Type the number: ', 0);
if(num > 0){
    alert(1)
}else if(num < 0){
    alert(-1)
}else{
    alert(0)
}


//4
let result;
result = (a + b < 4) ? 'Below' : 'Over';
alert(result);

//5
let messagee = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';