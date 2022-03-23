const hubby = 'Rudraxmi Sarker';
// hubby = 'omor sunny'; //  it will print error
console.log(hubby);

const number = [12,45];

number[1] = 88; // we can update the value of the array like this . 
number.push(12);

// number = ['sunny','salman', 'amit']; //if we decleared an array with 'const' thn we can't change the whole array 

const nayok = { 
    name: 'sakib',
    phone: 67647
};

nayok.name = 'joy';
nayok['phone'] = 45545;
// console.log(number);
// console.log(nayok);


let patientName = 'Rahim Chacha';
patientName = 'fatima khala'
console.log(patientName);
let sum= 0 ;
for(let i = 0 ; i<10 ; i ++){
    
    sum = sum + i;
}

//console.log(i); 
//  we can not access i here because we have decleared 'let i = 0' as we know let is block scope so i will not be available outside the block {}. & thats the difference between ' let and var' // 

console.log(sum);