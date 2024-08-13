const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]


//answer//
const languageData = {
    'Finland': { Finnish: 5, Swedish: 5, English: 85 },
    'Sweden': { Swedish: 90, English: 10 },
    'Norway': { Norwegian: 90, English: 10 }
  }
  function mostSpokenLanguages(countries, n) {
    let languageCounts = {};
    countries.forEach(country => {
      Object.keys(languageData[country]).forEach(language => {
        if (languageCounts[language]) {
          languageCounts[language] += languageData[country][language];
        } else {
          languageCounts[language] = languageData[country][language];
        }
      })
    })
    let sortedLanguages = Object.keys(languageCounts).sort((a, b) => languageCounts[b] - languageCounts[a]);
    return sortedLanguages.slice(0, n).map(language => ({ [language]: languageCounts[language] }));
  }

  console.log(mostSpokenLanguages(['Finland', 'Sweden', 'Norway'], 10));
  console.log(mostSpokenLanguages(['Finland', 'Sweden', 'Norway'], 3));