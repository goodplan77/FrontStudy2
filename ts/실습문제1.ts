// 1.
let animal:string[];
animal = ['panda','cat','wombat','frog','hamster'];
let human : {name : string, age : number, height: number, married : boolean}
human = {name : 'mkm', age : 25, height: 180.5, married : false}

// 2.
let zoo : {
    animals : string[],
    total   : number,
    isClosed : boolean,
    location : string,
    masterInfo : {
        name : string,
        age : number,
        height : number
    }
}
zoo = {
    animals : ['panda','cat','wombat','frog','hamster'],
    total   : 120,
    isClosed : false,
    location : "용인",
    masterInfo : {
        name : 'mkm',
        age : 25,
        height : 180.5
    }
};

// 3.
const reponse : [number , string] = [200 , "response success"];
//const reponse : [number , string] = [404, "Page not found"];
//const reponse : [number , string] = [500, "server error"];

// 4.
/*
let array:(string|number|boolean|undefined|object)[]
array = [12345, 'mkm', true, undefined]; // ok
array = ['mkm' , 12345, true]; // ok
array.push({name : 'mkm'}); // ok
*/
// 5.
//Q1. test1이라는 변수에는 undefined를 넣을 수 있습니다.
//    '1234'라는 값도 넣을수 있죠. 
//    1234를 넣으면 컴파일 에러가 발생하네요.
//    true값을 넣어도 컴파일 에러가 발생하네요.
//    test1의 타입은 무엇일까요?
let test1: (undefined|string)  = undefined; // ok
test1 = '1234'; // ok
// test1 = 1234; // compile error
// test1 = true; //compile error

//Q2. test2에는 true값을 넣을수 있습니다.
//    test1에 test2변수를 넣을수도 있죠.
//    test2는 UnionType은 아니고 , boolean타입 또한 아닙니다.
//    test2는 무슨 타입일까요? 
let test2 : any = true; // boolean(x) , UnionType(x)
test1 = test2; // ok

//Q3. test3에는 undefined값을 넣을수 있습니다.
//    test1에 test3을 넣으면 에러가 발생하네요
//    test3은 undefined타입이나 Union Type은 아닙니다.
//    test3의 타입은 무었일까요?
let test3 : unknown = undefined; // undefined (x) , UnionType(x)
// test1 = test3; // compile error

// 6.
const apply:(a:number,b:number)=>number = (a,b) => a+b;

// 7.
// 파라미터와 반환형 설정도 직접작성 추가가
let data:string;

function racoonInfo (name:string,weight:number,gender:string,neutering?:boolean):string {
    let answer = "이름 : " + name + " , 무게 : " + weight + " , 성별 : " + gender;
    if(neutering != null){
        answer += " , 중성화 : " + neutering;
    }
    return answer;
}
 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

// 8.

const array:(string|number)[] = ['1',2,3,4,'5'];
function sum(array: (string|number)[]) : number{
    // 매개변수로 들어온 배열을 반복문을 통해 모두 더한 후 더한 값을 반환
    var sum = 0;
    for(var temp of array){
        sum += Number(temp);
    }
    return sum;
}
const total = sum(array);
console.log(total); // 15

// 9.
function abc(value:(string|string[])):(number|number[]){
    if(typeof(value) == "object"){
        let result:number[] = [];
        for(let temp of value){
            result.push(Number(temp));
        }
        return result;
    } else {
        return Number(value);
    }
}

let test = ["123","12345"];
console.log(abc(test));

export {}