// Your Javascript Code Goes Here
var person = {
    firstName: 'Lorem',
    lastName: 'Ipsum',
    nickName: 'loip',
    formalGreeting: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName + '!');
    },
    friendlyGreeting: function() {
        console.log('Hey there, ' + this.nickName + '!');
    }
};

console.log(person.firstName);
person.formalGreeting();
console.log(person['lastName']);
person['friendlyGreeting']();

var renaming =  person['friendlyGreeting']
console.log(renaming);
renaming();
