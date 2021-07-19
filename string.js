// ================= 6. string ===================

let str="hello world";
let strObj= new String("hello world..")

console.log(str);
console.log(strObj);

// charAt()
console.log("charAt = "+str.charAt(2));

//concat()
s1="hello"
s2=" walod"
s3=s1.concat(s2);
console.log("concat = "+s3);

//indexOf
console.log("indexOf = "+ str.indexOf('new'));

//lastIndexOf
console.log("lastIndexOf = "+ str.lastIndexOf('world'));

//toLowerCase
console.log("toLowerCase = "+ str.toLowerCase());

//toUpperCase
console.log("toUpperCase = "+ str.toUpperCase());

//slice(beginIndex, endIndex) 
let slice1="Hello wold"
var slice=slice1.slice(5,8)
console.log("slice(beginIndex, endIndex)  = "+ slice );

//trim
let trm="    javascrpit    "
console.log("trim = "+ trm.trim());

//split

let spli="the world best javascrpit"
console.log("split = " + spli.split(' '));
console.log("split = " + spli.split(' ')[1]);
