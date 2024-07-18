type Person = {
    name : string;
    age : number;
}
type ID = string | number;
type strOrNumberArr = (string|number)[]

let person:Person;
person = {name : 'mkm' , age:15};

// interface
interface Animal {
    name : string;
    kind : string;
    birth? : Date;
}

type AnimalAliases = {
    name : string;
    kind : string;
    birth? : Date;
}

// extends
interface Cat extends Animal {
    // name : string;
    // kind : string;
    // birth? : Date;
    food : string;
}
const cat:Cat = {food:'츄르',name: 'coco' , kind:'cat'};

interface Bird{
    name : string;
}

interface Bird{
    // name : string;
    // name : number; -> error
    wings : number;
}
let bird1:Bird = {wings:4,name:'앵무새'};
// interface merge
// 중복 선언 형태로 추가 가능?
// 속성이 중복 되는 경우 타입이 같아야함 (다른 인터페이스에서 다르게 쓰면 에러)

// object intersection / union
type strOrNum = string | number;
// type strAndNum = string & number;
type Dog = AnimalAliases & {food:string}; // AnimalAliases 속성 + food 속성 = 객체 타입 속성 확장

const dog:Dog = {name : '꽃분이' , kind:'dog' , food : '개껌'};

//
type SuccessResponse = {
    status : boolean,
    data : any
}

type FailResponse = {
    status : boolean,
    errorMessage : string
}

type Response = SuccessResponse | FailResponse;

type bool = boolean;
type Num = number;

export default Response;
