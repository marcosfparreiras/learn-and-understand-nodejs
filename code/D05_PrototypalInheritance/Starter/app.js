// Your Javascript Code Goes Here
function Person(firstName, lastName, nickName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
}

Person.prototype.greet = function() {
    console.log("Hi, " + this.firstName + "!");
}

Person.prototype.friendlyGreet = function() {
    console.log("Hi, " + this.nickName + "!");
}

var john = new Person('John', 'Doe', 'johnny');
console.log(john.nickName);
john.greet();
john.friendlyGreet();

var jane = new Person('Jane', 'Doe', 'JJ');
console.log(jane.nickName);
jane.greet();
jane.friendlyGreet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
