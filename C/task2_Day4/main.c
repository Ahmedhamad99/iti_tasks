#include <stdio.h>
#include <stdlib.h>

///5- power recursive

int Power(int b,int p)
{
    if(p==0)
    {
        return 1;
    }
    if(p % 2 ==0){
            return Power(b,p/2) * Power(b,p/2);

    }
    else{
        return b * Power(b,p - 1);
    }
}
int main()
{
    int _base=2;
    int _power=4;
    int res=Power(_base,_power);
    printf("%i",res);
    return 0;
}
