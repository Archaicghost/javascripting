function countLetters(string){

var combineString = string.split(" ").join("");
var lowercaseString = combineString.toLowerCase();
var letterResult = {};
var array = []

//return lowercaseString;

for (var i = 0; i < lowercaseString.length; i++) {
   for (var j = 0; j < lowercaseString.length; j++)
	   if (lowercaseString[i] === lowercaseString[j]){
	       array.push();
	   }
	   // var current = lowercaseString[i]
	   letterResult[lowercaseString[i].toString()] = array[i]
   return letterResult;
}
};

console.log(countLetters("Light House"));