
// get document by the button id
let countEl = document.getElementById("counter-id");

// get document by the paragraph id
let akwaaba = document.getElementById("welcome-el");

// get document by the save id
let saveEl = document.getElementById("save-el");

// declare count variable &
// initialise to 0
count = 0;

// declaring and defining
// increment function
function increment() {
    count += 1;
    countEl.innerText = count;
}

//declare name variable &
// set it to your name
let myName = "Joe Kelly";

// declare a greeting variable &
// set to Welcomeback
let greeting = "Welcome back ";

//concatenate greeting & name 
let myGreeting = greeting + myName;

// set 
akwaaba.textContent= myGreeting;


function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    // console.log(count);
}
