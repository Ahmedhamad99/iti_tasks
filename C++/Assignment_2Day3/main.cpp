#include <iostream>
//2- Stack
    //cpy ctor  MUST
    //= operator MUST
    //Stack reverseStack()

using namespace std;


class Stack
{
    int * arr;
    int tos;
    int size;
    public:
      Stack()
      {
          cout<<"Stack"<<endl;
          tos=0;
          size=5;
          arr=new int[size];

      }
      Stack(int _size)
      {
          cout<<"Stack"<<endl;
          tos=0;
          size=_size;
          arr=new int[size];
      }
      Stack(const Stack& oldone)
      {
          this->tos=oldone.tos;
          this->size=oldone.size;
          this->arr=new int[size];

          for(int i=0;i<tos;i++)
          {
              this->arr[i]=oldone.arr[i];
          }
          cout<<"copy ctor"<<endl;

      }
      ~Stack()
      {
          cout<<"Stack dest"<<endl;
          delete [] arr;


      }



      Stack& operator=(const Stack& right)
      {
          delete[] this->arr;

          this->tos=right.tos;
          this->size=right.size;
          this->arr=new int[size];

          for(int i=0;i<tos;i++)
          {
              arr[i]=right.arr[i];
          }
          return *this;
      }
      int isFull()
    {
        return tos==size;
    }
    int isEmpty()
    {
        return tos==0;
    }
    void push(int num)
    {
        if(!isFull())
        {
            arr[tos]=num;
            tos++;
        }
        else
        {
            cout<<"FULL !!!"<<endl;
        }
    }
    int pop()
    {
        int retVal=-12345;
        if(!isEmpty())
        {
            tos--;
            retVal=arr[tos];
            //return retVal;
        }
        else
        {
            //cout<<"EMPTY !!!"<<endl;
        }
        return retVal;

    }

      Stack reverseStack(){


        Stack result(this->size);
        result.tos = tos;


        int j = 0;
        for (int i = tos - 1; i > -1; --i) {
            result.arr[j] = arr[i];
            j++;
        }

        return result;
    }


};
int main()
{
    Stack s1(10),s2;
    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);
    s1.push(50);


    s2=s1;



    //
    Stack s3(s1);

    Stack s4;
    s4=s1;


    Stack s5=s1;
    return 0;
}
