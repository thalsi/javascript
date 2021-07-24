/*

An array is a data structure that contains a group of elements.

*/


userId=[10, 20, 30, 40, 50, 60, 70];
userName=['ali', 'aju', 'ajumal', 'shammer', 'shabari'];

//array length
console.log("Array length = "+userId.length);

//Array index postion

console.log("index postion = "+userName[2]);
console.log("index postion = "+ userName[userName.length-2]);

//loop of array
//arry loop are main three type
//1. for loop
//2.forEach
//3.for..of - iterable objects and defines a new construct for traversing data, the for...of statement.

//for loop
for (let index = 0; index < userName.length; index++) {
    console.log("for loop ="+userName[index]);
}

//forEach
userName.forEach((element, index) => {
    console.log("ForEach =>"+ element +" index=>"+index);
});

//for..of
for(const val of userName){
    console.log("for of => "+ val);
    
}

//Add an item to the end of an Array

userName.push('oragen');
console.log("item add end of an arrary=> "+userName);

//Remove an item from the end of an Array
userName.pop();
console.log("remove item end of an array=> "+userName);

//remove item form binning of an array
userName.shift();
console.log("remove item binning of an array=> "+userName);

//Add item form binning of an array
userName.unshift('helloo');
console.log("add item form binning of an array=> "+userName);

//Find the index of an item in the Array
console.log("Find the index =>"+userName.indexOf('ajumal'));

//Remove an item by index position
console.log("Remove an item by index position-->"+userName.splice(1,2));
console.log(userName);


/*=================================Second Time Lrean====================================*/

person=['Ali mon', 'Ajas' ,'Aji', 'shkker', 'Ammu', 'shihab', 'Princes'];

//1. index number
console.log(person[3]);
console.log(person.length-2);

//2. Array loops
for (let index = 0; index < person.length; index++) {
    console.log(person[index]);
}

person.forEach((value, index)=>{
    console.log(value);
    console.log(index);
})

for(const i of person){
    console.log(i);
}

//4. Add an Item to the End of Array
person.push('Jijo');

//4. Remove an Item to the End of Array
person.pop();

//5. Remove an item Form the biginning of Array
console.log(person);
person.shift();
console.log(person);

//6. Add item form the bignner an Array
console.log(person);
person.unshift('Karthika')
console.log(person);

//7. find the index of an Array
console.log(person);
let indexof=person.indexOf('Ammu')
console.log(indexof);

//8. Remove an item from of index postion
console.log(person);
person.splice(1,1);
console.log(person);

//9.Remove ana items form of index postion
let indexNumber=2;
let numberOfItems=3;
console.log(person);
console.log(person.splice(indexNumber,numberOfItems));
console.log(person);

//10.Copy of Array
console.log(person);
let copyArray = person.splice();
console.log(copyArray);

console.log(Object.keys(person));