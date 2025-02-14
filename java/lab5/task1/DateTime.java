import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.*;

public class DateTime extends JFrame {

    private JLabel timeLabel;
    private Timer timer;

    public DateTime() {
        
       
        setTitle("Date and Time Application");
        setSize(300, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); 

        timeLabel = new JLabel();
        timeLabel.setBackground(Color.BLACK);
        timeLabel.setFont(new Font("Arial", Font.BOLD, 18));
        
        timeLabel.setHorizontalAlignment(JLabel.CENTER);

        setLayout(new BorderLayout());
        add(timeLabel, BorderLayout.CENTER);

        
        timer = new Timer(1000, e -> updateTime());
        timer.start();

      
        updateTime();
    }

    private void updateTime() {
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String currentTime = dateFormat.format(new Date());

        
        timeLabel.setText(currentTime);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new DateTime().setVisible(true));
    }
}