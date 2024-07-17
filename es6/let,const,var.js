function testScope(){
    var foo = 1;
    if(foo == 1){
        var poo = 2;
    }

    for(var bar = 3; true;){
        break;
    }

    console.log(foo);
    console.log(poo);
    console.log(bar);
}
//testScope();
function testScope2(){
    const foo = 1;
    if(foo == 1){
        let poo = 2;
    }
    for(let bar = 3; false;){

    }

    console.log(foo);
    console.log(poo);
    console.log(bar);
}
//testScope2();
// let vs const (변수 vs 상수)
const a = 1;
// a = 2; 상수
let b = 1;
b = 2;

var fn1 = function(){
    console.log('fn1');
}
fn1 = function(){
    console.log('new fn1');
}
const fn2 = function(){
    console.log('new const fn2');
}
/*
const fn2 = function(){
    console.log('new const fn2');
}
*/
fn2();