// console.log("Manish1")

// Using Date objects
const start = Date.now();




const name = "hellomanish"
const num = 24

console.log(`hello this is ${name.toUpperCase()} and he is ${num+1} year old.`)

const up = name.toUpperCase()
console.log(up)
console.log(name.charAt(4))
console.log(name.indexOf('o'))


//  "start": "nodemon index.js"
console.log("hellonodemon")



const nametrim = "     manish     "
console.log(nametrim);
console.log(nametrim.trim());



//Returns a random integer from 0 to 9:
let rnum = Math.floor(Math.random() * 10);
console.log(rnum);




//JavaScript Date Objects let us work with dates:
// const d = new Date();
const d = new Date("2022-03-25")
console.log(d);

const moonLanding = new Date();
console.log(moonLanding.getTime());


const end = Date.now();
const elapsed = end - start;
console.log(elapsed);
