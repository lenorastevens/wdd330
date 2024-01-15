document.getElementById('calculator'). addEventListener('click', function() {
    let calculator = {
        read() {
            this.a = +prompt('1st number?', 0);
            this.b = +prompt('2nd number?', 0);
        },

        sum() { 
            return this.a + this.b;
        },

        mul() {
            return this.a * this.b;
        },

        sub() {
            return this.a - this.b;
        },

        div() {
            return this.a / this.b;
        }
    };

    calculator.read();
    alert("Sum: " + (calculator.sum()));
    alert("Product: " + (calculator.mul()));
    alert("Difference: " + (calculator.sub()));
    alert("Dividend: " + (calculator.div()));

});