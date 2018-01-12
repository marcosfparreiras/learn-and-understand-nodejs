// pass by value
function change(b) {
    b = 2;
}
console.log("Pass by value");
var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}
console.log("\nPass by reference");
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
