"use strict";
{
    {
        let addInterface;
        addInterface = (n1, n2) => {
            return n1 + n2;
        };
        class Person {
            constructor(name) {
                this.age = 30;
                if (name) {
                    this.name = name;
                }
            }
            greet(phrase) {
                console.log(phrase + " " + this.name);
            }
        }
        let user1;
        user1 = new Person("MG");
        user1.greet("MG The great!!");
    }
}
