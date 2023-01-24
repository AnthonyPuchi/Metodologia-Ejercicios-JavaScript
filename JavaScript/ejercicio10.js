//Convertir en un numero decimal un numero binario de 4 bits almacenado en un array.
//`binaryNumber=[0, 1, 0, 1]`


let binaryNumber = [0, 1, 0, 1];
let decimalNumber = 0;

for (let i = 0; i < binaryNumber.length; i++) {
    decimalNumber += binaryNumber[i] * Math.pow(2, binaryNumber.length - 1 - i);
}
console.log(decimalNumber);



