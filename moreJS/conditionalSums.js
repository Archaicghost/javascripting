var conditionalSum = function(values, condition) {
  var out = 0;
  if (condition === "even") {
    for (var i = 0; i <= values.length; i++) 
    if (values[i] % 2 === 0) 
    out += values[i];
  return out }

  else if (condition === "odd") {
    for (var x = 0; x <= values.length; x++) 
    if (values[x] % 2 > 0) 
    out += values[x];
  return out }
};




console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

