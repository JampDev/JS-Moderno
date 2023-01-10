const producto = '     Monitor 27 pulgadas  ';
console.log(producto);
console.log(producto.length);

//Eliminar espacios del inicio
console.log(producto.trimStart());
//Eliminar espacios al final
console.log(producto.trimEnd());

//Eliminar espacios al inicio y final
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());