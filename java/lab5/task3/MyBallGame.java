import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MyBallGame extends JFrame {

    int WIDTH = 700;
    int HEIGHT = 500;
    int BALL_SIZE = 70;
    int DELAY = 15; 

    int ballX = 0; 

    int ballY = 0; 
    int ballXSpeed = 7; 
    int ballYSpeed = 7; 
    
    public MyBallGame() {
       
        setTitle("Bouncing Ball Application");
        setSize(WIDTH, HEIGHT);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); 

        
        JPanel ballPanel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                this.setBackground(Color.BLACK);
                super.paintComponent(g);
                g.setColor(Color.WHITE);
                g.fillOval(ballX, ballY, BALL_SIZE, BALL_SIZE); 
            }
        };
        ballPanel.setBackground(Color.WHITE);


        add(ballPanel);


        Timer timer = new Timer(DELAY, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                updateBallPosition();
                ballPanel.repaint(); 
            }
        });
        timer.start();
    }
    private void updateBallPosition() {
        
        ballX += ballXSpeed;
        ballY += ballYSpeed;

        
        if (ballX <= 0 || ballX + BALL_SIZE >= getWidth()) {
            ballXSpeed = -ballXSpeed; 
        }
        if (ballY <= 0 || ballY + BALL_SIZE >= getHeight()) {
            ballYSpeed = -ballYSpeed; 
        }
    }

    public static void main(String[] args) {
        
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                
                new MyBallGame().setVisible(true);
            }
        });
    }
}

