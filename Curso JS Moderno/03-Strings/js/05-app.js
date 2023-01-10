const producto = 'Monitor 27 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//.slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
//Slice no hace nada cuando el inicio es mayor que el fin
console.log(producto.slice(2,1));

//Alternativa para slice
console.log(producto.substring(0,10));
//Substring si funciona si el incio es mayor y toma el numero 
//de caracteres indicados despues de la ,
console.log(producto.substring(2,1));

const usuario = 'Jonathan';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));