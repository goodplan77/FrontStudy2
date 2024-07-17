function sayHi(){
    console.log('hello module');
}
//export {sayHi};

const abc = "abcde";
export {sayHi , abc};

export const fn1 = (a) => {console.log(a)};
export function fn2(b){
    console.log(b);
}

export default abc;
//export default fn1;
