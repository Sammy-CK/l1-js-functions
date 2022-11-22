// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add(){
    const a = 7;
    const b = 23;
        printValue(a + b);
}

add();

//TODO: create a function that takes in two values and adds them
function addN(a, b){
    printValue(a + b);
}

addN(7, 15);

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function addNum(a, b){
    printValue(a +b);
    return (a + b);
}

addNum(17, 10);

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const addNumber = function(){
        const a = 99;
        const b = 1;
        console.log(a + b);
        }

        addNumber();

//TODO: create a function that takes in two values and adds them
const addRNumber = function(a, b){
  printValue(a + b);
}

addRNumber(9, 11);

//TODO: create a function that takes in two values, adds them and returns the value of the addition
const addRanNumber = function(a, b){
    return (a + b);
  }
  
  addRanNumber(9, 11);

// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const sam = (f, l) => printValue(`${f} ${l}`);

sam("Sammy","Cherono");

//TODO: create a function that takes in two values and adds them
const kev = () => {
    printValue(`Kevin Cherono`);
}
kev();
//TODO: create a function that takes in two values, adds them and returns the value of the addition

const add2 = (x, y) => {
    let z = x + y;
    console.log(z);
    return z;
}

add2(4, 13);
