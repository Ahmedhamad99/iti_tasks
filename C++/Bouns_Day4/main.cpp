#include <iostream>
#include "graphics.h"
#include <cmath>
#include<cstdlib>
#include <conio.h>
using namespace std;


class Point
{
    int x;
    int y;
public:
    void SetX(int _x){x=_x;}
    int GetX(){return x;}

    void SetY(int _y){y=_y;}
    int GetY(){return y;}

    Point()
    {
        x=y=0;
    }
    Point(int _x,int _y)
    {
        x=_x;
        y=_y;
    }
    Point(const Point& old)
    {
        x=old.x;
        y=old.y;
    }
    ~Point()
    {

    }


} ;



class MNFCircle
{
    Point center;
    int radius;
    int mnfcolor;
public:
    void SetCenter(Point _center)
    {
        center=_center;
    }
    Point GetCenter()
    {
        return center;
    }
    void SettRadius(int _radius)
    {
        radius=_radius;
    }
    int GetRadius()
    {
        return radius;
    }

    void SetMnfcolor(int _mnfcolor)
    {
        mnfcolor=_mnfcolor;
    }
    int GetMnfcolor()
    {
        return mnfcolor;
    }

    MNFCircle()
    {
        radius=0;
        mnfcolor=0;
    }

    MNFCircle(int x,int y,int _radius,int _mnfcolor)
    :center(x,y)
    {
        mnfcolor=_mnfcolor;
        radius=_radius;
    }
    MNFCircle(const MNFCircle& old)
    {
        center=old.center;
        radius=old.radius;
        mnfcolor=old.mnfcolor;
    }
    ~MNFCircle()
    {

    }

    void DrawCircle()
    {
        setcolor(mnfcolor);
        circle(center.GetX(),center.GetY(),radius);
    }

};

int main()
{
    initgraph();


    int i=0;
    int j=0;
    int d=0;
    while(true)
    {
        system("CLS");
            MNFCircle l33(450+i,150+j,60,15);
            l33.DrawCircle();


            MNFCircle l3(450+i,400+j,60,15);
            l3.DrawCircle();

            MNFCircle l1(300+i,250+j,60,15);
            l1.DrawCircle();

            MNFCircle l5(600+i,250+j,60,15);
            l5.DrawCircle();


            i= 200 * sin(d * 3.1415/180);
            j=150 * cos(d * 3.1415/180);

            d++;
            if (d>=360)
            {
                d=0;
            }
            Sleep(50);

    }





    return 0;
}




