
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.KeyListener;
import javax.swing.JButton;
import javax.swing.JPanel;



public  class  SimpleThread extends JPanel{
  int x,y;
  JButton inc,dec;

  public SimpleThread()
  {
    this.setBackground(Color.CYAN);
    x = y = 50;
    this.setFocusable(true);
    new Thread(new Runnable() {
        @Override
        public void run()
        {
            throw  new UnsupportedOperationException("not supportd");
        }
    }).start();
    x=100;
  }
  @Override 
  public  void paintComponent(Graphics g)
  {
    super.paintComponent(g);
    if(x>=this.getWidth()) x =0 ;
    g.drawString("Hello", x, 100);
  }
  class 
}