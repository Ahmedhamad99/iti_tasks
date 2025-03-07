"use strict";
class Employee {
    constructor(id, fname, lname, age, salary, address) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    getSalary() {
        return this.salary;
    }
    showData() {
        console.log(`Employee ID: ${this.id}`);
        console.log(`Name: ${this.fname} ${this.lname}`);
        console.log(`Age: ${this.age}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Address: ${this.address.city}, ${this.address.street}, ${this.address.zCode}`);
    }
}
let emp = new Employee(1, "ahmed", "ali", 30, 5000, { city: "cairo", street: "palastine St", zCode: 12345 });
emp.showData();
class Manager extends Employee {
    constructor(id, fname, lname, age, salary, address) {
        super(id, fname, lname, age, salary, address);
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    showEmpData(empId) {
        if (this.id === empId) {
            this.showData();
        }
        else {
            console.log(`Employee with id ${empId} this data is not found `);
        }
    }
}
let manager = new Manager(2, "Mohamed", "Sayed", 40, 10000, { city: "Alex", street: "Corniche Rd", zCode: 54321 });
manager.showEmpData(2);
manager.showEmpData(1);
