// Generating the keyboard code code using even listener. 

// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif

//asnwer//
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Code Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <style>
    body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
.container {
  text-align: center;
}
.key, .key-code {
  margin: 20px;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #fff;
}
.key p, .key-code p {
  font-size: 1.5em;
  margin: 0;
}

#key-code {
  font-weight: bold;
}
    </style>
  <div class="container">
    <div class="key">
      <p>Press any key</p>
    </div>
    <div class="key-code">
      <p>Key Code: <span id="key-code">0</span></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>

        js:
document.addEventListener('keydown', (event) => {
  const key = event.key;
  const keyCode = event.keyCode;

  const keyElement = document.querySelector('.key p');
  const keyCodeElement = document.getElementById('key-code');

  keyElement.textContent = `Key Pressed: ${key}`;
  keyCodeElement.textContent = keyCode;
});
