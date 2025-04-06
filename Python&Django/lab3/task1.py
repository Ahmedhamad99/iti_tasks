class Person:
    def __init__(self,name,money,mood,healthRate):
        self.name= name
        self.__money = money
        self.mood = mood
        self.__healthRate = healthRate
    def sleep(self,hours):
        if hours ==7:
            self.mood ="happy"
        elif hours < 7 :
            self.mood="tired"
        elif hours > 7:
            self.mood="lazy"
        else:
            self.mood="not recognized"
    @property
    def _money(self):
        return self.__money
    @_money.setter
    def _money(self,mount):
        self.__money = mount

    @property
    def _healthrate(self):
        return self.__healthRate
    @_healthrate.setter
    def _healthrate(slef,rate):
        slef.__healthRate=rate
    def eat(self,meals):
        if meals ==3:
            self._healthrate =100
        elif meals == 2:
            self._healthrate=75
        elif meals == 1:
            self._healthrate= 50
    def buy(self,price_item):
        if self._money > price_item:
             self._money -= price_item

class Employee(Person):

    def __init__(self, name, money, mood, healthRate,emp_id, car, email, salary, distance_to_work):
        Person.__init__(self,name, money, mood, healthRate)
        self.emp_id= emp_id
        self.car = car
        self.email = email
        self.__salary = salary
        self.distance_to_work= distance_to_work


    def __str__(self):
        return f"Employee==>Id: {self.emp_id}, Name: {self.name}, Email:{self.email}, Salary: {self._salary}, Distance:{self.distance_to_work} "
  
    def __repr__(self):
        return self.__str__()
    @property
    def _salary(self):
        return self.__salary
    @_salary.setter
    def _salary(self,new_salary):
        self.__salary = new_salary
    def work(self,hours):
        if hours == 8:
            self.mood="Happy"
        elif hours > 8:
            self.mood="Tired"
        elif hours < 8:
            self.mood = "Lazy"
        else:
            self.mood="not recognized"
    def drive(self,veloicty):
        if self.car:
            self.car.run(veloicty,self.distance_to_work)
    
    def refuel(self,gasAmount):
        if self.car and gasAmount > 0:
            self.car.fuelRate += gasAmount 
    
    def send_email(self,to,subject,body):
        print(f"Sending emeial to {to} from {self.email} and {subject} {body}")
    
class Car:
    def __init__(self ,name,fuelRate,velocity):

        self.name=name

        self.fuelRate = max(0,min(100,fuelRate))

        self.velocity = max(0,min(200,velocity))
        
    def run(self,velocity,distance):
        self.velocity = max(0,min(200,velocity))
        self.fuelRate -= (distance/20) * 7

        self.fuelRate = max(0,self.fuelRate)
        
        if self.fuelRate <=0:
            self.stop(distance)
        else:
            print(f"Car is running at {self.velocity} km/h and the rest of the fuel is {self.fuelRate}")
    def stop(self,distance):

        self.velocity = 0 
        if self.fuelRate <=0:
            print(f"Car stopped the tank of fuel is empyt after {distance} km")
        else:
            print("Car has stoppped")
            
class Office:
    num_of_employee = 0
    def __init__(self,name):
        self.name=name
        self.employees = []

    def get_all_employees(self):
       
       return [emp for emp in self.employees]
    
    def get_employee(self,empId):
        for emp in self.employees:
            if emp.emp_id == empId:
                return emp
        return "Not found"
    def hire(self,employee):
        self.employees.append(employee)
        Office.num_of_employee +=1
    
    def deduct(self,empId,deduction):
        emp = self.get_employee(empId)
        if emp:
            emp._salary -=deduction
    

    def reward(self,empId,rewarding):
        emp = self.get_employee(empId)
        if emp:
            emp._salary += rewarding
    
      
    def check_lateness(self,empId,moveHour):
        emp  = self.get_employee(empId)
        if emp:
            late_or_not =  self.calculate_lateness(10,moveHour,emp.distance_to_work,emp.car.velocity)
            if late_or_not:
                self.deduct(empId,15)
            else:
                self.reward(empId,20) 
            



    @staticmethod
    def calculate_lateness(targetHour,moveHour,distance,velocity):
        time_arraival = moveHour +(distance/velocity)
        return  time_arraival > targetHour


    @classmethod
    def change_emps_num(cls,numper):
        cls.num_of_employee = numper




my_car = Car("Fiat128", fuelRate=80, velocity=60)

emp1 = Employee("ahmed", 1000, "Tired",100,1,my_car,"ahmed@gmail.com", 50000,20)
emp2 = Employee("ali",3000,"Happy", 75,2, my_car, "ali@gmail.com", 40000, 50)
emp3 = Employee("adm",2000,"Lazy", 75,2, my_car, "adm@gmail.com", 60000, 40)

organic_1 = Office("Organic_sheeben")
organic_1.hire(emp1)
organic_1.hire(emp2)
organic_1.hire(emp3)

organic_1.check_lateness(emp1.emp_id, moveHour=8)

print("Employees in office:", organic_1.get_all_employees())

print(f"Number of employee ==> {organic_1.num_of_employee}")


    
        