function greet(name:string):void{
    console.log('안녕'+name);
}
greet('어머니');

let b:() => number = function ():number{
    return 1;
};
// Optional Parameter
// :{name:string}
let arr = [1,2,3,4,5];
arr.forEach((value,index,array)=>{
    console.log(value);
});
function fnOptional(a:number , b?:number) : number{
    // return a * b; -> b:undefined 일 수 있음
    // if(b != undefined)
    //     return a*b;
    // return (b!=undefined) ? a*b : 0;
    return b ? a*b : 0;
}
fnOptional(1);
fnOptional(1,2);
//fnOptional(1,2,3);
//fnOptional();