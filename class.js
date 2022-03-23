class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = 'kolimunessa school';
    }
}

const student1 = new Student(101, 'Shuvo');
const student2 = new Student(102, 'Mahiya');
const student3 = new Student(103, 'Bappi');
console.log(student1.name,student2.name);
console.log(student3);