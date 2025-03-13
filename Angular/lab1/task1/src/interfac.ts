interface IEmplyee{
    id:number;
    fname:string;
    lname:string;
    age:number;
    salary:number;
    address:{
        city:string,
        street:string,
        zCode:number
    },
    getSalary():number
}


class Employee implements IEmplyee{
    constructor(
        public id:number,
        public fname:string,
        public lname:string,
        public age:number,
        public salary:number,
        public address:{city:string,street:string,zCode:number})
        {}
        getSalary(): number {
        return this.salary;
        }
        showData(): void {
            console.log(`Employee ID: ${this.id}`);
            console.log(`Name: ${this.fname} ${this.lname}`);
            console.log(`Age: ${this.age}`);
            console.log(`Salary: ${this.salary}`);
            console.log(`Address: ${this.address.city}, ${this.address.street}, ${this.address.zCode}`);
        }
}

let emp = new Employee(1, "ahmed", "ali", 30, 5000, { city: "cairo", street: "palastine St", zCode: 12345 });

emp.showData();



class Manager extends Employee{
    constructor(
        public id:number,
        public fname:string,
        public lname:string,
        public age:number,
        public salary:number,
        public address:{city:string,street:string,zCode:number})
        {
            super(id,fname,lname,age,salary,address);
        }
        showEmpData(empId:number)
        {
            if(this.id===empId)
            {
                this.showData();
            }
            else{
                console.log(`Employee with id ${empId} this data is not found `)
            }
        }
}

let manager = new Manager(2, "Mohamed", "Sayed", 40, 10000, { city: "Alex", street: "Corniche Rd", zCode: 54321 });

manager.showEmpData(2);
manager.showEmpData(1);
