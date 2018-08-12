var talkingCalendar = function(date) {

  var months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "Novemeber", "December"];
  
  var split = date.split('/');
  var year = split[0];
  var month = split[1] - 1;  // Month variable equal to months string variable
  var day = split[2];
  var monthResult = months[month]; // calling months with month variable
  var lastChar = day.slice(1); // spliting day digits

if (day === "11" && "12" && "13") { //statments for suffix
	var result = "th";

} else if (lastChar === "1"){
   var result = "st";
} else if (lastChar === "2"){
   var result = "nd";
} else if (lastChar === "3"){
   var result = "rd";
} else {
	var result = "th";
} 

var days = day/1 + result;

return monthResult + " " + days + ", " + year;
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

