class Department {
    protected employees: string[] = [];

    constructor(
        private readonly id: string,
        public name: string,
    ) {}

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "ITDepartment");
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    constructor(
        id: string,
        private reports: string[],
    ) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error("No report found.");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }

    addEmployee(name: string) {
        if (name === "TheGreat") {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
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
