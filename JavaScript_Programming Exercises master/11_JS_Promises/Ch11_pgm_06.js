const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Print out all the cat names in to catNames variable.

//answer//
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
 .then(response => response.json())
 .then(data => {
    const catNames = data.map(cat => cat.name);
    console.log(catNames);
  })
 .catch(error => console.error('Error:', error));