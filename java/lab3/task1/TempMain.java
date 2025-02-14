public class TempMain {
    public static void main(String[] args) {
        float x = Float.parseFloat(args[0]);
        System.out.println("Temp is "+args[0]+"  F or "+
        new Temprature().apply(x)+" C"
        );
    }
}

