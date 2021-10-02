// console.log("Hello, world!");

// let username = "Hayley";
// console.log("Hi, " + username);

// let num1 =3;
// let num2 =4;
// let total = num1 +num2;
// console.log(total);

// function example() {
//     console.log("I'm a function!");
// }

// example()

// function addition(x,y) {
//     // let x = 2;
//     // let y = 6;
//     let result = x + y;
//     console.log(result);
// }

// addition(1,9)

function showName() {
    console.log("Cool name!");
    let username = document.getElementById('name-text').value;
    console.log("Hi, " + username)
}

showName(0)

for (let count = 0; count < 10 ; count++) {
    console.log(count);
}

let pets = ["Chilli", "Rex", "Roary", "Fleur"];
console.log(pets);
pets.push("Ivy");
console.log(pets);
console.log(pets[0]);
console.log(pets[3]);

for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}

pets.forEach(pet => {
    console.log(pet);
});

let pet = "Ivy";

if (pet == "Chilli") {
    console.log("OMG you are the cutest!");
} else if (pet == "Ivy") {
    console.log("Naaaaaw cute bow.");
} else {
    console.log("OMG so cute.");
}