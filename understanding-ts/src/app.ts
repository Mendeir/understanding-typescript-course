{
    type Admin = {
        name: string;
        privileges: string[];
    };

    type Employee = {
        name: string;
        startDate: Date;
    };

    type ElevatedEmployee = Admin & Employee;

    const e1: ElevatedEmployee = {
        name: "MG",
        privileges: ["create-server"],
        startDate: new Date(),
    };

    type Combinable = string | number;
    type Numeric = number | boolean;

    type Universal = Combinable & Numeric;

    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: Combinable, b: Combinable) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }

        return a + b;
    }

    const result = add("Max", "Schwarz");
    result.split(" ");

    const fetchedUserData = {
        id: "u1",
        name: "Max",
        job: { title: "CEO", description: "My own company" },
    };

    console.log(fetchedUserData?.job?.title);

    type UnkownEmployee = Employee | Admin;

    function printEmployeeInformation(emp: UnkownEmployee) {
        console.log("Name: " + emp.name);

        if ("privileges" in emp) {
            console.log("Privileges: " + emp.privileges);
        }

        if ("startDate" in emp) {
            console.log("Privileges: " + emp.startDate);
        }
    }

    printEmployeeInformation({
        name: "MG",
        privileges: ["retrieve-files"],
        startDate: new Date(),
    });

    class Car {
        drive() {
            console.log("Driving...");
        }
    }

    class Truck {
        drive() {
            console.log("Driving a truck...");
        }
        loadCargo(amount: number) {
            console.log("Loading cargo..." + amount);
        }
    }

    type Vehicle = Car | Truck;

    const v1 = new Car();
    const v2 = new Truck();

    function useVehicle(vehicle: Vehicle) {
        vehicle.drive();

        if ("loadCargo" in vehicle) {
            vehicle.loadCargo(1000);
        }
    }

    useVehicle(v1);
    useVehicle(v2);

    interface Bird {
        type: "bird";
        flyingSpeed: number;
    }

    interface Horse {
        type: "horse";
        runningSpeed: number;
    }

    type Animal = Bird | Horse;

    function moveAnimal(animal: Animal) {
        let speed;

        switch (animal.type) {
            case "bird":
                speed = animal.flyingSpeed;
                break;
            case "horse":
                speed = animal.runningSpeed;
                break;
        }

        console.log("Moving at speed: " + speed);
    }

    moveAnimal({ type: "bird", flyingSpeed: 10 });

    const userInputElement = document.getElementById("user-input");

    if (userInputElement) {
        (userInputElement as HTMLInputElement).value = "Hi there!";
    }

    interface ErrorContainer {
        [prop: string]: string;
    }

    const errorBag: ErrorContainer = {
        email: "Not a valid email!",
    };
}
