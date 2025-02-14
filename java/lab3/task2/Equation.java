
import java.util.function.Function;

public class Equation  implements Function<Float[],Float[]>{
    @Override
    public Float[] apply(Float[] euanum) {
        float a = euanum[0];
        float b = euanum[1];
        float c = euanum[2];
        float discrt = b * b - 4 * a * c;
        
        if (discrt > 0) {
            float root1 = ((-b + (float) Math.sqrt(discrt)) / (2 * a));
            float root2 = ((-b - (float) Math.sqrt(discrt)) / (2 * a));
            System.out.println("The roots are: ");
            System.out.println("The root1 is: " + root1);
            System.out.println("The root2 is: " + root2);
        } else if (discrt == 0) {
            float root = (-b / (2 * a));
            System.out.println("The only root is:");
            System.out.println(root);
        } else {
            float casereal = -b / (2 * a);
            float caseimagin = (float) Math.sqrt(-discrt) / (2 * a); 
            System.out.println("The roots are: ");
            System.out.println("The root1: " + casereal + " + " + caseimagin + "i");
            System.out.println("The root2: " + casereal + " - " + caseimagin + "i");
        }

        return null;
    }
}
