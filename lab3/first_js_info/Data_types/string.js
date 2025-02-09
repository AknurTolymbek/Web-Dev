//1
alert(ucFirst("john"));

function ucFirst(str){
    if(!str) return str;
    return str[0].toUpperCase() + str.slize(1);
}

//2
function checkSpam(str) {
    let low = str.toLowerCase();
    if(low.includes('viagra') || low.includes('xxx'))
        return true;
    return false;
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

//3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

//4
function extractCurrencyValue(str){
    let num
    num = str.slice(1);
    return +num;
}