"use strict";
{
    const e1 = {
        name: "MG",
        privileges: ["create-server"],
        startDate: new Date(),
    };
    function add(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    function printEmployeeInformation(emp) {
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
        loadCargo(amount) {
            console.log("Loading cargo..." + amount);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if ('loadCargo' in vehicle) {
            vehicle.loadCargo(1000);
        }
    }
}
