const {argv} = require('node:process');
let num = Number(argv[2]);
let fact = 1;
function calFact(num){
fact *= num;
num -= 1;
if(num === 1){
return fact;
} else{
return calFact(num);
}
}
if(Number.isNaN(num) || num === 0){
console.log(1);
} else{
console.log(calFact(num));
}
