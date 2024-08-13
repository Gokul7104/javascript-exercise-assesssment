// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif


//answer//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Generator</title>
    <style>
        .even {
            color: blue;
        }
        .odd {
            color: green;
        }
        .prime {
            font-weight: bold;
            color: red;
        }
    </style>
</head>
<body>
    <h1>Number Generator</h1>
    <button id="generate-btn">Generate Numbers</button>
    <div id="numbers-container"></div>
    <script>
        const generateBtn = document.getElementById('generate-btn');
        const numbersContainer = document.getElementById('numbers-container');
        generateBtn.addEventListener('click', generateNumbers);
        function generateNumbers() {
            numbersContainer.innerHTML = '';
            for (let i = 1; i <= 100; i++) {
                const numberElement = document.createElement('p');
                numberElement.textContent = i;

                if (isEven(i)) {
                    numberElement.classList.add('even');
                } else {
                    numberElement.classList.add('odd');
                }

                if (isPrime(i)) {
                    numberElement.classList.add('prime');
                }

                numbersContainer.appendChild(numberElement);
            }
        }
        function isEven(number) {
            return number % 2 === 0;
        }

        function isPrime(number) {
            if (number <= 1) {
                return false;
            }
            for (let i = 2; i * i <= number; i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }
    </script>
</body>
</html>