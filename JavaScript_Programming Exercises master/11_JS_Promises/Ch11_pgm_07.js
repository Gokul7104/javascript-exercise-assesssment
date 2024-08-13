const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.


//answer//
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;
    data.forEach(breed => {
      if (breed.weight.metric) {
        totalWeight += breed.weight.metric.split(' - ')[0];
        count++;
      }
    });
    const averageWeight = totalWeight / count;
    console.log(`The average weight of a cat in metric unit is ${averageWeight} kg`);
  })
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => b.area - a.area);
    const largestCountries = data.slice(0, 10);
    console.log('The 10 largest countries are:');
    largestCountries.forEach(country => console.log(country.name));
  })
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    const languages = {};
    data.forEach(country => {
      country.languages.forEach(language => {
        if (languages[language]) {
          languages[language]++;
        } else {
          languages[language] = 1;
        }
      })
    })
    const totalLanguages = Object.keys(languages).length;
    console.log(`There are ${totalLanguages} official languages in the world`);
  })