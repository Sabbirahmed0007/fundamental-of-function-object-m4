
const myName = "Sabbir Ahmed";
const myAge = 21;
const address = "Sylhet";
const phone = "017********";
const info ={myAge, myName, address, phone};
// console.log(info);


function printInfo(name){
    console.log(" Valo hoye jau", name);
}

printInfo(myName);


function addition (firstNum, secondNum){
    const sum = firstNum+ secondNum;
    return sum;
}

const numbers = addition(5, 9)
console.log(numbers);



/**
 * // there are 4 kinda functions
 * 
 * 1, No parameters , no return;
 * 2, Parameters , no return;
 * 3, no parameters, with return;
 * 4, with parameters, with return
 */

// No parameters, no return;

function shop (){
    console.log('Hello , shamela');
}

shop();


// parameters, no return;
function substact (x, y){
    console.log(x-y);
}

substact(5, 3);

// no parameters, with return
function giveMoney(){
    const  money = 500;
    return money;
}

const money =giveMoney();
console.log(money);


// parameters, , return 

function mult(firstNum, secondNum){
    const times = firstNum *secondNum;

    return times;
}

const total = mult(5, 3);
console.log(total);













