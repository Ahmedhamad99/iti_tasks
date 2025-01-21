#include <stdio.h>
#include <stdlib.h>

struct Employee
{
    int ssn;
    char name[20];
    int age;
    float salary;
    float commission;
    float deduction;

};

void PrintEmployee(struct Employee param){

   float totalsalary = (param.salary+param.commission)- param.deduction;
   printf("Employee Data is\n");
   printf("ssn=%i\n",param.ssn);

   printf("name=%s\n",param.name);

   printf("age=%i\n",param.age);

   printf("salary=%f\n",param.salary);

   printf("Commission=%f\n",param.commission);

   printf("Deduction=%f\n",param.deduction);
   printf("Total salary = %f\n",totalsalary);


}

int main()
{
    struct Employee employees[3];
    for(int i=0;i<3;i++){
             printf("What is your Social Security Number?\n");
    scanf("%i",&employees[i].ssn);
    printf("What is your name?\n");
    scanf("%s",employees[i].name);
    _flushall();
    printf("How old are you?\n");
    scanf("%i",&employees[i].age);
    _flushall();
    printf("Enter your salary!\n");
    scanf("%f",&employees[i].salary);
    _flushall();
    printf("Enter your commission!\n");
    scanf("%f",&employees[i].commission);
    _flushall();
    printf("Enter your deduction!\n");
    scanf("%f",&employees[i].deduction);
    _flushall();

    }

    for(int i=0;i<3;i++){
                PrintEmployee(employees[i]);


    }



    return 0;
}
