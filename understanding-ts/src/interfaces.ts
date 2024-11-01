interface AddFn {
    (a: number, b: number): number;
}

let addInterface: AddFn;

addInterface = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let user1: Greetable;

user1 = new Person("MG");

user1.greet("MG The great!!");
