"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = "2024";
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
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === "TheGreat") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "This is MG!";
console.log(accounting.mostRecentReport);
accounting.addEmployee("MG");
accounting.addEmployee("TheGreat");
accounting.printEmployeeInformation();
accounting.describe();
const employee1 = Department.createEmployee("MG");
console.log(employee1, Department.fiscalYear);
