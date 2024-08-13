// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// *** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
]

// *** Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]


//answer//
const countries = [
    {
      name: 'Finland',
      capital: 'Helsinki',
      population: 5527573,
      languages: ['Finnish', 'Swedish'],
    }
  ]  
 
const sortCountriesByName = (countries) => {
    return countries.sort((a, b) => a.name.localeCompare(b.name))
  };
  
  
  const sortCountriesByCapital = (countries) => {
    return countries.sort((a, b) => a.capital.localeCompare(b.capital));
  };
  
  
  const sortCountriesByPopulation = (countries) => {
    return countries.sort((a, b) => b.population - a.population);
  };
  
  console.log(sortCountriesByName(countries));
  console.log(sortCountriesByCapital(countries)); 
  console.log(sortCountriesByPopulation(countries)); 
  const mostSpokenLanguages = (countries, topN) => {
    const languageCount = {};
  
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });
  
    const sortedLanguages = Object.keys(languageCount)
      .map(language => ({ language, count: languageCount[language] }))
      .sort((a, b) => b.count - a.count);
  
    return sortedLanguages.slice(0, topN);
  };
  
  console.log(mostSpokenLanguages(countries, 10)); 
  console.log(mostSpokenLanguages(countries, 3));
  const mostPopulatedCountries = (countries, topN) => {
    const sortedCountries = countries.sort((a, b) => b.population - a.population);
    return sortedCountries.slice(0, topN).map(country => ({
      country: country.name,
      population: country.population
    }));
  };
  
  console.log(mostPopulatedCountries(countries, 10)); 
  console.log(mostPopulatedCountries(countries, 3)); 
  console.log(sortCountriesByName(countries));
console.log(sortCountriesByCapital(countries)); 
console.log(sortCountriesByPopulation(countries));

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3)); 

console.log(mostPopulatedCountries(countries, 10)); 
console.log(mostPopulatedCountries(countries, 3)); 