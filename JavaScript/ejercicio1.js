//Usando una variable contador y bucle que recorra el array, determinar el tamaño del siguiente array. 
//`nums = [7, 4, 0, 9, 7, 6, 3, 8]`

let nums = [7, 4, 0, 9, 7, 6, 3, 8];
let tam = 0;

for (let i = 0; i < nums.length; i++) {
    tam++;
}

console.log("El tamaño del array es: " + tam);
