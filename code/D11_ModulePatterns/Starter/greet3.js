function Greetr() {
    this.greeting = 'G3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();
