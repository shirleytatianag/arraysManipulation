const letters: string[]=['a', 'b', 'c', 'd'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element)
}

console.log('dos')
letters.forEach(elemnt=> {console.log(elemnt)})