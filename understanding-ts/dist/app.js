"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "ITDepartment");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "TheGreat") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment("1", []);
const itAccount1 = new ITDepartment("2", ["MG", "TheGreat"]);
itAccount1.printEmployeeInformation();
itAccount1.describe();
accounting.addReport("Hello World!");
accounting.printReports();
accounting.addEmployee("MG");
accounting.addEmployee("TheGreat");
accounting.printEmployeeInformation();
accounting.describe();
