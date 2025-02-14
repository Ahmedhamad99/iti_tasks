import java.util.StringTokenizer;
public class Token{

    static void toke(String arr)
    {
        StringTokenizer tokenizer = new StringTokenizer(arr,".");
        while(tokenizer.hasMoreTokens())
        {
            System.out.println(tokenizer.nextToken());
        }
    }
}