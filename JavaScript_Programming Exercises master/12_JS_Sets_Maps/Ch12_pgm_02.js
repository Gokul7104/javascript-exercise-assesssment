const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
// Find a intersection b
// Find a with b

//answer//
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const union = [...new Set([...a, ...b])];
console.log(union); 
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const intersection = a.filter(x => b.includes(x));
console.log(intersection); 
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const difference = a.filter(x => !b.includes(x));
console.log(difference); 