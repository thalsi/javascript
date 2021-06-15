
//1.Varblies
var a=546;
let ab=45;
const abc=45;

//gobal and local scpoe

var gobal='hi';//gobal

function gobalscpoe(){
    console.log(gobal);//gobal use here..
}
let f=gobalscpoe();
console.log(gobal);//gobal use here..

function localScpoe(){
    var local='local varble';
    console.log(local);//local use here..
}
// console.log(local);//local not use here..

//hosting 
x=5;
console.log(x);
var x;

//2.Data types
/*
    1.pimitive DataType
        1.number
        2.string
        3.boolean
        4.undefind
        5.null
        6.symbol
    2.non-pimative Datatype
        1.object
        2.function
        3.arrary
        4.data
        5.map
        6.set
        7.regexp    
*/

var num=45;
var str='hello';
var boole=false;
var y;
var n=null;
console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(boole));
console.log(typeof(y));
console.log(typeof(no_decrate));
console.log(typeof(n));

var obj={id:45,name: 'stringData'};
var arr=[223,43,54,65,7];
function fee(){

}

console.log(typeof(obj));
console.log(typeof(arr));
console.log(typeof function myFunc(){});

//3.Loops
var i=0;
while(5>i){
    console.log("while loop-->"+i);
    i++;
}
i=0;
console.log('while loop end');
do {
    console.log("do while loop-->"+i);
    i++;
} while (i<5);
i=0;
console.log('do..while loop end');

let share ={
    name:'ali mon',
    date:'20-04-1197',
    palces:'muvattupzha',
    age:34,
}
//for in
for(x in share){
    console.log("for..in objectt name:-"+x);
}
console.log('-----for..in END-------');

for(x in share){
    console.log("for..in objectt value:-"+share[x]);
}
console.log('-----for..in END-------');

//for..of
var shere2=[{name:'ali',age:34},{name:'ali',age:23}];
for(x of shere2){
    console.log("for..of "+x.age);
}
console.log('-------for..of END------');

var stringData="muvattupzha";
for (const i of stringData) {
        console.log("for..of "+i);
}
console.log('-------for..of END------');

var arr4=[34,34,54,65,67,78];
for (const i of arr4) {
    console.log("for..of "+i);
}
console.log('-------for..of END------');

var arr5=[34,34,54,65,67,78];
for (let [index, vaule] of arr5.entries()) {
    console.log("for..of-->indx="+index+" value="+vaule);
}
console.log('-------for..of END------');

//barck and condiune
for (let index = 0; index <5 ; index++) {//coundune
    if(index==2){
        console.log('contine');
        continue;
    }
    console.log(index);
}

for (let index = 0; index <5 ; index++) {//barck
    if(index==3){
        console.log('barck');
        break;
    }
    console.log(index);
}

//4.Control flow 
/*
    1.if..else
    2.swich
    3.try.catch
*/

var Data= document.getElementById("inputData").vaule;
var errorMassage=document.getElementById("error");
errorMassage.innerHTML='no error...';

function clicking(){
    console.log(Data);
    try{
        if(Data==""){
            throw "sorry this is string !";
        }
        if(Data==5){
            throw "sorry this is 5 press number !";
        }
    } catch(err){
        errorMassage.innerHTML=err;
        console.log(err);
    }
}


let anonum =function (){
    console.log('anonis functon call...');
}

let arrow =()=>{
    console.log('arrow function call...');
}

anonum();
arrow();
