// 타입 주석
// let 변수명:타입;
let num:number; // int num;
num = 12345;
// num = '12345';
num = num * 1;

// 배열 타입 주석
// typeof [] ==> object
let animals:string[];
animals = ['hamster','cat'];

// 객체 타입 주석
let animal:{name:string};
animal = {name:"햄스터"};

// 타입 추론
let animal2 = {name : 'cat' , age:11};
// animal2 = {name :'d',age:1234}

// 튜플
// 값 여러개를 묶어준다.

// 기존 배열
let numArr:number[];
numArr=[1,2,3];
console.log(numArr[2]); // 3
console.log(numArr[3]); // undefiend
numArr = [1,2,3,4];

let numTuple:[number,number,number]; // 0 1 2 번 인덱스에 number 자료형 총 3개 들어 가야함
numTuple = [1,2,3];
console.log(numTuple[2]);
//console.log(numTuple[3]);

let tuple:[number,string,boolean];
tuple = [1,'kh',true];

tuple.push(4);
tuple.splice(0,1);

console.log(tuple);
// 정적타입 검사.
// 런타임 이후 에러는 확인해주지 못함

let readonlyTuple:readonly[number,string,boolean];
readonlyTuple = [1,'kh',true];

// readonlyTuple.push(1); // 메서드 사라짐
let readonlyObject : {readonly name : string , age : number}; // age는 수정 가능
readonlyObject = {name : 'kh' , age : 11};
// readonlyObject.name = 'mkm';
readonlyObject.age = 15;
// readonlyObject['name'] = 'mkm';
readonlyObject['age'] = 15;

export {};