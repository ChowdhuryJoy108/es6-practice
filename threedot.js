const ages = [11,13,17,18];
const ages2 = [15,16,12];
const ages3 = [25,22,19];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

// ES6 ...
const allAges2 = [...ages, ...ages2,5, ...ages3]

// console.log(allAges);
// console.log(allAges2);


const business = 650;
const minister = 450;
const sochib = 350;

const takaPoisa = [650,450,250,850];

// const maximum = Math.max(business,minister,sochib);
const maximum2 = Math.max(...takaPoisa); // 850
// console.log(maximum);
console.log(maximum2);