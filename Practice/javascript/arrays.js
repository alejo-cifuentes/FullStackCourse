let arregloNombres = ['Aleajandro', 'Monica', 'Daniela', 'Chocolate'];
console.log(arregloNombres);

// adds new item
arregloNombres.push('Ramiro');
console.log(arregloNombres);

// deletes the last item
arregloNombres.pop();
console.log(arregloNombres);

// adds to the begining
arregloNombres.unshift('Felipe');
console.log(arregloNombres);

// deletes the first item
arregloNombres.shift()
console.log(arregloNombres);

// inserts in 1 and not delete any
let deleted = arregloNombres.splice(1, 0, 'Pistacho');
console.log(arregloNombres);
console.log('Removed items' + deleted);

// delete one
deleted = arregloNombres.splice(1, 1);
console.log('Removed items ' + deleted);
console.log(arregloNombres);

// insert one a delete one
deleted = arregloNombres.splice(1, 2, 'Trufa');
console.log('Removed items ' + deleted);
console.log(arregloNombres);

// gets the size of the array
console.log('The size is: ' + arregloNombres.length);

// prints the items in the array
arregloNombres.forEach((item, idx) => console.log(`The item is ${item} and has the position ${idx}`));

// prints a hi to each element map is not mutable
const arregloSaludos = arregloNombres.map(item => `Hello ${item}!!!`);
console.log(arregloNombres);
console.log(arregloSaludos);

// filter depents a condition
const filtered = arregloNombres.filter(item => String(item).startsWith('A'));
console.log('The follow items meet the filter condition: ' + filtered);

// find the first item that meets a condition
const find = arregloNombres.find(item => item.length > 7 && item.length < 10);
console.log(find);

const numbers = [1,5,4,2,15,50,22,13,2,5,78,9]
const suma = numbers.reduce((prev, current) => prev + current);
console.log('The sum of the items is: ' + suma);