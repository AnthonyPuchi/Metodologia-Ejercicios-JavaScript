//concatenar con cada elemento posterior del array 
//nums = [0, 2, 4, 8]; debe imprimir en pantalla: 
//00 02 04 08 
//20 22 24 28 
//40 42 44 48 
//80 82 84 88


let nums = [0, 2, 4, 8];
let concatenated = "";
for (let i = 0; i < nums.length; i++) {
  for (let j = i; j < nums.length; j++) {
    concatenated += nums[i] + "" + nums[j] + " ";
  }
}
console.log(concatenated);
