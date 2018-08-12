var camelCase = function(input) {
var x = input.split(" ")

for (var i = 0; i < x.length; i++) {
    x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1); }

var y = x.join("")

var test = y.charAt(0).toLowerCase() + y.slice(1)

return test

};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));