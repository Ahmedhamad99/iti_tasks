#include <iostream>
//Complex
//1- Complex
    //cpy ctor useless
    //c1+c2
    //c1+=c2
    //++c1
    //c1++
    //c1+10
    //c1>c2
    //(int)c1
    //c1=c2  useless

//10+c1
using namespace std;

class Complex
{
   private:
   int real;
   int img;

   public:
       void SetReal(int _real)
       {
           real=_real;
       }
       void SetImg(int _img)
       {
           img=_img;
       }
       int GetReal()
       {
           return img;
       }
       int GetImg()
       {
           return img;
       }
       Complex()
       {
           cout<<"ctor"<<endl;
           real=img=0;
       }
       Complex(int _r,int _i)
       {
           cout<<"ctor"<<endl;
           real=_r;
           img=_i;
       }
       ~Complex()
       {
           cout<<"Dest"<<endl;
       }
       Complex(const Complex& right)
       {
          this->real=right.real;
          this->img=right.img;
          cout<<"Copy ctor"<<endl;

       }
       void print()
       {
           cout<<real<<"+"<<img<<"i"<<endl;
       }
      Complex operator+(const Complex& right)
      {
          Complex result;
          result.real=real+right.real;
          result.img=this->img+right.img;
          return result;

      }
    Complex& operator+=(const Complex& right)
     {
        real+=right.real;
        img+=right.img;
        return *this;
     }

    Complex& operator++()
    {
        real++;
        this->img++;
        return *this;
    }

    Complex operator++(int)
    {
        Complex result;
        result.real=this->real;
        result.img=this->img;

        this->real++;
        this->img++;
        return result;
    }
    Complex operator+(int _num)
    {
        Complex result(real+_num,img);
        return result;
    }

    int operator>(Complex right)
    {
        return this->real>right.real && this->img>right.img;
    }

    operator int ()
    {
        return real;
    }

    Complex& operator=(const Complex& right)
    {
        real=right.real;
        img=right.img;

        return *this;

    }
};

Complex operator+(int _num,const Complex& right)
{
    Complex result;
    result.SetReal(right.GetReal()+_num);
    result.SetImg(right.GetImg());
    return result;
}


int main()
{
    Complex c1(3,4);
    Complex c2(5,6);
    Complex c3;


    c3=c1+c2;
    c1.print();
    c2.print();
    c3.print();

    cout<<"------------"<<endl;
    c1+=c2;
    c1.print();
    c2.print();
    cout<<"------------"<<endl;
    ++c1;
    c1.print();
    cout<<"------------"<<endl;
    c3=c1+10;
    c1.print();
    c3.print();
    cout<<"------------"<<endl;

    c1>c2;
    c1.print();
    c2.print();

    cout<<"------------"<<endl;


   (int)c1;
   c1.print();
   cout<<"------------"<<endl;
   c1=c2;
   c1.print();
   c2.print();

   cout<<"------------"<<endl;
   10+c1;
   c1.print();
    return 0;
}



