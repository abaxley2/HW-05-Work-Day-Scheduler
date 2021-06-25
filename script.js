// Header date function
var today = moment();
$("#currentDay").text(today.format("[Today's Date is ]MMM Do, YYYY"));


//figure out what time of day it is
var checkTime = function () {
    var currentHour = moment().format("H");
    var colorRowEl = $(".textAreaRow");
    console.log(colorRowEl);
    console.log(currentHour);

    for (var i = 0; i < colorRowEl; i++) {

        var timeID = colorRowEl.id;
        
        var changeColor = document.getElementById(colorRowEl.id);

        $(colorRowEl.id).removeClass(".present, .past, .future");

        if (timeID < currentTime) {
            $(changeColor).addClass("past");
        } else if (timeID > currentTime) {
            $(changeColor).addClass("future");
        } else {
            $(changeColor).addClass("present");
        }
    }

}

checkTime();