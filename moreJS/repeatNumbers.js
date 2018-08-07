var repeatNumbers = function(data) {
var num = [];
for ( var i = 0; i < data.length; i++){
var a = data[i][0];
var b = data[i][1];
for(var x = b; x > 0; x--){
num += a;
if(x === 1){
num += ', ';
}
}
var array = [];
array.push(num);
array.join(',');
}
return array;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));




//You'll be given a two dimensional array (an array of arrays), each sub-array will only have two values. 
//The first will be the value to repeat, the second will be the amount of times to repeat that value.

//Your function repeatNumbers should return a string with each of the given values repeated the appropriate 
//number of times, each set of values separated by a comma. 
//If there is only one set of values then you should omit the comma.