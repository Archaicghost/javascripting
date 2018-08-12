var calculateChange = function(total, cash) {

	var array = {};
	var change = cash - total;
	var sum = change
    var float = new Object()

    float.TwentyDollar = {2000: 0};
    float.TenDollar = {1000: 0};
    float.FiveDollar = {500: 0};
    float.TwoDollar = {200: 0};
    float.One = {100: 0};
    float.Quarters = {25: 0};
    float.Dimes = {10: 0};
    float.Nickels = {5: 0};
    float.Pennies = {1: 0}

   for (elm in float) {
     var changeTotal = float[elm];
     var elmNum = Object.keys(changeTotal);

     if (sum >= elmNum) {
       var changeGiven = Math.floor(sum / elmNum);
         changeTotal[elmNum] = changeGiven;
           sum -= (elmNum * changeGiven);
     }
   }
   
   for (var elm in float) {
     var changeTotal = float[elm];
     var elmNum = Object.keys(changeTotal);
     if (changeTotal[elmNum] === 0) {
       delete float[elm];
     } else {
       array[elm] = changeTotal[elmNum];
     }
 }
return array;
 };

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));