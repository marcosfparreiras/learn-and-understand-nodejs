// Your Javascript Code Goes Here
// function statement
function greet() {
    console.log('calling greet!');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetAsVar = function() {
    console.log('invoking greetAsVar!');
}
greetAsVar();

// it's first-class
logGreeting(greetAsVar);

// use a function expression to create a function on the fly
logGreeting(function() {
    console.log('calling the function created on the fly');
});
