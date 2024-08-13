// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red.

//answer//
<!DOCTYPE html>
<html>
<head>
    <title>Number Grid</title>
    <style>
        .even {
            background-color: green;
        }
        .odd {
            background-color: yellow;
        }
        .prime {
            background-color: red;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <script>
        let container = document.getElementById("container");
        for (let i = 1; i <= 100; i++) {
            let numDiv = document.createElement("div");
            numDiv.textContent = i;
            if (isPrime(i)) {
                numDiv.classList.add("prime");
            } else if (i % 2 === 0) {
                numDiv.classList.add("even");
            } else {
                numDiv.classList.add("odd");
            }
            container.appendChild(numDiv);
        }
        function isPrime(num) {
            if (num <= 1) {
                return false;
            }
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
    </script>
</body>
</html>