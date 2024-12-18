{
    abstract class Department {
        static fiscalYear: string = "2024";
        protected employees: string[] = [];

        constructor(
            protected readonly id: string,
            public name: string,
        ) {}

        static createEmployee(name: string) {
            return { name: name };
        }

        abstract describe(this: Department): void;

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

        describe() {
            console.log("IT Department - ID:", this.id);
        }
    }

    class AccountingDepartment extends Department {
        private lastReport: string;
        private static instance: AccountingDepartment;

        private constructor(
            id: string,
            private reports: string[],
        ) {
            super(id, "Accounting");
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
}
