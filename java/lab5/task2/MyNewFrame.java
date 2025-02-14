import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.Timer;

class MyPanel extends JPanel {
    private int x;

    public MyPanel() {
        this.setBackground(Color.black);
        x = 100;

        
        Timer timer = new Timer(100, e -> moveText());
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        
        super.paintComponent(g);
        g.setColor(Color.WHITE);
        g.drawString("That is the second task in  day 5 in java", x, 100);
    }

    private void moveText() {
        x += 5;
        if (x > getWidth()) {
            x = 0;
        }
        repaint();
    }
}

class MyNewFrame extends JFrame {
    public MyNewFrame() {
        setTitle("Moving Text");
        setSize(600, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        MyPanel panel = new MyPanel();
        add(panel);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(() -> new MyNewFrame().setVisible(true));
    }
}