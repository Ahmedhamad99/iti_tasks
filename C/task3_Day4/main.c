#include <stdio.h>
#include <stdlib.h>
//7- pointer to struct of employee   ->

struct Employee
{
    int id;
    int age;
    char name[20];
};
int main()
{
    struct Employee e1;

    struct Employee *emptr;


    emptr = &e1;

    emptr->age=23;
    emptr->id=7;
    strcpy(emptr->name,"adm");

    printf("id=%i\n",emptr->id);

    printf("age=%i\n",emptr->age);

    printf("name=%s",emptr->name);


    return 0;
}
