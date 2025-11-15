// Constructor function

        function Person(name) {

        this.name = name;

        }

        // Adding a method to the prototype

        Person.prototype.greet = function() {

        console.log(`Hello, my name is ${this.name}.`);

        };

        Person.prototype.domain = 'Web Designer'

        // Creating instances

        const person1 = new Person('Alice');

        console.log(person1)

        const person2 = new Person('Bob');

        person1.greet(); // "Hello, my name is Alice."

        console.log(`${person1.name} is a ${person1.domain}`)

        person2.greet(); // "Hello, my name is Bob."