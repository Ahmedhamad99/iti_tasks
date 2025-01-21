#include <stdio.h>
#include <stdlib.h>
//5- pass array as input param []   ,pass pointer

void MultibleA(int* param, int size){



 for(int i =0;i<size;i++)
 {
     param[i]*=7;
 }

}
int main()
{
    int arr[5]={1,2,3,4,5};
    MultibleA(arr,5);
    return 0;
}



void Multible(int param[5]){



 for(int i =0;i<5;i++)
 {
     param[i]*=7;
 }

}
int main()
{
    int arr[5]={1,2,3,4,5};
    Multible(arr[5]);
    return 0;
}
