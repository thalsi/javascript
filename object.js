/*
object create 
    1. letral Object
    2. instance of Object
    3. object counstructer
*/
let obj = { name: "ali mon", age: 34 }; //1. letral object
console.log(obj);

let obj1 = new Object(); //2. instance of object
obj1.id = 34;
obj1.name = "thalsi";
console.log(obj1);

function emp(id, name) {
  this.id = id;
  this.name = name;
}

let obj3 = new emp(23, "Ajamal"); //3. object counstructer
console.log(obj3);

/*
propartys
*/
console.log(obj.name);
console.log(obj["name"]);

/*
1. for..in
2. object.keys()
3. object.getOwnpropartynames()
*/

// for..in
console.log("---for in----");
for (const i in obj) {
  console.log(i);
  console.log(obj[i]);
}

//Object.keys
console.log(Object.keys(obj));

//Object.getOwnporpatynames()
console.log(Object.getOwnPropertyNames(obj));

/*
=============================== Methrods ==================================
*/

//Object.assign()
let target = { a: 4, b: 5 };
let source = { c: 6, b: 8 };
console.log(Object.assign(target, source));
// console.log(a);
// console.log(b);
