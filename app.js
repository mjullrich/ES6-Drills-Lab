// ES6 DRILLS

// 1. Template Literals & Default Value


function favMovie1(movie, name) {
    console.log(`${name}'s Favorite movie is ${movie}`);
}
favMovie1();
favMovie1('Frozen', 'Maryann');
favMovie1('Frozen');
favMovie1();



// Arrow Functions

// 1. ES6 Arrow FUnction

let favMovie2 = (movie, name) => {
    console.log(`${name}'s Favorite movie is ${movie}`);
}

favMovie2('Frozen', 'Maryann');


// 2. Concise Body

let favMovie3 = (movie, name) => console.log(`${name}'s Favorite movie is ${movie}`);

favMovie3('Frozen', 'Maryann');



function nameSplit() {
    let fullName = "Maryann Ullrich".split(' ');
    firstName = fullName[0],
        lastName = fullName[fullName.length - 1];
    console.log(firstName);
    console.log(lastName);
}
nameSplit()


let nameSplit2 = () => {
    let fullName = "Maryann Ullrich".split(' ');
    let firstName = fullName[0];
    let lastName = fullName[fullName.length - 1];
    console.log(firstName);
    console.log(lastName);
    return firstName + " " + lastName;
    
}
let myName = nameSplit2()
console.log(myName);


// Spread Syntax

function me(name, location, favFood) {
    console.log(name + " " + location + " " + favFood + " ");
}
let myArray = ['Maryann', 'Texas', 'Quesadillas'];
me(...myArray);


let whatEver = (name) => {
let words = "Maryann is from Texas";
let chars = [...words];
console.log(chars);
};
whatEver()

// sample concise body shorthand with object literal

let getStats = (a, b) => ({
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b
});
let result = getStats(4, 2);
console.log(result);

// destructuring object returns

let destructuring = (a, b) => ({
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b
});

let {sum, difference, product, quotient} = destructuring(4, 2);
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);