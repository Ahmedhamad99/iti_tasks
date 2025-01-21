#include <stdio.h>
#include <stdlib.h>
///1- try dynamic allocation
// for pointer to integer read and write 2 ways
///way1
int main()
{
    int size;

    printf("Enter Array size\n");
    scanf("%i",&size);

    int *ptr=malloc(size * sizeof(int));


    for(int i=0;i<size;i++)
    {
        printf("Enter a number at index %i\n",i);
        scanf("%i",ptr+i);
    }
    for(int i=0;i<size;i++)
    {
        printf("Number at index %i=%i\n",i,*(ptr+i));
    }
    return 0;
}



///way2


int main()
{
    int size;

    printf("Enter Array size\n");
    scanf("%i",&size);

    int *ptr=malloc(size * sizeof(int));


    for(int i=0;i<size;i++)
    {
        printf("Enter a number at index %i\n",i);
        scanf("%i",&ptr[i]);
    }
    for(int i=0;i<size;i++)
    {
        printf("Number at index %i=%i\n",i,ptr[i]);
    }
    return 0;
}
