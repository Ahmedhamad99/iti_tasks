enum weekdays{Sunday,
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday
}

function weekEnd(day:weekdays):string{
    if(weekdays.Friday==day || weekdays.Sunday==day)
    {
        return "it is weekend";
    }
    else{
        return "Work day";
    }
}
console.log(weekEnd(weekdays.Friday));
console.log(weekEnd(weekdays.Sunday));
console.log(weekEnd(weekdays.Monday));
