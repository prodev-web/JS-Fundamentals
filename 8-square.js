const {argv} = require('node:process');
if(Number.isNaN(Number(argv[2]))){
console.log('Missing size');
}
else{
for (let size = 0; size < Number(argv[2]); size++){
console.log('X'.repeat(Number(argv[2])));
}
}
