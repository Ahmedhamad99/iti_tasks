#include <stdio.h>
#include <stdlib.h>
#include<string.h>
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
    struct Employee e1;
    printf("What is your Social Security Number?\n");
    scanf("%i",&e1.ssn);
    printf("What is your name?\n");
    scanf("%s",e1.name);
    _flushall();
    printf("How old are you?\n");
    scanf("%i",&e1.age);
    _flushall();
    printf("Enter your salary!\n");
    scanf("%f",&e1.salary);
    _flushall();
    printf("Enter your commission!\n");
    scanf("%f",&e1.commission);
    _flushall();
    printf("Enter your deduction!\n");
    scanf("%f",&e1.deduction);
    _flushall();


    PrintEmployee(e1);


    return 0;
}



