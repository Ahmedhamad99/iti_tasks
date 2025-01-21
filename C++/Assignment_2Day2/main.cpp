#include <iostream>

using namespace std;


class Stack
{
private:
    int* arr;
    int tos;
    int size;
public:
    Stack()
    {
        tos=0;
        size=5;
        arr =new int[size];
        cout<<"ctor"<<endl;

    }
    Stack(int _size)
    {
        tos=0;
        size=_size;

        arr=new int[size];
        cout<<"ctor"<<endl;

    }
    ~Stack()
    {
        for(int i=0;i<size;i++)
        {
            arr[i]=-1;

        }
        delete[] arr;
        cout<<"Stack dest calld"<<endl;
    }
    void push(int value)
    {
        if(!IsFull()){
            arr[tos]=value;
            tos++;

        }
        else{
            cout<<"FULL !!!"<<endl;
        }

    }
    int pop()
    {
        int result;
        if(!IsEmpty())
        {
            tos--;
            result=arr[tos];
            return result;
        }
        else{
             cout<<"EMPTY!!!!";
             return -1234;
        }

    }
    int IsFull()
    { return tos==size; }
    int IsEmpty()
    { return tos==0;}
    friend void ViewStack(Stack param);
};

void ViewStack(Stack param)
{
    for(int i=0;i<param.tos;i++)
    {
        cout<<param.arr[i]<<endl;
    }
}
int main()
{
    Stack s1(10);
    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);
    s1.push(50);
    ViewStack(s1); //Pass by Values 10,20,30,40,50
    ViewStack(s1);
    return 0;
}
