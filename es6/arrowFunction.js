function declareFn(a,b){ // 함수 선언
    return a*b;
}

const declareFn2 = function(a,b){ // 함수 표현식
    return a*b;
}

const declareFn3 = (a,b) => { // 함수 표현식
    return a*b;
}

// 축약 1 - 반환값만 있는 경우
const declareFn4 = (a,b) => a*b;

// 축약 2 - 매개변수가 하나만 있는 경우
const declareFn5 = a => a;


//-- 일반 vs this 함수
function callableFn(){
    console.log(this.name);
}
callableFn(); //global -> 호출 객체가 없기 때문

const obj1 = {
    name : '객체1',
    call : callableFn
}
obj1.call();

const obj2 = {
    name : '객체2',
    call : callableFn
}
obj2.call();

// 일반 함수 this : 함수 호출 주체(환경)에 따라 동적으로 달라짐

const arrowFn = () => {
    console.log(this);
}
arrowFn(); // {}
const obj3 = {
    name : '객체3',
    call : arrowFn
}
obj3.call(); // {}

// arrow 함수 this : this라는 값이 없기 때문에 , 상위 객체의 this를 찾아감

// 화살표함수 this바인딩
const obj4 = {
    name:'객체4',
    arrowFn : function(){
        //console.log(this.name);
        const getName = () => {
            return this.name; // obj4
        }
        const getName2 = () => {
            return this; //global
        }
        console.log(getName()); // undefined; 객체4;
        console.log(getName2()); // undefined; 객체4;
    }
}
obj4.arrowFn();

// 정리
// 일반 익명 함수 : 함수가 호출 될 때 동적으로 결정
// 화살표 함수 : 함수가 정의 될때 정적으로 결정. 함수 내에서 this 사용시 정의된 시점의 상위 스코프의 this 참조


// 콜백함수 callback
const obj5 = {
    name : '객체5',
    fn : function(callback){
        callback();
    },
    call : function(){
        this.fn(() =>{
            console.log(this.name)
        })
    }
}
obj5.call();
/*
const obj6 = {
    name : '객체6',
    call : function(){
        // this -> obj6
        setTimeout(()=>{ // 정적 호출
            console.log(this.name); // 객체6
        } , 1000)
        setTimeout(function(){ //동적 호출
            console.log(this.name); // undefined
        } , 1000)
    }
}
obj6.call();
*/

// 일반 함수 this 강제 바인딩
const obj7 = {
    name : '객체7',
    callableFn : function(){
        console.log(this.name);
        console.log(arguments); //parameter+@
    }
}
obj7.callableFn();
obj7.callableFn.call(obj1 , 1,2,3,4); // this 값 강제 바인딩 + rest 처리
obj7.callableFn.apply(obj2,[1,2,3,4]); // this 값 강제 바인딩 + 배열 형태
obj7.callableFn.bind(obj3)(); // this 값'만' 강제 바인딩 - () 을 통해 함수 호출?
