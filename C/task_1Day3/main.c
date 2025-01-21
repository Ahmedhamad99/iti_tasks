#include <stdio.h>
#include <stdlib.h>
//4- pass by value/address    swap
void SwapV(int num1,int num2)
{
    int swp;
    swp=num1;
    num1=num2;
    num2=swp;
}
int main()
{
    int x =5;
    int y =7;
    SwapV(x,y);
    printf("x=%i\n",x);
    printf("y=%i\n",y);
    return 0;

}





//by_address
void SwapA(int* num1,int* num2)
{
    int swp;
    swp=*num1;
    *num1=*num2;
    *num2=swp;

}
int add()
{
    int x =10;
    int y=50;
    SwapA(&x,&y);
    printf("x=%i\n",x);
    printf("y=%i\n",y);
    return 0;
}
