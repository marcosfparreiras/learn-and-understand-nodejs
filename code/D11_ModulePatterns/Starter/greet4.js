function Greetr() {
    this.greeting = 'G4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;
