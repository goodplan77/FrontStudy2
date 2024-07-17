// 1. any type
let any:any = undefined;
any = 1;
any = 'mkm';

let str:string;
let num:number;
let undef:undefined;

str = any;
num = any;
undef = any;

// 2. unknown Type
let unknown:unknown;
unknown = 1;
unknown = 'mkm';

// str = unknown;
// num = unknown;
// undef = unknown;

// 3. union type
let stringOrNumber : string | number;
stringOrNumber = "Union Type";
stringOrNumber = 12345;
// stringOrNumber = true;

let unionArr : (string | number | boolean)[];
unionArr = [1,2,3,4,5,6,"7","8","9","10",true,false]

export {str};