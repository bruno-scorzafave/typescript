"use strict";
let nvalor;
let svalor;
let uvalor;
uvalor = 10;
svalor = '20';
// typecast
nvalor = Number.parseInt(svalor);
//type assertion
nvalor = uvalor;
svalor = uvalor;
console.log(svalor);
console.log(typeof (svalor));
