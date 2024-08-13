// Passing a function an object as an argument

var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */

//answer//
var planet1;
var planet2;
var getPlanetInfo;
planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
}
planet2 = {
    name: "Saturn",
    position: 6,
    type: "Gas Giant",
    radius: 58232,
    sizeRank: 2
}
getPlanetInfo = function (planet) {
    return "Name: " + planet.name + 
           ", Position: " + planet.position + 
           ", Type: " + planet.type + 
           ", Radius: " + planet.radius + 
           ", Size Rank: " + planet.sizeRank;
}
console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));