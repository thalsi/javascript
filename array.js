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



