function countLetters(string){

var combineString = string.split(" ").join("");
var lowercaseString = combineString.toLowerCase();
var letterResult = {};
var array = []

//return lowercaseString;

for (var i = 0; i < lowercaseString.length; i++) {
	var array = [];
   for (var j = 0; j < lowercaseString.length; j++)
	   if (lowercaseString[i] === lowercaseString[j]){
	       array.push(j);
	   }
	 
	   letterResult[lowercaseString[i].toString()] = array;
	}
   return letterResult;

};

console.log(countLetters("lighthouse in the house"));




// add property to the object key.
// Add Array to property.
//push matching property indexes into array.