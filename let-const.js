


// let => We can re assign value but cannot re declare it
// const => We can not even re assign the value let alone re declare . 

const myName = 'Sabbir Ahmed';

// "includes";

// console.log(myName.includes('bb')); //To check is it available or not
// console.log(myName.includes('a'));

const arr =[ 'Sir', 'Madam', 'Student', 'Professor'];
// console.log(arr.includes('Honda'));

// Slice --------
//-----------------------
const pets = ['ant', 'camel', 'duck', 'elephant', 'cat', 'dog', 'rabit'];

// const sqrutinisedpets = pets.slice(2, 5);
// const favouritePets = pets.slice(4);
// console.log(sqrutinisedpets, favouritePets);

// splice
// -------------------------------
// splice(startIndex, deleteCount, insertItems)

// const result = pets.splice(2, 3); // To cut out the element from the array


// console.log(result, pets);
// pets.splice(1, 0 , 'rat');
console.log(pets);
pets.pop();
console.log(pets);
pets.shift();
console.log(pets, 'an element has been removed from the initial');
pets.unshift('hen');
console.log(pets, 'hen has been added at the first');


// -------------------------------------------------------------
//      OBJECT    ------
//--------------------------------------------------------------

const person = {
    names: 'Sabbir Ahmed',
    age: 21,
    address: 'Sylhet',
    phone: '017*********',
}

/// Dot notation

const phone = person?.phone;
console.log(phone);


/// Bracket notation
const number = person['phone']
const address = person["address"];
const name = person["names"]
const values = Object.values(person)
const keys = Object.keys(person)
console.log(number, address , name, values , keys);

// using for loop 
for (let i = 0; i<keys.length; i++){
    const key = keys[i];
    console.log(person[key]);
}
// using For of 
for (let key of keys ){
    // console.log(person[key]);
}

// using for in 
for (let i in person){
    console.log(i, person[i]);
}




