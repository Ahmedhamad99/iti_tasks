import java.util.function.Function;

public class Temp {
    public static void main(String[] args) {
        Float temp = Float.parseFloat(args[0]);

        Function<Float, Float> tempInFahrenheit = new Function<Float, Float>() {
            @Override
            public Float apply(Float tem) {
                return (tem * 9 / 5) + 32;
            }
        };

        float degree = tempInFahrenheit.apply(temp);
        System.out.println("Temperature in Fahrenheit is: " + degree);
    }
}
