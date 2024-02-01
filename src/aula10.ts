let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor=10;

svalor='20';

// typecast
nvalor=Number.parseInt(svalor);

//type assertion
nvalor=<number>uvalor;
svalor=<string>uvalor;

console.log(svalor);
console.log(typeof(svalor));
