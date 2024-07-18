function print(str:string) :void{
    console.log(str);
}

type Print = (s:string) => void;
/*
const print2 = (str:string):void => {
    console.log(str);
}
*/
const print2:Print = (str) => {
    console.log(str);
}

function hello(callback : (s:string) => void):void {
    callback("hello ts");
}

const hello2 = (callback:(s:string) => void) : void => {
    callback("hello ts");
}

const hello3: (callback:(s:string) => void) => void 
= (callback:(s:string) => void) : void => {
    callback("hello ts");
}
hello(print2);
type PrintFunction = (s:string) => void;
type HelloFunction = (callback:PrintFunction) => void

const hello4:HelloFunction = (callback) => callback("hello ts");

//restParameter
function restParameter(...m:number[]){
    console.log(m);
}
restParameter();
restParameter(1);
// restParameter(1,2,'3');

const spreadArr = [1,2,3,4,5]; // 1,2,3,4,5
restParameter(...spreadArr);

function normalFn(a:number , b:number){
    console.log(a,b);
}
// const spreadArr2:[number,number] = [11,22];
const spreadArr2 = [11,22] as const;
normalFn(13,14);
normalFn(...spreadArr2);
// 그냥 배열은 사용이 불가능. 개수 또한 맞아야함
// 튜플로 정의하거나
// as const 를 사용해 literal 화 + 불변 상태 처리

//
function objectDestructingFn({a,b,c}:{a:number,b:string,c:boolean}){
    console.log(a,b,c);
}
function arrayDestructingFn([a,b,c]:[number,string,boolean]){
    console.log(a,b,c);
}
function arrayDestructingFn2([a,...rest]:[number, ...number[]]){
    console.log(a, rest);
}
arrayDestructingFn2([1,2,3,4]);

const obj = {
    a : 1,
    b: '2',
    c: true
}
objectDestructingFn(obj);

function objectDfn2({a,...rest} : {
    a : number,
    [x:string] : number | boolean | string
}){
    console.log(a, rest);
}
objectDfn2(obj);