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


const el = document.querySelector('.mouse');
let lastMove = 0;

// When the mouse is being moved
function onMouseMove (e) {
  // Get the x and y coordinates
  x = e.clientX;
  y = e.clientY;
  
  // Save the last move time
  lastMove = Date.now();
}

// Update the mouse position based on x & y
function updateMouse (x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

function render (a) {
  // Check if last move was more than 500ms ago
  if (Date.now() - lastMove > 500) {
    // Generate a fake mouse position

    updateMouse(x, y);
  }
}

// Listen to mouse events
window.addEventListener('mousemove', onMouseMove);