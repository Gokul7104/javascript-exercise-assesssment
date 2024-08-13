const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country

//answer//
const emptySet = new Set();
console.log(emptySet);
const setFromLoop = new Set();
for (let i = 0; i <= 10; i++) {
  setFromLoop.add(i);
}
console.log(setFromLoop); 
const setToRemoveFrom = new Set([1, 2, 3, 4, 5]);
setToRemoveFrom.delete(3);
console.log(setToRemoveFrom);
const setToClear = new Set([1, 2, 3, 4, 5]);
setToClear.clear();
console.log(setToClear);
const stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const stringSet = new Set(stringArray);
console.log(stringSet); 
const countryMap = new Map();
countries.forEach(country => {
  countryMap.set(country, country.length);
});
console.log(countryMap);