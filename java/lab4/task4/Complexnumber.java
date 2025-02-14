interface Complex<T>
{
    T getReal();
    T getImaginary();

    Complex<T> add(Complex<T> z);
    Complex<T> subtract(Complex<T> z);
    Complex<T> product(Complex<T> z);
    Complex<T> divid(Complex<T> z);
}

class DoubleComplex implements Complex<Double>
{
    private final double real;
    private final double imginary;

    public  DoubleComplex(double real,double imginary)
    {
        this.real = real;
        this.imginary = imginary;
    }
    @Override
    public Double getReal()
    {
        return real;
    }
    @Override
    public  Double getImaginary(){
        return imginary;

    }
    @Override
    public Complex<Double> add(Complex<Double> z)
    {
        return new DoubleComplex(this.real+z.getReal(), this.imginary+z.getImaginary());
    }
    @Override
    public Complex<Double> subtract(Complex<Double> z)
    {
        return new DoubleComplex(this.real-z.getReal(), this.imginary-z.getImaginary());
    }
    @Override
    public Complex<Double> product(Complex<Double> z)
    {
        double newreal = this.real * z.getReal() - this.imginary * z.getImaginary();
        double newimagin = this.real * z.getImaginary() + this.imginary * z.getReal();
        return new DoubleComplex(newreal,newimagin);
    }
    @Override
    public Complex<Double> divid(Complex<Double> z)
    {
        double denom = z.getReal() * z.getReal() + z.getImaginary() * z.getImaginary();
        double newreal = (this.real * z.getReal() + this.imginary * z.getImaginary())/denom;
        double newimagin = (this.imginary * z.getReal() - this.real*z.getImaginary())/denom;
        return new DoubleComplex(newreal,newimagin);
    }
    @Override
    public String toString()
    {
        return  real + " + " + imginary + "x"; 
    }
}

public class Complexnumber {
    public static void main(String[] args) {
        Double num1 = Double.parseDouble(args[0]);
        Double num2 = Double.parseDouble(args[1]);
        Double num3 = Double.parseDouble(args[2]);
        Double num4 = Double.parseDouble(args[3]);

        Complex<Double> complexNum1 = new DoubleComplex(num1,num2);
        Complex<Double> complexNum2 = new DoubleComplex(num3,num4);
        System.out.println("Suming: " + complexNum1.add(complexNum2));
        System.out.println("Prudcting : "+ complexNum1.product(complexNum2));
        System.out.println("Subtracting : "+ complexNum1.subtract(complexNum2));
        System.out.println("Dividing : "+ complexNum1.divid(complexNum2));
    }
    
}








