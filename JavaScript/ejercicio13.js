/*Dado un vector de numero buscar si existen repetidos, almacenar el resultado en una variable boolean.
`nums=[1,2,2,3,4]`
`duplicado=true`
`nums=[1,2,3,4]`
`duplicado=false` */


let nums=[1,2,2,3,4];
let duplicado = false;
let set = {};
for(let i=0; i<nums.length; i++){
    if(set[nums[i]]){
        duplicado = true;
        break;
    } else {
        set[nums[i]] = true;
    }
}
console.log(duplicado); 
