type User = {
    name : string,
    age : number , 
    interest : string[]
}
type UserList = {
    [x:string] : User
}
const responseData:UserList = {
    "user01" : {
        name : "kh 호랑이",
        age : 50,
        interest : ['낮잠']
    } , 
    "user02" : {
        name : "kh 수달",
        age : 5,
        interest : ['잠수']
    }
}

type Class = {
    [x:string] : string | number
    studentCount : number
    name : string
    // 전체 속성이 string 혹은 number 타입으로 지정 가능
    // studentCount 속성은 number 타입으로만.

    // 단 , [x:string] : string 
    // studentCount : number
    // 형식의 타입 지정은 불가능
}
const responseData2 : Class = {
    name : 'kh acacdemy',
    classRoom : 'C CLASS',
    teacher : 'mkm',
    student1 : '...',
    //...
    studentCount : 30
}

// ReturnType : ts Utily Type
function foo() : {a:number , b:number}{
    return {a:1,b:2}
}

type FooReturnType = ReturnType<typeof foo>;

type A = {
    a : string
}

type B = {
    b : number
}
function checkIn(obj: A|B){
    if("a" in obj){
        return obj.a;
    }
    else if ("b" in obj){
        return obj.b;
    }
}
const date = new Date();
console.log(date instanceof Date);