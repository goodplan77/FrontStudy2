let arr = [1,2,3];
let a = arr[0];
let b = arr[1];
let c = arr[2];

let [d,e,f,g=12345] = arr; // 1 , 2 , 3 , 12345 (초기 설정 구문이 없으면 g = undefined)
console.log(g);
let [h,i] = [a,b];

const obj = {
    foo : 1,
    bao : 2
}
const foo = obj.foo; // 1 dot-notation
const bao = obj["bao"]; // 2 braket-notation

const {foo : foo1 , bao : bao1 , bar = 12345} = obj; // {foo : 1 , bao : 2}
console.log(foo1,bao1,bar); // bar : 12345 , 없으면 undefined

console.log("========================")

const sample_arr = [1,2,3,4];
const sample_obj = {name :'mkm' , job:'teacher'};

function test(a,...rest){ // 나머지 연산자
    console.log(rest);
}
test(); // []
test(1); // []
test(1,2,3); // [2,3]
test(sample_arr); // []
test(...sample_arr); // 전개 연산자 // 2,3,4
// 전개 연산자로 인해 test 에는 1,2,3,4 가 들어감
// 매개변수 형태가 a , ...rest 로 인해 a : 1 , rest : 2,3,4

const copy_arr = sample_arr; // 얕은복사
const copy_arr2 = [...sample_arr]; // 깊은복사

const human = sample_obj; // {name : 11 , job:22}
const human2 = {...sample_obj}; // 깊은 복사 (전개 연산자로 구조가 벗겨지고 , 이후 다시 객체로 저장)

// 구조 분해 할당 + REST 문법
const array = [1,2,3,4];
const [first, ...rest] = array;
// first = 1 , rest = [2,3,4]

const person = {name:'mkm',job:'teacher',firstName : '민'};
const {firstName,...rest2} = person; // 특정 속성을 제외하고 나머지 속성을 rest로 넣음
console.log(firstName , rest2);
// rest = {name:'mkm',job:'teacher'};

function printPerson({one,two,...rest}){
    console.log(one); // undefined
    console.log(two); // undefined
    console.log(rest); // person
}
printPerson(person);
// 해석
// 객체 형태는 속성 key 값 일치 여부가 중요함
// 매개변수로 넘어온 person 객체는 one, two 속성이 없기 때문에 전부 rest에 들어감
// const {one,two,...rest} = person;