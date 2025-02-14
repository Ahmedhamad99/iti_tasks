public class IPCutter{

    static void doIPSplit(String arr)
    {
        String[] a = arr.split("\\.");
        for(int i=0;i<a.length;i++)
        {
            System.out.println(a[i]);
        }
    }
    
}