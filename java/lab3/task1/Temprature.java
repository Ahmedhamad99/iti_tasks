import java.util.function.Function;

public class Temprature implements Function<Float,Float>{
    @Override
    public Float apply(Float temp)
    {   float cons = Float.parseFloat("1.8");
        float convert = (temp - 32)/cons;

        return convert;
    }
}
