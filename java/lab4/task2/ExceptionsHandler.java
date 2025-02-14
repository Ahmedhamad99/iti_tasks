class Exeptions extends Exception{

    public Exeptions(String message) {
        super(message);
    }

}


class ThrowExeptions{
    public void exeptions1() throws Exeptions{
        throw new Exeptions("this exeption came from exeptions1");
    }
    
    public void exeptions2() throws Exeptions{
        throw new Exeptions("this exeption came from exeptions2");
    }
    public void exeptions3() throws Exeptions{
        throw new Exeptions("this exeption came from exeptions3");
    }

}

public class ExceptionsHandler{

    public static void main(String[] args) {
        ThrowExeptions thrower = new ThrowExeptions();

        try {
            thrower.exeptions1();
            
        } catch (Exeptions e) {
            System.err.println("We caught an "+ e.getMessage());
        }
        finally{
            System.err.println("Final messge for exeption1");
        }
        try {
            thrower.exeptions2();
        } catch (Exeptions e) {
            System.err.println("We caught an "+e.getMessage());
        }

        finally
        {
            System.err.println("Final messge for exeption2");
        }

        try{
            thrower.exeptions3();
        }
        catch(Exeptions e){
            System.err.println("We caught an "+e.getMessage());
        }
        finally{
            System.err.println("Final messge for exeption3");
        }
        }
    }
    
