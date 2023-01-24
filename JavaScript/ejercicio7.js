//Invertir el orden de una cadena de texto almacenada en una array, 
//considerar que el tamaño de la cadena es un numero par. 
//world=[’o’,’ñ’,’e’’l’,’i’,’u’,’q’,’a’,’y’,’a’,’u’,’g’]

let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];
let n = world.length;
for (let i = 0; i < n / 2; i++) {
  let temp = world[i];
  world[i] = world[n - i - 1];
  world[n - i - 1] = temp;
}
console.log("Cadena invertida: ", world);


