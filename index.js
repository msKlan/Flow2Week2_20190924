// Leg

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log(x)

var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult));

// ---------
// Exercise 1

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Michael"]
console.log( names.filter(x => x.includes("a")) );


// ---------
var n1 = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Michael"];
var n2 = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Michael"];
var n3 = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Michael"];
console.log("1: ", n1.reverse() );

console.log("2: ", n2.map((x, index) => n2[n2.length - index - 1]) );

function mapReverse(array, fn) {
  return names.reduceRight(function (result, el) {
      result.push(fn(el));
      return result;
  }, []);
}
console.log("3: ", mapReverse(n3, function (i) { return i; }));

// ---------
// Exorcise 4a
//            0  1  2  3   4
var array1 = [1, 3, 5, 10, 11];
const map1 = array1.map((x, index, arr) => x + (arr[index+1]?arr[index+1]:0));
console.log(map1);

//Expected [4,8,15,21,11];

// ---------
// Exorcise 4b

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Michael"];
console.log( names.map(x => "<a href=\"\">" + x + "</a>") );
console.log( "<nav>\r\n" + names.map(x => "<a href=\"\">" + x + "</a>").join("\r\n") + "\r\n</nav>");

// ---------
// Exorcise 4c

var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

console.log( "<table>\r\n" + names.map(r => "<tr>\r\n" + Object.values(r).map(c => "<td>"+c+"</td>").join(" ") + "\r\n</tr>").join("\r\n") + "\r\n</table>");
//console.log( names.map(r => Object.values(r)) );
//console.log( names.map(r => Object.values(r).map(c => "<td>"+c+"</td>")) );
//console.log( names.map(r => "<tr>\r\n" + Object.values(r).map(c => "<td>"+c+"</td>").join(" ") ).join("\r\n") +"\r\n</tr>" );
//console.log( names.map(r => Object.values(r).map(c => c)) );
//console.log( names.map(r => Object.values(r).includes("a")) );

// ---------
// Exorcise 4d