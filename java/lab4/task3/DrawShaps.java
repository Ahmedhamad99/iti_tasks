
import java.util.ArrayList;
import java.util.List;

abstract  class Shape{
    abstract  void draw();
}


class  Rectangle extends  Shape{
    @Override
    void draw()
    {
        System.err.println("We are Drawing A rectangel");
    }
}

class triangle extends Shape{
    @Override
    void draw()
    {
        System.err.println("we are drawing a triangle"); 
    }
}
class  circle extends  Shape{
    @Override
    void draw()
    {
        System.err.println("we are drawing a circlw");
    }
}


public class DrawShaps {

    public static void drawshapes(List<? extends Shape> shapes)
    {
        for(Shape shape : shapes)
        {
            shape.draw();
        }
    }

    public static void main(String[] args) {
        List <Rectangle> rectangles = new ArrayList<>();
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());

        List <triangle> triangles = new ArrayList<>();
        triangles.add(new triangle());
        triangles.add(new triangle());
        triangles.add(new triangle());

        List <circle> circles = new ArrayList<>();
        circles.add(new circle());
        circles.add(new circle());
        circles.add(new circle());

        drawshapes(circles);
        System.err.println("===========================");
        drawshapes(triangles);
        System.err.println("===========================");
        drawshapes(rectangles);
        
    }
    
}
