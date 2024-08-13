// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */

//answer//
var movie1;
var movie2;
var movie3;
var movie4;
movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};
movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};
movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};
movie4 = {
  title: "The Avengers",
  actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
  directors: "Joss Whedon"
};
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
console.log("");
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
console.log(""); 
console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");
console.log(""); 
console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");
console.log(""); 
var event1 = {
  title: "Birthday Party",
  date: "2022-07-15",
  location: "Home"
};
var event2 = {
  title: "Meeting",
  date: "2022-07-20",
  location: "Office"
};
var event3 = {
  title: "Concert",
  date: "2022-07-25",
  location: "Stadium"
};
console.log("Event information for " + event1.title);
console.log("------------------------------");
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log("------------------------------");
console.log(""); 
console.log("Event information for " + event2.title);
console.log("------------------------------");
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log("------------------------------");
console.log(""); 
console.log("Event information for " + event3.title);
console.log("------------------------------");
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log("------------------------------");
console.log("");