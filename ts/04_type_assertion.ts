// type assertion
function typeAssertion(strOrNumber:string|number) : number{
    return strOrNumber as number; // 실제 형 변환이 아닌 타입 검사용 목적
    // return<number>strOrNumber;
}
console.log(typeAssertion('1234'));

function typeAssertion2(number? : number) : number{
    return number!; // not null Assertion : 무조건 null 값이 아님
}
console.log(typeAssertion2());

// narrowing
function typeNarrowing(strOrNumber:string|number):void{
    if(typeof strOrNumber == 'string'){
        console.log(strOrNumber); // union 타입을 하나로 축소
    }
    else if (typeof strOrNumber == 'number'){
        console.log(strOrNumber);
    } else {
        let value:never;
        value = strOrNumber;
        throw new Error('Unexpected Value : ' + value);
        console.log(strOrNumber); // never , 존재 하지 않는 값
    }
}
typeNarrowing(1);
typeNarrowing('mkm');

let any:any = true;
typeNarrowing(any);

// 예외처리함수
function UnexpectedValueException(value:never) : never{
    throw new Error(`Unexpected Value : ${value}`);
    // return undefined
}

function fnNever(){
    while(true){
        break;
    }
    return undefined;
}