// package mypakge;
public class Test {
    public static void main(String[] args) {
        int x= 0;
        int[] myarr = new int[5];
        myarr[0]=1;
        myarr[1]=2;
        myarr[2]=3;
        myarr[3]=4;
        myarr[4]=5;

        for(int i =0; i<args.length;i++)
        {

            x++;
            System.err.println(myarr[i]);
            // System.out.println(x);
            System.out.println("Hello "+ args[i]+" "+args[i+1]);
        }

    }

}
