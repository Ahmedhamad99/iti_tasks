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
    void print()
    {
        if(img<0&&real>0){
                if(img==-1 && real >0){
                    cout <<real <<"-"<<"i"<<endl;
                }
                else if(img<0 && real>0) {
                    cout <<real <<img<<"i"<<endl;
                }
                else{
                        if(img==-1){
                            cout <<"-i"<<endl;
                        }
                        else{cout <<img<<"i"<<endl;}

                }

        }
        else if(real<0 && img<0)
        {
            if(img==-1)
            {
             cout <<real <<"-"<<"i"<<endl;
            }
            else {
                cout <<real <<"-"<<img<<"i"<<endl;
            }
        }
        else if (img==0){
                cout <<real<<endl;

        }
        else if (real==0){
                if(img==1){
                    cout <<"i"<<endl;
                }
                else if(img==-1)
                {
                    cout <<"-"<<"i"<<endl;
                }
                else{
                     cout <<img<<"i"<<endl;
                }

        }
        else{

            cout <<real <<"+"<<img<<"i"<<endl;
        }

    }
    Complex Add(Complex right)
    {
        Complex result;

        result.real=real+right.real;
        result.img=img+right.img;
        return result;


    }

};
Complex AddComplex(Complex& left,Complex& right)
{
    Complex result;

    int r=left.GetReal()+right.GetReal();
    int i=right.GetImg()+right.GetImg();

    result.SetReal(r);
    result.SetImg(i);

    return result;
}

int main()
{
    Complex c1;
    int fnum;;
    int snum;



    cout << "Enter the first number" << endl;
    cin>>fnum;


    cout<< "Enter the second number"<<endl;
    cin>>snum;


    c1.SetReal(fnum);
    c1.SetImg(snum);
    cout << "The result of complex"<<endl;
    c1.print();
    return 0;
}
