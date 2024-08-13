// A calendar event constructor

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [
            this.startDate,
            ", from ",
            this.startTime,
            " to ",
            this.endTime
        ].join("");
      
        console.log(this.title);
        console.log(dateString);
    };
};

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent.showEvent();



/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */

//answer//
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.showEvent = function () {
        var dateString = [
            this.title,
            ": ",
            this.startDate,
            " - (",
            this.startTime,
            " - ",
            this.endTime,
            ")"
        ].join("");
        console.log(dateString);
    }
}
var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
)
calEvent1.showEvent();
var calEvent2 = new CalendarEvent(
    "Team Meeting",
    "3/10/16",
    "2.00pm",
    "3.30pm"
)
calEvent2.showEvent();