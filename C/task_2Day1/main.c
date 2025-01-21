#include <stdio.h>
#include <stdlib.h>
//2- pointer to array  read and write   3 ways
//way_1
int main()
{
   int arr[5];
   int *ptr=arr;

   for(int i=0;i<5;i++)
   {
       printf("Enter a number at index %i\n",i);
       scanf("%i",&ptr[i]);
   }
   for(int i=0;i<5;i++)
   {
       printf("%i\n",ptr[i]);
   }
    return 0;
}


//way2
int main()
{

    int arr[5];
   int *ptr=arr;
   ptr=arr;
   for(int i=0;i<5;i++)
   {
       printf("Enter a number in index %i\n",i);
       scanf("%i",(ptr+i));
   }
    for(int i=0;i<5;i++)
   {
       printf("%i\n",*(ptr+i));
   }
}


//way3


int main()
{
    int arr[5];
    int *ptr=arr;

    for(int i=0;i<5;i++,ptr++)
    {
        printf("Enter a number at index %i\n",i);
        scanf("%i",ptr);
    }
    ptr=arr;
    for(int i=0;i<5;i++,ptr++)
    {
        printf("%i\n",*ptr);
    }
}
