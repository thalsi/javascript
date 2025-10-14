const [x,y,z]=[10,20,30];
const [a,b=5]=[10,20,30];
console.log(x, y, z);
console.log(a, b);


const {name, age=20}={name :'ali'};

console.log(name, age);

const user = { info: { fname: 'Sara', city: 'Kochi' } };
const { info: { fname, city } } = user;
console.log(fname, city); // Sara Kochi


