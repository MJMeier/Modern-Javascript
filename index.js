var moment = require("moment");
var numeral = require("numeral");

console.log("Hello from JavaScript!");
var datetime = moment()
  .startOf("day")
  .fromNow();
console.log(datetime);

var myNumeral2 = numeral("1,000");
var value2 = myNumeral2.value();
console.log("the value is", value2);

var bob = 22;
var chris = 5;
console.log(bob, chris);

