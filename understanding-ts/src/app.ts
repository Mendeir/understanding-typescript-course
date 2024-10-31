class Department {
    private employees: string[] = [];

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

const accounting = new Department("1", "Accounting");

accounting.addEmployee("MG");
accounting.addEmployee("TheGreat");

accounting.describe();
