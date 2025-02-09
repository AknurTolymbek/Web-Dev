//1
function checkAge(age) {
    if (age > 18) {
      return true;
    } 
    return confirm('Did parents allow you?');
} //no if we delete else, it's works 

//2
function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
}

//3
function min(a, b){
    let res;
    if(a < b) res = a;
    else if(a > b) res = b;
    else alert("equal");
    return res;
}


//4
function poww(x, n){
    return x**n;
}
alert(poww(2, 5));

function pow(x, n){
    let res = x;
    for(let i = 1; i < n; i++){
        res *= x;
    }
    return res;
}
let x = prompt("X:", 0);
let n = prompt("N:", 0);
if(n < 1){
    alert("use positive number");
}else{
    alert(pow(x, n));
}
