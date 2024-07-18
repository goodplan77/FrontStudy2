const PI = 3.14;
// PI = 3.1456;

let x:'kh 수달' | 'kh 호랑이'  = 'kh 수달';
// let 으로 변수 설정 했지만 , 다른 값 설정이 안됨
x = 'kh 호랑이';

function pay(name:string , price:number , method:'card'|'bank') : 1|0{
    console.log(`${name}님이 선택하신 결제방법은 ${method}이고, 가격은 ${price}입니다.`);
    return 1;
}
// let any2:any = '1234';
pay('kh 웜뱃' , 10000 , 'card');
pay('kh 수달' , 10000 , 'bank');
// pay('kh 호랑이' , 10000 , 'point');
// pay('kh 호랑이' , 10000 , any2);

// 해결 1: 타입 직접 지정
let payInfo : {
    name : string,
    price:number;
    method:'card'
} = {
    name : 'kh 웜뱃',
    price : 10000,
    method : 'card'
};
pay(payInfo.name , payInfo['price'] , payInfo.method);

// 2. as 사용
let payInfo2 = {
    name : 'kh 웜뱃',
    price : 10000,
    method : 'card'
};

// 3. const 설정 - 속성을 모두 literal 로 설정 + 변경 불가능
let payInfo3 = {
    name : 'kh 웜뱃',
    price : 10000,
    method : 'card'
} as const;

pay(payInfo2.name , payInfo2['price'] , payInfo2.method as 'card');
pay(payInfo3.name , payInfo3['price'] , payInfo3.method);
