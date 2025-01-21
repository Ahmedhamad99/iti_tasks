#include <iostream>

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
    int GetReal()
    {
        return real;
    }

    void SetImg(int _img)
    {
        img=_img;
    }
    int GetImg()
    {
        return img;
    }

    Complex()
    {
        real=this->img=0;
        cout<<"def ctor calld"<<endl;
    }
    Complex(int _real,int _img)
    {
        real=_real;this->img=_img;
        cout<<"2p ctor calld"<<endl;
    }
    Complex(int _num)
    {
        real=this->img=_num;
        cout<<"1p ctor calld"<<endl;
    }
    ~Complex()
    {
        cout<<"dest calld"<<endl;
    }

    void Print()
    {
        cout<<real<<"+"<<img<<"i"<<endl;
    }
    //member Add function

    Complex Add(Complex left,Complex right)
    {
        Complex result;
        result.real=left.real+right.real;
        result.img=left.img+right.img;
        return result;
    }

};

Complex AddComplex(Complex left,Complex right)
{
   Complex result;
   int r=left.GetReal()+right.GetReal();
   int i=left.GetImg()+right.GetImg();
   result.SetReal(r);
   result.SetImg(i);
   return result;

}

int main()
{
    Complex c1,c2,c3;
    c3=AddComplex(c1,c2) ;
    return 0;
}
