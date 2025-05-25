const {argv} = require('node:process');
let num = Number(argv[2]);
function calFact(n){
if(n <= 1) return 1;
return n * calFact(n - 1);
}
if(Number.isNaN(num) || num === 0){
console.log(1);
} else{
console.log(calFact(num));
}
