// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */

//answer//
var report = getVisitorReport(visitors, 5);
console.log(report);
var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"]
var getMonthlyVisitorReport = function(monthArray, weekWanted, dayWanted) {
  var weekArray = monthArray[weekWanted - 1];
  return getVisitorReport(weekArray, dayWanted);
}
var week1 = [100, 200, 300, 400, 500, 600, 700];
var week2 = [110, 220, 330, 440, 550, 660, 770];
var week3 = [120, 240, 360, 480, 600, 720, 840];
var week4 = [130, 260, 390, 520, 650, 780, 910];
var monthArray = [week1, week2, week3, week4];
console.log(getMonthlyVisitorReport(monthArray, 2, 3)); 
console.log(getMonthlyVisitorReport(monthArray, 4, 7)); 
console.log(getMonthlyVisitorReport(monthArray, 1, 5));