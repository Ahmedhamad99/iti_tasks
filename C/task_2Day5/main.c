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
    struct Employee employees[10];
    int index;
    char ch;

    do
    {
        do{
            printf("Choose Index 0-->9\n");
            scanf("%i",&index);
        }while(index<0 || index>9);

     printf("What is your Social Security Number?\n");
     scanf("%i",&employees[index].ssn);
     printf("What is your name?\n");
     scanf("%s",employees[index].name);
     _flushall();
     printf("How old are you?\n");
     scanf("%i",&employees[index].age);
     _flushall();
     printf("Enter your salary!\n");
     scanf("%f",&employees[index].salary);
     _flushall();
     printf("Enter your commission!\n");
     scanf("%f",&employees[index].commission);
     _flushall();
     printf("Enter your deduction!\n");
     scanf("%f",&employees[index].deduction);
     _flushall();
     printf("Continue y or n\n");
     scanf("%c",&ch);

    }while(ch!='n');

    for(int i=0;i<10;i++){
            if(employees[i].ssn==index){
                     PrintEmployee(employees[i]);

            }



    }



    return 0;
}
