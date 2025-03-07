"use strict";
var weekdays;
(function (weekdays) {
    weekdays[weekdays["Sunday"] = 0] = "Sunday";
    weekdays[weekdays["Monday"] = 1] = "Monday";
    weekdays[weekdays["Tuesday"] = 2] = "Tuesday";
    weekdays[weekdays["Wednesday"] = 3] = "Wednesday";
    weekdays[weekdays["Thursday"] = 4] = "Thursday";
    weekdays[weekdays["Friday"] = 5] = "Friday";
    weekdays[weekdays["Saturday"] = 6] = "Saturday";
})(weekdays || (weekdays = {}));
function weekEnd(day) {
    if (weekdays.Friday == day || weekdays.Sunday == day) {
        return "it is weekend";
    }
    else {
        return "Work day";
    }
}
console.log(weekEnd(weekdays.Friday));
console.log(weekEnd(weekdays.Sunday));
console.log(weekEnd(weekdays.Monday));
