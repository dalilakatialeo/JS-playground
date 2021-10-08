function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    console.log(number)
    number = parseInt(number) + step;
    // number = number + 1;
    numberElement.innerText = number;
    console.log(number);
}

// function subtract(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     // console.log("Found: ", step, number)
//     number = parseInt(number) - step;
//     // number = number - 1;
//     numberElement.innerText = number;
//     // console.log(number);
// }

// function multiply(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     // console.log("Found: ", step, number)
//     number = parseInt(number) * step;
//     // number = number + 1;
//     numberElement.innerText = number;
//     // console.log(number);
// }

// function divide(step) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     // console.log("Found: ", step, number)
//     number = parseInt(number) / step;
//     // number = number + 1;
//     numberElement.innerText = number;
//     // console.log(number);
// }

// function math(step, method) {
//     let numberElement = document.getElementById("number");
//     let number = numberElement.innerText;
//     if(method == 'subtract') {
//     number = parseInt(number) - step;
//     }
//     if(method == 'add') {
//     number = parseInt(number) + step;
//     }
//     if(method == 'multiply') {
//     number = parseInt(number) * step;
//     }
//     if(method == 'divide') {
//     number = parseInt(number) / step;
//     }
//     numberElement.innerText = number;
// }