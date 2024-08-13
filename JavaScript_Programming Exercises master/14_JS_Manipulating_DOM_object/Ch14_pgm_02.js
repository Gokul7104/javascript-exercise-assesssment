// Use the countries array to display all the countries. 


//See the design

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_countries_aray_day_2.2.png


//answer//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries List</title>
    <style>
        
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
        }
        li {
            margin: 10px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            width: calc(25% - 20px);
        }
    </style>
</head>
<body>
    <div id="container">
        <ul id="countries-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

// countries array
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Japan",
  "Kenya",
];
const container = document.getElementById("container");

// loop through the countries array and create a list item for each country
countries.forEach((country) => {
  const listItem = document.createElement("li");
  listItem.textContent = country;
  container.appendChild(listItem);
});