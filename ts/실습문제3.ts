// 1.
class Person {
    constructor (public name:string , public age:number , public address:string){}

    introduction(){
        console.log(`안녕 난 ${this.name}이라고해.${this.address}에 살고 나이는 ${this.age}야`);
    }
}
const mkm:Person = new Person('mkm',1234,'서울');
mkm.introduction();

// 2.
/*
class Pet{
    constructor (protected kind:string, protected name:string){}
}
class Hamster extends Pet{
    constructor (kind:string, name:string , private food?:string){
        super(kind,name);
    }

    info(){
        console.log(`이 햄스터는 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        if(this.food !=undefined){
            console.log(`주식은 ${this.food}를 먹습니다.`);
        }
    }
}
*/
class Pet {
    constructor(public kind:string , public name:string){}
}
class Hamster extends Pet{
    food;
    constructor (kind:string , name:string , food?:string){
        super(kind,name);
        this.food = food;
    }

    info(){
        console.log(`이 햄스터는 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        this.food && console.log(`주식은 ${this.food}를 먹습니다.`);
    }
}

const hamzzi:Hamster = new Hamster('페디그리 햄스터', '햄찌', '해바라기씨');
hamzzi.info();
//이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
//주식은 해바라기씨를 먹습니다.

const podong:Hamster = new Hamster('골든 햄스터', '포동');
podong.info();
//이 햄스터는 골든 햄스터종이며, 이름은 포동입니다.

// 3.
type Class = {
    [x:string] : string|number
}
const coin:Class = {
    ticker : 'BTC',
    market : 'KRW',
    description : '최초의 암호화폐'
}
//1) price속성 추가
coin.price = 10000000; //ok
//2) rank속성 추가
coin.rank = 1; // ok
//3) trade속성추가
// coin.trade = true; // error
// coin.trade = undefined; // error
// coin.trade = null// error

export {}