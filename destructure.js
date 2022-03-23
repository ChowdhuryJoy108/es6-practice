const person = {
    name:'jack william',
    age: 17,
    job:'facebooker',
    gfName:'Ema Watson',
    address:'kochu khet',
    phone: "01781667647",
    friends: ['tom hank', 'Tom Cruz']
}
const {friends} = person;

console.log(friends);
console.log(person.friends[1]);


const complexObject = {
    name : 'abc',
    info:{
        address:'kola bagan',
        leader: 'tiger leader'
    }
}
const { leader } = complexObject.info;
// const { phone }= person;
// const { job } = person;

// const gfName = person.gfName
// const phone = person.phone;

// const {phone, gfName, job, address } = person;

//  console.log(gfName, phone, job , address);
 console.log(leader);
// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);


// array destructure
// const friends = ['sakib khan', 'arman khan', 'amir khan', 'salman khan', 'shahrukh khan'];
// const [chotoFriend,...restFriend] = friends;
// console.log(restFriend);