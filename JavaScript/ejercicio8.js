//Invertir el orden de una cadena de texto almacenada en una array, 
//considerar que el tamaño de la cadena es un numero impar
//world=[’s’,’o’,’n’,’a’,’c’,’n’,’e’,’u’,’c’]

let world = ['s','o','n','a','c','n','e','u','c'];
let n = world.length;
for (let i = 0; i < (n-1)/2; i++) {
  let temp = world[i];
  world[i] = world[n - i - 1];
  world[n - i - 1] = temp;
}
console.log("Cadena invertida: ", world);


