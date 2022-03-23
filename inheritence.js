class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
// inherite Parent class with extends

class Child extends Parent{ 
    constructor(name){
        super(); // calls Parent's constructor()
        this.name = name; 
    }
    getFullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby, baby.getFullName());
console.log(baby2.getFullName());