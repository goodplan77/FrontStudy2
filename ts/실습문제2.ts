// 1.
const favorite1:favorite = '치킨';
const favorite2:favorite = '햄버거';
const favorite3:favorite = '피자';

type favorite ='치킨'|'햄버거'|'피자' ;

// 2.
type Print =(name:string , favorite:favorite) => void;
function print(name:string , favorite:favorite) :void {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}

// 3.
const academy : {
    name : 'kh',
    class : string[],
    location? : string,
    manager? : {
        name : string,
        position : string
    }
} = {name : 'kh', class:['a','b','c','d','e'] , location : '강남' , manager : {name:'mkm', position:'ceo'}};

// 4.
// type1과 type2를 동시에 관리하는 타입별칭 1개
const type1:typeA = {mbti : 'ISTP', feature : ['망상가', '공감능력 부족'], vocation : '데이터분석가'};
const type2:typeA = {mbti : 'INTJ', feature : ['완벽주의자', '무신경']};
type typeA = {
    mbti : string,
    feature : string[],
    vocation? : string
}
// type3과 type4를 동시에 관리하는 타입별칭 1개
const type3:typeB = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'] };
const type4:typeB = {mbti : 'ESFJ' , bestGunghab : ['ISFP', 'ISTP'] , worstGunghab : 'ENFJ' };
type typeB = {
    mbti : string,
    bestGunghab : string[],
    worstGunghab? : string
}

// 위에서 구한 타입별칭을 활용하여 type5를 관리할 수 있는 타입별칭 만들기
const type5:typeC = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'], feature : ['망상가', '공감능력 부족']  }; 
type typeC = typeA & typeB ;

// 5.
//mkm은 Teacher인터페이스로 관리합니다. 
//karina,winter는 Singer인터페이스를 선언하여 관리합니다.
//Teacher와 Singer의 공통속성은 제거 후  Person인터페이스에만 정의합니다.

// 다음 object를 보고 구현해야할 적절한 interface를 정의하시오
const mkm:Teacher = {name : 'mkm', married : false, major: 'it', classRoom : 'C' , carrer:10 };
const karina:Singer = {name : '카리나', married : false, songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };
const winter:Singer = {name : '윈터', songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };

interface Teacher extends Person{
    major : string;
    classRoom : string;
    carrer : number;
}

interface Singer extends Person{
    songs : string[];
    group : string;
}

interface Person{
    name : string;
    married? : boolean;
}

// 6.
type Person1 = {
    name : string,
    age : number,
    location : string,
}
type Fn2 = (person:Person1) => void;

const fn2:Fn2 = ({name,age,location}) => {
    console.log(`${location}에 사는 ${name}은 ${age}살입니다.`)
}

const person:Person1 = {
    name : 'mkm',
    age : 35,
    location : '강남'
}
fn2(person); // 강남에 사는 mkm은 35살입니다.

// 7.
type Obj = {
    name : 'mkm',
    printName : (callback : (s:string) => void) => void, 
    call : () => void
}
const obj:Obj = {
    name : 'mkm', 
    printName: function(callback) {        
        callback(this.name);
    },
    call : function() {
        this.printName((something)=> {
            console.log(something);
        })
    } 
};
obj.call(); // mkm

// 8.
type Fn8 = ([first,...rest]:[number,...number[]]) => number[]
const fn:Fn8 = ([first,...rest]) => {
   return rest.map(value => value + first);
}
// fn([]) // error
fn([1]); // []
fn([1,2]); // [3]
fn([1,2,3]); // [3,4]
fn([1,2,3,4]); // [3,4,5]

console.log(fn([1]));
console.log(fn([1,2]));
console.log(fn([1,2,3]));
console.log(fn([1,2,3,4]));

export {};
