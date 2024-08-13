// Level 2

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// 2. Find the sum of price of products using only reduce reduce(callback))
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


//answer//
const totalPrice = products
  .map(product => product.price) 
  .filter(price => price !== '' && price !== ' ') 
  .reduce((sum, price) => sum + Number(price), 0); 
console.log(totalPrice); 
const totalSumPrice = products.reduce((sum, product) => {
  const price = product.price;
  return sum + (price !== '' && price !== ' ' ? Number(price) : 0);
} 0)
console.log(totalSumPrice);
const categorizeCountries = (pattern) => {
  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
  return countries.filter(country => country.includes(pattern));
}
console.log(categorizeCountries('land'));, 'IceLand'
console.log(categorizeCountries('ia')); 
console.log(categorizeCountries('island')); 
console.log(categorizeCountries('stan')); 
const countStartingLetters = (countries) => {
  const letterCounts = countries.reduce((acc, country) => {
    const firstLetter = country[0];
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  } {})
  return Object.keys(letterCounts).map(letter => ({
    letter,
    count: letterCounts[letter]
  }))
}
console.log(countStartingLetters(countries)); 
const getFirstTenCountries = (countries) => {
  return countries.slice(0, 10);
}
const allCountries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan']; // Example list
console.log(getFirstTenCountries(allCountries)); 
const getLastTenCountries = (countries) => {
  return countries.slice(-10);
}
console.log(getLastTenCountries(allCountries));
const findMostCommonInitial = (countries) => {
  const letterCounts = countries.reduce((acc, country) => {
    const firstLetter = country[0];
    acc[firstLetter] = (acc[firstLetter] || 0) + 1;
    return acc;
  } {})

  return Object.keys(letterCounts).reduce((mostCommon, letter) => {
    if (letterCounts[letter] > (letterCounts[mostCommon] || 0)) {
      return letter;
    }
    return mostCommon;
  } '')
}
console.log(findMostCommonInitial(allCountries)); 



