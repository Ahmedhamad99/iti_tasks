class Example2{
    public static void main(String args[])
    {
        String param1 = "CoreJava";
        if(args.length>0)
        {
            if(param1.equals(args[0])){
                System.out.println("true value "+args[0]);
            }
            else
            {
                System.out.println("false value "+args[0]);

            }
        }
        else{
            System.out.println("you do not enterd a value");
        }
       
    }
}