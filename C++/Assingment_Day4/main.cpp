#include <iostream>
#include "graphics.h"
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


class MNFLine
{
private:
    Point start;
    Point end;
    int mnfcolor;
public:
    void SetStart(Point _start){start=_start;}
    Point GetStart(){return start;}

    void SetEnd(Point _end){end=_end;}
    Point GetEnd(){return end;}

    void SetMnfcolor(int _mnfcolor){mnfcolor=_mnfcolor;}
    int GetMnfcolor(){return mnfcolor;}

    MNFLine()
    {
        start.SetX(0);
        start.SetY(0);
        end.SetX(0);
        end.SetY(0);
        mnfcolor=0;
    }

    MNFLine(int x1,int y1,int x2,int y2,int _mnfcolor)
    {
        start.SetX(x1);
        start.SetY(y1);
        end.SetX(x2);
        end.SetY(y2);
        mnfcolor=_mnfcolor;
    }

    MNFLine(const MNFLine& old)
    {
        start=old.start;
        end=old.end;
        mnfcolor=old.mnfcolor;
    }
    ~MNFLine()
    {

    }
    void DrawLine()
    {
        setcolor(mnfcolor);
        line(start.GetX(),start.GetY(),end.GetX(),end.GetY());
    }



};

class MNFRectangle
{
private:
    Point ul;
    Point lr;
    int mnfcolor;
public:
    void SetUl(Point _ul)
    {
        ul=_ul;
    }
    Point GetUl()
    {
        return ul;
    }
    void SetLr(Point _lr)
    {
        lr=_lr;
    }
    Point GetLr()
    {
        return lr;
    }

    void Setmnfcolor(int _mnfcolor)
    {
        mnfcolor=_mnfcolor;
    }
    int GetMnfcolor()
    {
        return mnfcolor;
    }

    MNFRectangle()
    {
        mnfcolor=0;
    }
    MNFRectangle(int x1,int y1,int x2,int y2,int _mnfcolor)
    :ul(x1,y1),lr(x2,y2)
    {
        mnfcolor=_mnfcolor;
    }
    MNFRectangle(const MNFRectangle& old)
    {
        ul=old.ul;
        lr=old.lr;
        mnfcolor=old.mnfcolor;
    }
    ~MNFRectangle()
    {

    }
    void DrawRect()
    {
        setcolor(mnfcolor);
        rectangle(ul.GetX(),ul.GetY(),lr.GetX(),lr.GetY());
    }
};


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
class MNFTriangle
{
    Point p1;
    Point p2;
    Point p3;
    int mnfcolor;
    public:
    void SetP1(Point _p1)
    {
        p1=_p1;
    }
    Point GetP1()
    {
        return p1;
    }
    void SetP2(Point _p2)
    {
        p2=_p2;
    }
    Point GetP2()
    {
        return p2;
    }
    void SetP3(Point _p3)
    {
        p3=_p3;
    }
    Point GetP3()
    {
        return p3;
    }
    void SetMnfcolor(int _mnfcolor)
    {
        mnfcolor=_mnfcolor;
    }
    int GetMnfcolor()
    {
        return mnfcolor;
    }

    MNFTriangle()
    {
        mnfcolor=0;
    }
    MNFTriangle(int x1,int y1,int x2,int y2,int x3,int y3,int _mnfcolor)
    :p1(x1,y1),p2(x2,y2),p3(x3,y3)
    {
        mnfcolor=_mnfcolor;
    }
    MNFTriangle(const MNFTriangle& old)
    {
          p1=old.p1;
          p2=old.p2;
          p3=old.p3;
          mnfcolor=old.mnfcolor;
    }
    ~MNFTriangle()
    {

    }
    void DrawTriangle()
    {
        setcolor(mnfcolor);
        line(p1.GetX(),p1.GetY(),p2.GetX(),p2.GetY());
        line(p2.GetX(),p2.GetY(),p3.GetX(),p3.GetY());
        line(p1.GetX(),p1.GetY(),p3.GetX(),p3.GetY());

    }
};
int main()
{
    initgraph();
    MNFLine l(410,151,360,400,7);
    l.DrawLine();



    MNFCircle l33(450,150,80,55);
    l33.DrawCircle();
    MNFCircle l3(450,400,180,55);
    l3.DrawCircle();

    MNFLine l1(485,130,535,380,7);
    l1.DrawLine();

    MNFLine l11(415,485,415,550,7);
    l11.DrawLine();

    MNFLine l31(465,490,465,550,7);
    l31.DrawLine();





    MNFRectangle l2(215,515,690,570,5);
    l2.DrawRect();







    MNFTriangle l4(530,525,500,560,570,560,5);
    l4.DrawTriangle();


    return 0;
}

