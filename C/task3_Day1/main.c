#include <stdio.h>
#include <stdlib.h>
//pointer to pointer of integer Write ONLY
int main()
{
   int x;
   int *ptr=&x;
   int* *ptrtoptr=&ptr;
   printf("Enter a number \n");
   scanf("%i",ptr);
   printf("%i\n",x);
   printf("%x\n",&x);
   //printf("%i\n",*x);

   printf("%x\n",ptr);
   printf("%x\n",&ptr);
   printf("%i\n",*ptr);
   printf("A number %i loctad in memory at %x\n",*ptr,ptr);


   printf("%x\n",ptrtoptr);
   printf("%x\n",&ptrtoptr);
   printf("%x\n",*ptrtoptr);
   printf("%x\n",**ptrtoptr);
    return 0;
}
