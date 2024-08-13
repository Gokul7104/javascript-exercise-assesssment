# Develop a small application which calculate a weight of an object in a certain planet. The gif image is not complete check the video in the starter file.

Sample Project GIF Image:

![solar_system_project](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_solar_system_day_4.1.gif)


To download images, click the below link:

https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master/24_Day_Project_solar_system/24_day_starter/images

To download background video, click the below link:

https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master/24_Day_Project_solar_system/24_day_starter/design

//answer//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solar System Weight Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Solar System Weight Calculator</h1>
    </header>
    <main>
        <section class="calculator">
            <h2>Enter your weight on Earth:</h2>
            <input type="number" id="earth-weight" value="100">
            <h2>Select a planet:</h2>
            <select id="planet-select">
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Earth">Earth</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturn">Saturn</option>
                <option value="Uranus">Uranus</option>
                <option value="Neptune">Neptune</option>
            </select>
            <button id="calculate-btn">Calculate Weight</button>
            <p id="result"></p>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>

                     css:
body {
    font-family: Arial, sans-serif;
    background-image: url('background.jpg'); 
    background-size: cover;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.calculator {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.calculator h2 {
    margin-top: 0;
}

#earth-weight {
    width: 100%;
    padding: 10px;
    font-size: 18px;
}

#planet-select {
    width: 100%;
    padding: 10px;
    font-size: 18px;
}

#calculate-btn {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#calculate-btn:hover {
    background-color: #3e8e41;
}

#result {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
}
 
                 js
                 const earthWeightInput = document.getElementById('earth-weight');
const planetSelect = document.getElementById('planet-select');
const calculateBtn = document.getElementById('calculate-btn');
const resultPara = document.getElementById('result');

const planetGravity = {
    Mercury: 0.38,
    Venus: 0.91,
    Earth: 1,
    Mars: 0.38,
    Jupiter: 2.53,
    Saturn: 1.07,
    Uranus: 0.92,
    Neptune: 1.19
}
calculateBtn.addEventListener('click', () => {
    const earthWeight = parseFloat(earthWeightInput.value);
    const selectedPlanet = planetSelect.value;
    const planetGravityValue = planetGravity[selectedPlanet];
    const weightOnPlanet = earthWeight * planetGravityValue;
    resultPara.textContent = `Your weight on ${selectedPlanet} is ${weightOnPlanet.toFixed(2)} kg`;
});