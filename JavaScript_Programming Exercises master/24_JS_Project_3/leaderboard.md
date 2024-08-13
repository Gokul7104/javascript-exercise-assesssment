# Create the following using HTML, CSS, and JavaScript

![project_leaderboard](https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_mini_project_leaderboard_day_8.1.gif)




//answer//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Leaderboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<script>
    let leaderboardData = [];
document.addEventListener("DOMContentLoaded", function() {
    const leaderboardTable = document.getElementById("leaderboard-data");
    const nameInput = document.getElementById("name");
    const scoreInput = document.getElementById("score");
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const score = parseInt(scoreInput.value.trim());
        if (name && score) {
            leaderboardData.push({ name, score });
            leaderboardData.sort((a, b) => b.score - a.score);
            renderLeaderboard();
            nameInput.value = "";
            scoreInput.value = "";
        }
    });
    function renderLeaderboard() {
        leaderboardTable.innerHTML = "";
        leaderboardData.forEach((data, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${data.name}</td>
                <td>${data.score}</td>
            `;
            leaderboardTable.appendChild(row);
        });
    }
});
</script>
<style>
    body {
    font-family: Arial, sans-serif;
    text-align: center;
}
table {
    border-collapse: collapse;
    width: 50%;
    margin: 40px auto;
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}
th {
    background-color: #f0f0f0;
}
#leaderboard-data tr:nth-child(even) {
    background-color: #f7f7f7;
}
#leaderboard-data tr:hover {
    background-color: #ddd;
}
input[type="text"], input[type="number"] {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
}
button[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button[type="submit"]:hover {
    background-color: #3e8e41;
}
</style>
    <h1>Leaderboard</h1>
    <table id="leaderboard">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody id="leaderboard-data">
            <!-- data will be rendered here -->
        </tbody>
    </table>
    <input type="text" id="name" placeholder="Enter your name">
    <input type="number" id="score" placeholder="Enter your score">
    <button id="submit">Submit</button>
    <script src="script.js"></script>
</body>
</html>