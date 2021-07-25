/*

An array is a data structure that contains a group of elements.

*/

userId = [10, 20, 30, 40, 50, 60, 70];
userName = ["ali", "aju", "ajumal", "shammer", "shabari"];

//array length
console.log("Array length = " + userId.length);

//Array index postion

console.log("index postion = " + userName[2]);
console.log("index postion = " + userName[userName.length - 2]);

//loop of array
//arry loop are main three type
//1. for loop
//2.forEach
//3.for..of - iterable objects and defines a new construct for traversing data, the for...of statement.

//for loop
for (let index = 0; index < userName.length; index++) {
  console.log("for loop =" + userName[index]);
}

//forEach
userName.forEach((element, index) => {
  console.log("ForEach =>" + element + " index=>" + index);
});

//for..of
for (const val of userName) {
  console.log("for of => " + val);
}

//Add an item to the end of an Array

userName.push("oragen");
console.log("item add end of an arrary=> " + userName);

//Remove an item from the end of an Array
userName.pop();
console.log("remove item end of an array=> " + userName);

//remove item form binning of an array
userName.shift();
console.log("remove item binning of an array=> " + userName);

//Add item form binning of an array
userName.unshift("helloo");
console.log("add item form binning of an array=> " + userName);

//Find the index of an item in the Array
console.log("Find the index =>" + userName.indexOf("ajumal"));

//Remove an item by index position
console.log("Remove an item by index position-->" + userName.splice(1, 2));
console.log(userName);

/*================================= Array Operations ====================================*/

person = ["Ali mon", "Ajas", "Aji", "shkker", "Ammu", "shihab", "Princes"];

//1. index number
console.log(person[3]);
console.log(person.length - 2);

//2. Array loops
for (let index = 0; index < person.length; index++) {
  console.log(person[index]);
}

person.forEach((value, index) => {
  console.log(value);
  console.log(index);
});

for (const i of person) {
  console.log(i);
}

//4. Add an Item to the End of Array
person.push("Jijo");

//4. Remove an Item to the End of Array
person.pop();

//5. Remove an item Form the biginning of Array
console.log(person);
person.shift();
console.log(person);

//6. Add item form the bignner an Array
console.log(person);
person.unshift("Karthika");
console.log(person);

//7. find the index of an Array
console.log(person);
let indexof = person.indexOf("Ammu");
console.log(indexof);

//8. Remove an item from of index postion
console.log(person);
person.splice(1, 1);
console.log(person);

//9.Remove ana items form of index postion
let indexNumber = 2;
let numberOfItems = 3;
console.log(person);
console.log(person.splice(indexNumber, numberOfItems));
console.log(person);

//10.Copy of Array
console.log(person);
let copyArray = person.splice();
console.log(copyArray);

console.log(Object.keys(person));

/*================================= Array Methord ================================*/
let a = ["a", "b", "c", "d", "z", "x"];
let b = ["e", "f", "g"];
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// 1.concat
console.log(a);
console.log(b);
let con = a.concat(b);
console.log(con);

//2. fill
console.log(a.fill(99, 3, 5)); //start to end
console.log(a.fill(99, 1)); //start
console.log(a.fill(66)); //all

//3.filter

let newFilter = words.filter((element) => {
  console.log(element);
  if (element.length < 6) {
    return element;
  }
});
console.log(newFilter);

let newFilter1 = words.filter((element) => element.length > 6);
console.log(newFilter1);

//4. find()
let newFind = words.find((ele) => ele.length > 6);
console.log(newFind);

//5.findIndex()
console.log(words.findIndex((ele) => ele.length > 6));

//6. includes()
console.log(words.includes("elite"));

//7. join()
console.log(words.join());
console.log(words.join(""));
console.log(words.join("-"));

//8. keys()
console.log(words.keys());
for (const i of words.keys()) {
  console.log(i);
}

//9. lastindexOf()
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));
console.log(animals.lastIndexOf("Tiger"));

//10. map()
let newMap = animals.map((ele) => ele + " animals");
console.log(newMap);

//11. reduce()
const array1 = [1, 2, 3, 4];
const sum = (a, b) => a + b;
console.log(array1.reduce(sum));
console.log(array1.reduce(sum, 5));

//12. reverse()
console.log(array1.reverse());

//13. sort()
let num = [3, 5, 7, 4, 2, 1];
console.log(num.sort());
console.log(
  num.sort((a, b) => {
    console.log("fast-->" + a);
    console.log("second -->" + b);
  })
);

var arr = ["a", "b", "c", "d", "e"];
for (const i of arr) {
  console.log(i);
}
for (const i of arr.values()) {
  console.log(i);
}
