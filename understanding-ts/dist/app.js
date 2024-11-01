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
    describe() {
        console.log("IT Department - ID:", this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("Accounting Department - ID:", this.id);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("1", []);
        return this.instance;
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
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log("Accounting 1: " + accounting, "Accounting 2" + accounting2);
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
