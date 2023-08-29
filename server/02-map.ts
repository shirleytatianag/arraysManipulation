const letters= ['a', 'b', 'c'];

//Forma de hacer recorrido sin map
// const newArray: string[]=[];
// for (let i = 0; i < letters.length; i++) {
//     const element= letters[i];
//     newArray.push(element+ '++');
// }

//forma de hacerlo con map

const newArray= letters.map(item => item + '++')

console.log('original', letters);
console.log('nuevo', newArray);