
class Example{
    public static void main(String args[])
    {
        IPCutter cut = new IPCutter();
        System.out.println("The first way using method doIPSplit: ");
        cut.doIPSplit(args[0]);
        System.out.println("The second way useing Tokenizer: ");
        Token cutting = new Token();
        cutting.toke(args[0]);
    }
}