class Word{

    public static void main(String args[])
    {
        Method1 word = new Method1();
        Method2 word2 = new Method2();

        String words = "ahmed adel adel aymen";
        System.out.println("The first way: ");
        word.wordnum(words,args[0]);
        System.out.println("The second way: ");
        word2.wordnum1(words,args[0]);
    }
}
