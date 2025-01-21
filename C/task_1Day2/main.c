#include <stdio.h>
#include <stdlib.h>
#include<string.h>
int main()
{
    char fname[20];
    char lname[20];
    char fullname[40];
    printf("please enter your first name#\n");
    gets(fname);


    printf("please enter your last name#\n");
    gets(lname);

    strcpy(fullname,fname);
    strcat(fullname," ");
    strcat(fullname,lname);
    printf("Your fullname is %s",fullname);
    return 0;
}
