// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */

//answer//
items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
]
items.push("The Great Wall", "The Taj Mahal");
items[items.length] = "The Eiffel Tower";
console.log(items);
showInfo = function (itemToShow) {
  console.log(`Item: ${itemToShow}, Letters: ${itemToShow.length}`);
}
items.forEach(showInfo);
function getTotalLetters() {
  let totalLetters = 0;
  items.forEach(item => {
    totalLetters += item.length;
  })
  return totalLetters;
}
console.log(`Total Letters: ${getTotalLetters()}`);