#include <iostream>

#include "graphics.h"
using namespace std;


class Shape
{
protected:
    int mnfcolor;
public:
    void SetMnfcolor(int _mnfcolor)
    {
        mnfcolor=_mnfcolor;
    }
    int GetMnfcolor()
    {
        return mnfcolor;
    }

    Shape()
    {
        mnfcolor=0;
    }
    Shape(int _mnfcolor)
    {
        mnfcolor=_mnfcolor;
    }
    ~Shape()
    {

    }

    Shape(const Shape& old)
    {
        mnfcolor=old.mnfcolor;
    }
    virtual void Draw()=0;
};
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


class MNFLine:public Shape
{
private:
    Point start;
    Point end;
public:
    void SetStart(Point _start){start=_start;}
    Point GetStart(){return start;}

    void SetEnd(Point _end){end=_end;}
    Point GetEnd(){return end;}
    MNFLine()
    {

    }

    MNFLine(int x1,int y1,int x2,int y2,int _mnfcolor)
    :start(x1,y1),end(x2,y2),Shape(_mnfcolor)
    {

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
    void Draw()
    {
        setcolor(mnfcolor);
        line(start.GetX(),start.GetY(),end.GetX(),end.GetY());
    }



};

class MNFRectangle:public Shape
{
private:
    Point ul;
    Point lr;
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



    MNFRectangle()
    {
    }
    MNFRectangle(int x1,int y1,int x2,int y2,int _mnfcolor)
    :ul(x1,y1),lr(x2,y2),Shape(_mnfcolor)
    {

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
    void Draw()
    {
        setcolor(mnfcolor);
        rectangle(ul.GetX(),ul.GetY(),lr.GetX(),lr.GetY());
    }
};


class MNFCircle:public Shape
{
    Point center;
    int radius;
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



    MNFCircle()
    {
        radius=0;
    }

    MNFCircle(int x,int y,int _radius,int _mnfcolor)
    :center(x,y),Shape(_mnfcolor)
    {
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

    void Draw()
    {
        setcolor(mnfcolor);
        circle(center.GetX(),center.GetY(),radius);
    }

};
class MNFTriangle:public Shape
{
    Point p1;
    Point p2;
    Point p3;
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


    MNFTriangle()

    {
    }
    MNFTriangle(int x1,int y1,int x2,int y2,int x3,int y3,int _mnfcolor)
    :p1(x1,y1),p2(x2,y2),p3(x3,y3),Shape(_mnfcolor)
    {

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
    void Draw()
    {
        setcolor(mnfcolor);
        line(p1.GetX(),p1.GetY(),p2.GetX(),p2.GetY());
        line(p2.GetX(),p2.GetY(),p3.GetX(),p3.GetY());
        line(p1.GetX(),p1.GetY(),p3.GetX(),p3.GetY());

    }
};


class Picture
{
private:
   Shape ** SPtr;
   int sSize;

public:
    Picture()
    {
        SPtr=NULL;
        sSize=0;

    }
    void SetShaps(Shape **_SPtr,int _sSize)
    {
        SPtr=_SPtr;
        sSize=_sSize;
    }



    void DrawAll()
    {
        for(int i=0;i<sSize;i++)
        {
            SPtr[i]->Draw();
        }
    }
};
int main()
{
    initgraph();


    MNFLine larr[4]={MNFLine(410,151,360,400,5),MNFLine(485,130,535,380,5),MNFLine(415,485,415,530,7),MNFLine(465,490,465,530,7)};

    MNFRectangle rarr[2]={MNFRectangle(110,110,740,600,3),MNFRectangle(200,530,690,590,0)};

    MNFCircle carr[2]={MNFCircle(450,150,80,55),MNFCircle(450,400,180,55)};

    MNFTriangle tarr[1]={MNFTriangle(530,540,480,560,580,560,0)};



    Shape * pshapes[13]=
    {
       rarr,&rarr[0],&rarr[1],carr,&carr[0],&carr[1],larr,&larr[0],&larr[1],&larr[2],&larr[3],tarr,&tarr[1]
    };
    Picture p1;
    p1.SetShaps(pshapes,13);



    p1.DrawAll();


    return 0;
}
