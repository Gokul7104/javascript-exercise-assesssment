const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.

//answer//
const countriesAPI = ("https://restcountries.com/v2/all")
const catsAPI = ("https://api.thecatapi.com/v1/breeds")
fetch(countriesAPI)
 .then(response => response.json())
 .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area} km²`);
      console.log('------------------------');
    })
  })
 .catch(error => console.error('Error:', error));