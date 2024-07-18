class Animal<T> {
    public age:number;
    public name:string;
    // public(default) , protected , private
    constructor(age:number , name:string){
        this.age = age;
        this.name = name;
    }

    bark(){
        console.log('어흥');
    }
}
const khTiger = new Animal(35,'kh 호랑이');
khTiger.bark();

class ParameterProperties {
    constructor (public a:string , protected b:string , private c:string , readonly d:string){}

    printProperties(){
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    }
}

let PP = new ParameterProperties('1','2','3','4');
PP.printProperties();

console.log(PP['b']);