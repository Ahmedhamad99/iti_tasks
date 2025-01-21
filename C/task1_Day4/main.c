#include <stdio.h>
#include <stdlib.h>
///2- try dynamic allocation for pointer
// topointer to integer read and write
////  int ** arr===int arr[3][4]
int main()
{
    int row;
    int col;
    int* *ptrtoptr;

    ptrtoptr=malloc(row * sizeof(int*));

    printf("Please Enter number of row array\n");
    scanf("%i",&row);

    for(int i=0;i<row;i++)
    {
        ptrtoptr[i]=malloc(col * sizeof(int));

    }
    printf("Please enter number of column\n");
    scanf("%i",&col);
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            printf("Enter a number at index %i %i\n",i,j);
            scanf("%i",&ptrtoptr[i][j]);
        }
    }

    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            printf("A number at index %i %i = %i\n",i,j,ptrtoptr[i][j]);

        }
    }
    return 0;
}
