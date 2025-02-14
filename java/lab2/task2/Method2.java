public class Method2 {
    
    static void wordnum1(String arr,String word)
    {
        int count=0;
        int index = 0;

        while((index=arr.indexOf(word,index)) !=-1)

        {
            count++;
            index +=word.length();
        }
        System.out.println(count);
        
    }
}
