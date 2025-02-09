//1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}

//3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let cnt = 0;
for (let val in salaries){
    cnt += salaries[val];
}
alert(cnt);

//4
function multiplyNumeric(obj){
    for(let val in obj){
        obj[val] *= 2;
    }
    
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  