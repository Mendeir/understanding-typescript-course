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
    constructor(
        id: string,
        private reports: string[],
    ) {
        super(id, "Accounting");
    }

    addEmployee(name: string) {
        if (name === "TheGreat") {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
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
