public class Method1{

    static void wordnum(String arr,String word)
    {
        String[] a = arr.split("\\ ");
        int count=0;
        for(String wor : a)
        {
            if(wor.equals(word))
            {
                count++;
            }
            
            
        }
        System.out.println(count);
    }
    
}