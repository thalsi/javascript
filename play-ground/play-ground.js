console.log('============== pay ground ===============');

console.log("------- Example 1-------");
function function1(){
    console.log('-->function 1');
}

function function2(){
    console.log('-->function 2');
}

function1();
function2();

console.log("------- Example 2-------");
function function3(){
    setTimeout(() => {
        console.log('-->function 3');
    }, 100);
}

function function4(){
    console.log('-->function 4');
}

function3();
function4();



setTimeout(() => {
    console.log("------- Example 3-------");
        
    let promis= new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve('frist one');
        }, 2000);
    });

    promis.then((res)=>{
        console.log(res);
        function5();
    });


    function function5(){
        console.log('-->function 5');
    }

   

}, 1000);