function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, sunNumbers){
    return sunNumbers(num1, num2)
}

console.log(calc(2, 2, sum));

setTimeout(function(){
    console.log("Hola Mundo");
}, 5000)

function gretting(none){
    console.log(`Hola ${none}`);
}

setTimeout(gretting, 2000, "Oscar");