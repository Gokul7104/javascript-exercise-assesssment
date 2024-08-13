# Final Project 1

## Create the following animation using (HTML, CSS, JS)

![countries_final_project](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_mini_project_countries_object_day_10.1.gif)


# Final Project 2

## Validate the following form using regex.

### Input Page Design & Instructions

![final_input_page](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_mini_project_form_validation_day_10.2.1.png)

### Expected Output Page

![final_output_page](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_mini_project_form_validation_day_10.2.png)


//answer//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<script>
const countryData = {
    name: "Country Name",
    capital: "Capital City",
    population: "Population",
    region: "Region",
    subregion: "Subregion",
    language: "Language"
}
function changeCountryInfo() {
    document.getElementById('capital').textContent = countryData.capital;
    document.getElementById('population').textContent = countryData.population;
    document.getElementById('region').textContent = countryData.region;
    document.getElementById('subregion').textContent = countryData.subregion;
    document.getElementById('language').textContent = countryData.language;
}
setInterval(changeCountryInfo, 3000);
</script>
<style>
    body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}
.flag {
    width: 200px;
    height: 150px;
    background-color: #ccc;
    border-radius: 5px;
    margin-right: 20px;
}
.country-info {
    flex: 1;
    text-align: left;
}
.country-info h2 {
    font-size: 24px;
    margin-bottom: 10px;
}
.country-info p {
    font-size: 16px;
    margin-bottom: 5px;
}
.country-info span {
    font-weight: bold;
}
</style>
    <div class="container">
        <div class="flag"></div>
        <div class="country-info">
            <h2>Country Name</h2>
            <p>Capital: <span id="capital">Capital</span></p>
            <p>Population: <span id="population">Population</span></p>
            <p>Region: <span id="region">Region</span></p>
            <p>Subregion: <span id="subregion">Subregion</span></p>
            <p>Language: <span id="language">Language</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

project2:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<script>
    function validateForm(event) 
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const namePattern = /^[a-zA-Z ]{2,30}$/; // Alphabets and space, 2 to 30 characters
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const passwordPattern = /^.{6,}$/; // Minimum 6 characters for password
    let isValid = true;
    let errorMessage = "";
    if (!namePattern.test(name)) {
        isValid = false;
        errorMessage += "Invalid name. ";
    }
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Invalid email. ";
    }
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessage += "Password must be at least 6 characters. ";
    }
    if (password !== confirmPassword) {
        isValid = false;
        errorMessage += "Passwords do not match. ";
    }
    const errorElement = document.getElementById('error-message');
    if (!isValid) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = ""; // Clear error message
        // Normally, here you would submit the form or perform further actions
        alert('Form submitted successfully!');
        document.getElementById('validationForm').reset(); // Reset form after submission
    }
</script>
<style>
    body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}
.container {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
    text-align: center;
}
.form-group {
    margin-bottom: 10px;
}
label {
    font-weight: bold;
}
input, button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
</style>
    <div class="container">
        <h2>Form Validation</h2>
        <form id="validationForm" onsubmit="validateForm(event)">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
        <div id="error-message"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>