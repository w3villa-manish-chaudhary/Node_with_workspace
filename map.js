console.log("hello");


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('c', 3);


console.log(map1);


for (const [key,value] of map1){
    console.log(`${key} and ${value}`);
}


const obj1 = {
    "name" : "manish",
    "age" : 24,
    "mail" : "xyz@gmail.com"

}
for (const key in obj1){
    console.log(`${key}`);
}


