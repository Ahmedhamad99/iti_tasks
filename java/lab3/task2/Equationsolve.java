public class Equationsolve {
    public static void main(String[] args) {
        float a = Float.parseFloat(args[0]);
        float b = Float.parseFloat(args[1]);
        float c = Float.parseFloat(args[2]);
        new Equation().apply(new Float[]{a, b, c});
        
    }
}

